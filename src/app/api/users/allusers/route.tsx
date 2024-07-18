import UserModel from "@/lib/model/userModel";
import connectToDatabase from "@/lib/mongoose/mongoose";
import { withCORS } from "@/lib/mongoose/setheadet";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectToDatabase();
        const users = await UserModel.find({}).lean();
        const response = NextResponse.json({ status: 200, data: users });
        return withCORS(response);
    } catch (error) {
        console.error(error);
        const response = NextResponse.json({ status: 500, message: 'Internal Server Error' });
        return withCORS(response);
    }
}
