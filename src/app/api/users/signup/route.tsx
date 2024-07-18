import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import UserModel from "@/lib/model/userModel";
import connectToDatabase from "@/lib/mongoose/mongoose";
import { userRegistrationSchema } from "@/lib/validation/uservalidation";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { secret } from "@/lib/mongoose/db";
import { cookies } from "next/headers";
import { withCORS } from "@/lib/mongoose/setheadet";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, phonenumber, password, re_password, isAdmin } =
            userRegistrationSchema.parse(body);

        await connectToDatabase();

        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            const response = NextResponse.json(
                { message: "User already exists", daata: existingUser },
                { status: 409 }
            );
            return withCORS(response);
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new UserModel({
            name,
            email,
            phonenumber,
            password: hashedPassword,
            re_password,
            isAdmin,
        });
        await newUser.save();

        const response = NextResponse.json(
            { message: "User registered successfully", data: newUser },
            { status: 201 }
        );
        return withCORS(response);
    } catch (error) {
        if (error instanceof z.ZodError) {
            const response = NextResponse.json({ message: error.errors }, { status: 400 });
            return withCORS(response);
        }
        console.error(error);
        const response = NextResponse.json(
            { message: "Internal Server Error", data: error },
            { status: 500 }
        );
        return withCORS(response);
    }
}

export async function GET(req: NextRequest) {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
        const response = NextResponse.json({ status: 401, message: `Unauthorized: ${token} : No token found` });
        return withCORS(response);
    }

    try {
        await connectToDatabase();
        const decoded: any = jwt.verify(token, secret!);
        const user = await UserModel.findById(decoded.userId).lean();

        if (!user) {
            const response = NextResponse.json({ status: 404, message: 'User not found' });
            return withCORS(response);
        }

        const response = NextResponse.json({ status: 200, data: user });
        return withCORS(response);
    } catch (error) {
        console.error(`There is error in catch : ${error}`);
        const response = NextResponse.json({ status: 500, message: `Internal Server Error: ${error}` });
        return withCORS(response);
    }
}
