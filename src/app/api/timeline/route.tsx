import TimelineModel from "@/lib/model/timeline";
import connectToDatabase from "@/lib/database/mongoose";
import { withCORS } from "@/lib/database/setheadet";
import { NextResponse } from "next/server";

export async function GET() {
    await connectToDatabase();

    try {
        const timelines = await TimelineModel.find({});
        const response = NextResponse.json({success: true, data: timelines}, {status: 200});
        return withCORS(response);
    } catch (error) {
        const response = NextResponse.json({success: false, error: `Failed to fetch timelines : ${error}`}, {status: 500});
        return withCORS(response);
    }
}
