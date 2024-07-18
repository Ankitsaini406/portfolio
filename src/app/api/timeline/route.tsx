import TimelineModel from "@/lib/model/timeline";
import connectToDatabase from "@/lib/mongoose/mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    await connectToDatabase();

    try {
        const timelines = await TimelineModel.find({});
        return NextResponse.json({success: true, data: timelines}, {status: 200});
    } catch (error) {
        return NextResponse.json({success: false, error: `Failed to fetch timelines : ${error}`}, {status: 500});
    }
}