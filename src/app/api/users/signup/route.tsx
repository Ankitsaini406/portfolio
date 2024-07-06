import { NextResponse } from "next/server";
import { z } from "zod";
import UserModel from "@/lib/model/userModel";
import connectToDatabase from "@/lib/mongoose/mongoose";
import { userRegistrationSchema } from "@/lib/validation/uservalidation";
import bcrypt from 'bcryptjs';

export async function POST(req: Request) {
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
            password : hashedPassword,
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

// const body: any = await req.json();
// await connectToDatabase();

// try {

    // const { name, email, password } = userRegistrationSchema.parse(req.body);

    // const existingUser = await UserModel.findOne({ email });
    // if (existingUser) {
//         console.log(`user exsit : ${res.status}`);
    //   return res.ok;
    // }

//     const validationData = await userRegistrationSchema.parse(body);
//     console.log(`user data : ${validationData}`);
//     return NextResponse.json({message: "User register successfully", data: validationData});
// } catch (error) {
//     console.log(`User registration error: ${error}`);
//     return NextResponse.json({message: error});
// }
// }
