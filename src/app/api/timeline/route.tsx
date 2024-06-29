import TimelineModel from "@/lib/model/timeline";
import connectToDatabase from "@/lib/mongoose/mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    await connectToDatabase();

    try {
        const timelines = await TimelineModel.find({}).lean();
        return NextResponse.json({success: true, data: timelines}, {status: 200});
    } catch (error) {
        return NextResponse.json({success: false, error: `Failed to fetch timelines : ${error}`}, {status: 500});
    }
}