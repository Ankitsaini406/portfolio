import ProjectModel from "@/lib/model/project";
import connectToDatabase from "@/lib/mongoose/mongoose";
import { withCORS } from "@/lib/mongoose/setheadet";
import { NextResponse } from "next/server";

export async function GET() {
    await connectToDatabase();

    try {
        const projects = await ProjectModel.find({});
        const response = NextResponse.json({status: 200, success: true, data: projects});
        return withCORS(response);
    } catch (error) {
        const response = NextResponse.json({status: 500, success: false, error: `Failed to fetch projects: ${error}`});
        return withCORS(response);
    }
}