import ProjectModel from "@/lib/model/project";
import connectToDatabase from "@/lib/database/mongoose";
import { withCORS } from "@/lib/database/setheadet";
import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from 'fs';
import path from 'path';


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

    const formData = await req.formData();
    const name = formData.get('name') as string;
    const description = formData.get('description') as string;
    const file = formData.get('file') as File;

    if (!name || !description || !file) {
        return NextResponse.json({ success: false, error: 'Missing required fields' });
    }

    try {
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const imageBase64 = buffer.toString('base64');

        const uploadDir = path.join(process.cwd(), 'public', 'projects');
        await fs.mkdir(uploadDir, { recursive: true });
        const filePath = path.join(uploadDir, file.name);
        await fs.writeFile(filePath, buffer);

        const newProject = new ProjectModel({
            name,
            description,
            image: file.name, // Save the relative path to the image
            imageBase64,
        });

        await newProject.save();

        return NextResponse.json({ success: true, data: newProject });
    } catch (error) {
        return NextResponse.json({ success: false, error: `Failed to upload project: ${error}` });
    }
}