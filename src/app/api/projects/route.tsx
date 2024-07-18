import ProjectModel from "@/lib/model/project";
import connectToDatabase from "@/lib/mongoose/mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    await connectToDatabase();

    try {
        const projects = await ProjectModel.find({});
        return NextResponse.json({status: 200, success: true, data: projects});
    } catch (error) {
        return NextResponse.json({status: 500, success: false, error: `Failed to fetch projects: ${error}`});
    }
}