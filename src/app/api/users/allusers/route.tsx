import UserModel from "@/lib/model/userModel";
import connectToDatabase from "@/lib/mongoose/mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectToDatabase();
        const users = await UserModel.find({}).lean();
        return NextResponse.json({ status: 200, data: users });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ status: 500, message: 'Internal Server Error' });
    }
}
