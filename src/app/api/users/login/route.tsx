import UserModel from "@/lib/model/userModel";
import connectToDatabase from "@/lib/mongoose/mongoose";
import { userLoginSchema } from "@/lib/validation/uservalidation";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { secret } from "@/lib/mongoose/db";

export async function POST(req: Request){
    if (req.method !== 'POST'){
        return NextResponse.json({ status: 405 , message: `Request is not match = ${req}`});
    }

    try {
        const body = await req.json();
        const { email, password } = userLoginSchema.parse(body);

        await connectToDatabase();

        const user = await UserModel.findOne({ email });
        if (!user) {
            return NextResponse.json({status: 401, message: 'Invaild credentials'}); // Unauthorized
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return NextResponse.json({ status: 401, meaasge: `Password is not match` });
        }

        if (secret !== undefined) {
            const token = jwt.sign({ userId: user._id}, secret, {expiresIn: '1h' });
            return NextResponse.json({ status: 200, data: token});
        }
    } catch (error) {
        console.error(error);
        NextResponse.json({ status: 500, message: `Internal Server Error` });
    }
}