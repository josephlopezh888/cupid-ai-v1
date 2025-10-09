"use server"

import axios from "axios";
import { db } from "~/server/db";
import bcrypt from "bcryptjs"

function generateRandomString(length: any) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charactersLength);
      result += characters.charAt(randomIndex);
    }
    return result;
  }

export const signUp = async (email: string, password: string, recaptcha: string) => {
    const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY;
    const recaptchaUrl = "https://www.google.com/recaptcha/api/siteverify";
    const recaptchaData = {
      secret: recaptchaSecretKey,
      response: recaptcha,
    };

    try {
        const recaptchaVerification = await axios.post(recaptchaUrl, null, {
          params: recaptchaData,
        });
    
        if (!recaptchaVerification.data.success) {
          return "reCAPTCHA verification failed.";
        }
      } catch (error) {
        return "reCAPTCHA verification error.";
      }

    const users = await db.user.findUnique({
        where:  {
            email,
        }
    })

    if (users){
        return "User with that email already exists.";
    }

    const passwordHash = bcrypt.hashSync(password, 12);

    const newUser = await db.user.create({
        data: {
          email,
          passwordHash,
        },
      });
      
      const referralCode = generateRandomString(8);
      
      const newReferral = await db.referral.create({
        data: {
          rfCode: referralCode,
          userId: newUser.id,
        },
      });
    return "Successfully created new user."
}