import connectToDatabase from "@/lib/mongoose/mongoose";
import { userRegistrationSchema } from "@/lib/validation/uservalidation";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
    await connectToDatabase();

    const body: any = await req.json();

    try {
        const validationData = await userRegistrationSchema.parse(body);
        console.log(`user data : ${validationData}`);
        return NextResponse.json({message: "User register successfully", data: validationData});
    } catch (error) {
        console.log(`User registration error: ${error}`);
        return NextResponse.json({message: error});
    }
}