import ProjectModel from "@/lib/model/project";
import connectToDatabase from "@/lib/database/mongoose";
import { withCORS } from "@/lib/database/setheadet";
import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from 'fs';
import path from 'path';
import formidable, { Fields, Files, File } from 'formidable';
import { IncomingMessage } from 'http';

export async function GET() {
    await connectToDatabase();

    try {
        const projects = await ProjectModel.find({});
        const response = NextResponse.json({ status: 200, success: true, data: projects });
        return withCORS(response);
    } catch (error) {
        const response = NextResponse.json({ status: 500, success: false, error: `Failed to fetch projects: ${error}` });
        return withCORS(response);
    }
}

const uploadDir = path.join(process.cwd(), 'uploads');

export const config = {
    api: {
        bodyParser: false,
    },
};

export async function POST(req: NextRequest) {
    await connectToDatabase();

    // Ensure the upload directory exists
    await fs.mkdir(uploadDir, { recursive: true });
    const form = new formidable.IncomingForm({
        uploadDir,
        keepExtensions: true,
        multiples: false,
    });

    return new Promise((resolve, reject) => {
        form.parse(req as unknown as IncomingMessage, async (err: any, fields: Fields, files: Files) => {
            if (err) {
                console.error('Error parsing form:', err);
                return resolve(NextResponse.json({ success: false, error: 'Failed to parse form data' }));
            }

            const { name, description } = fields as unknown as { [key: string]: string };
            const file = files.file as File | File[];

            if (!name || !description || !file) {
                return resolve(NextResponse.json({ success: false, error: 'Missing required fields' }));
            }

            const fileArray = Array.isArray(file) ? file : [file];
            const firstFile = fileArray[0];

            try {
                const fileName = firstFile.newFilename;
                const filePath = path.join(uploadDir, fileName);
                const imageBase64 = await fs.readFile(filePath, 'base64');

                const newProject = new ProjectModel({
                    name,
                    description,
                    image: fileName,
                    imageBase64,
                });

                await newProject.save();

                return resolve(NextResponse.json({ success: true, data: newProject }));
            } catch (error) {
                console.error('Error saving project:', error);
                return resolve(NextResponse.json({ success: false, error: `Failed to upload project: ${error}` }));
            }
        });
    });
}
