import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import UserModel from "@/lib/model/userModel";
import connectToDatabase from "@/lib/mongoose/mongoose";
import { userRegistrationSchema } from "@/lib/validation/uservalidation";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { secret } from "@/lib/mongoose/db";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, phonenumber, password, re_password, isAdmin } =
            userRegistrationSchema.parse(body);

        await connectToDatabase();

        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return NextResponse.json(
                { message: "User already exists", daata: existingUser },
                { status: 409 }
            );
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

        return NextResponse.json(
            { message: "User registered successfully", data: newUser },
            { status: 201 }
        );
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({ message: error.errors }, { status: 400 });
        }
        console.error(error);
        return NextResponse.json(
            { message: "Internal Server Error", data: error },
            { status: 500 }
        );
    }
}

export async function GET(req: NextRequest) {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
        return NextResponse.json({ status: 401, message: `Unauthorized: ${token} : No token found` });
    }

    try {
        await connectToDatabase();
        const decoded: any = jwt.verify(token, secret!);
        const user = await UserModel.findById(decoded.userId).lean();

        if (!user) {
            return NextResponse.json({ status: 404, message: 'User not found' });
        }

        return NextResponse.json({ status: 200, data: user });
    } catch (error) {
        console.error(`There is error in catch : ${error}`);
        return NextResponse.json({ status: 500, message: `Internal Server Error: ${error}` });
    }
}
