import UserModel from "@/lib/model/userModel";
import connectToDatabase from "@/lib/database/mongoose";
import { userLoginSchema } from "@/lib/validation/uservalidation";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { secret } from "@/lib/database/db";
import { setCookie } from "nookies";
import { withCORS } from "@/lib/database/setheadet";

export async function POST(req: Request) {
    if (req.method !== 'POST') {
        const response = NextResponse.json({ status: 405, message: `Request is not match = ${req}` });
        return withCORS(response);
    }

    try {
        const body = await req.json();
        const { email, password } = userLoginSchema.parse(body);

        await connectToDatabase();

        const user = await UserModel.findOne({ email });
        if (!user) {
            const response = NextResponse.json({ status: 401, message: 'Invaild credentials' }); // Unauthorized
            return withCORS(response);
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            const response = NextResponse.json({ status: 401, meaasge: `Password is not match ${isMatch}` });
            return withCORS(response);
        }

        if (secret !== undefined) {
            const token = jwt.sign({ userId: user._id }, secret, /*{expiresIn: '1h' }*/);
            const response = NextResponse.json({ status: 200, token: token });

            // Set cookie in response headers
            setCookie({ res: response }, 'cookie', token, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/auth',
            });

            return withCORS(response);
        }
    } catch (error) {
        console.error(error);
        const response = NextResponse.json({ status: 500, message: `Internal Server Error` });
        return withCORS(response);
    }
}