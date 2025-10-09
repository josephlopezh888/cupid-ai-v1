import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { resolve } from 'path';
import mime from 'mime-types';
import { createReadStream, existsSync } from 'fs';
import { db } from '~/server/db';
import { NextResponse } from 'next/server';

const STORAGE_DIR = resolve(process.cwd(), 'src/storage/images/users/'); // Use process.cwd() to get the current working directory

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    const email = req.url?.split("profile/")[1];
    console.log(STORAGE_DIR);
  try {
    const user = await db.user.findUnique({
      where: { email: email || '' },
      select: { avatar: true },
    });

    if (!user?.avatar) {
        return NextResponse.json({ success: false, error: 'Avatar not found.' }, { status: 404 });
      }
  
      const headers = new Headers();

      headers.set("Content-Type", "image/*");
    
      const res = await fetch(user.avatar);

      const blob = await res.blob();

      return new NextResponse(blob, { status: 200, statusText: "OK", headers});
    } catch (error) {
      console.log(error);
      return new NextResponse('An error occurred while getting the profile.', { status: 500, statusText: "FAILED"});
    }
  }