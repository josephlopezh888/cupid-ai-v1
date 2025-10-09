import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export async function POST(req: Request)  {

    const { token } = await req.json();
    try {
      const response = await axios.post(
        'https://www.google.com/recaptcha/api/siteverify',
        null,
        {
          params: {
            secret: process.env.RECAPTCHA_SECRET_KEY,
            response: token,
          },
        }
      );

      if (response.data.success) {
        return NextResponse.json({ success: true }, {status: 200});
      } else {
        return NextResponse.json({ success: false, errorCodes: response.data['error-codes'] }, {status: 400});
      }
    } catch (error) {
      return NextResponse.json({ success: false, error: 'An error occurred while verifying reCAPTCHA.' }, {status: 500});
    }
};