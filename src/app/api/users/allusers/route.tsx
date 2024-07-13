import UserModel from "@/lib/model/userModel";
import connectToDatabase from "@/lib/mongoose/mongoose";
import { NextResponse } from "next/server";

// Handle GET request (e.g., fetching user data)
export async function GET() {
    // if (req.method !== 'GET') {
    //     return NextResponse.json({ status: 405, message: 'Method Not Allowed' });
    // }

    try {
        await connectToDatabase();

        const users = await UserModel.find({});
        return users;
        return NextResponse.json({ status: 200, data: users });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ status: 500, message: 'Internal Server Error' });
    }
}