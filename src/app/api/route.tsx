import mongoose from "mongoose"
import { NextResponse } from "next/server"
import { Mongo_URL } from '@/lib/db';
import { Timelines } from "@/lib/model/timeline";

export  async function GET() {

    if (Mongo_URL == 'string') {
        await mongoose.connect(Mongo_URL) 
    }

    const data = Timelines.find();
    console.log(data);

    return NextResponse.json({result:true})
}