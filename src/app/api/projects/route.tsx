import ProjectModel from "@/lib/model/project";
import connectToDatabase from "@/lib/database/mongoose";
import { withCORS } from "@/lib/database/setheadet";
import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from 'fs';

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

export async function POST(req: NextRequest) {
    await connectToDatabase();

    try {
        const formData = await req.formData();
        const file = formData.get('file') as File;
        const title = formData.get('title') as string;
        const description = formData.get('description') as string;

        if (!file) {
            return withCORS(NextResponse.json({ success: false, error: 'No file uploaded' }));
        }

        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const imageBase64 = buffer.toString('base64');

        const newImage = new ProjectModel({
            image: file.name,
            imageBase64,
            title,
            description,
        });

        await newImage.save();

        return withCORS(NextResponse.json({ success: true, data: newImage }));
    } catch (error) {
        return withCORS(NextResponse.json({ success: false, error: `Failed to upload image: ${error}` }));
    }
}