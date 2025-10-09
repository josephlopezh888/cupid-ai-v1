import { PrismaAdapter } from "@next-auth/prisma-adapter";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
  User,
  Account,
  Profile,
  Session,
} from "next-auth";
import { JWT } from "next-auth/jwt";
import DiscordProvider from "next-auth/providers/discord";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { env } from "~/env.mjs";
import { db } from "~/server/db";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import axios from "axios";
/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  providers: [
      GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID as string,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET  as string
      }),
      DiscordProvider({
          clientId: process.env.DISCORD_CLIENT_ID as string,
          clientSecret: process.env.DISCORD_CLIENT_SECRET as string
      }),
      CredentialsProvider({
          name: "Credentials",
          credentials: {
              email: {
                  label: "Email",
                  type: "text",
                  placeholder: "your@email.com",
              },
              password: {
                  label: "password",
                  type: "password"
              }
          },
          async authorize(credentials) {

              if (!credentials) {
                  return null;
              }

              const { email, password } = credentials;

              const user = await db.user.findUnique({
                  where: {
                      email
                  }
              });

              if (!user) {
                  return null
              }

              const userPassword = user.passwordHash;

              const isValidPassword = bcrypt.compareSync(password, userPassword);

              if (!isValidPassword) {
                  return null;
              }

              return user;
          }
      })
  ],
  pages: {
      signIn: '/auth/signin',
      signOut: '/auth/signout',
  },
  secret: process.env.NEXTAUTH_SECRET,
  jwt: {
      async encode({ secret, token }) {
          if (!token) {
              throw new Error('No token provided to encode');
          }
          return jwt.sign(token, secret)
      },
      async decode({ secret, token }) {
          if (!token) {
              throw new Error('No token provided to decode');
          }
          const decodedToken = jwt.verify(token, secret);

          if (typeof decodedToken === 'string') {
              return JSON.parse(decodedToken);
          } else {
              return decodedToken;
          }

      }
  },
  session: {
      strategy: 'jwt',
      maxAge: 30 * 24 * 60 * 60,
      updateAge: 24 * 60 * 60,
  },
  callbacks: {
      async session(params: { session: Session; token: JWT; user: User }) {
          if (params.session.user) {
              params.session.user.email = params.token.email;
          }

          return params.session;
      },
      async jwt(params: {
          token: JWT,
          user?: User | undefined,
          account?: Account | null | undefined,
          profile?: Profile | undefined,
          isNewUser?: boolean | undefined,
      }) {
          if (params.user) {
              params.token.email = params.user.email;
          }
          return params.token;
      }
  }
}


export const getServerAuthSession = () => getServerSession(authOptions);

