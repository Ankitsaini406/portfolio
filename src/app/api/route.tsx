import mongoose from "mongoose"
import { NextResponse } from "next/server"
import { Mongo_URL } from '@/lib/db';

export  async function GET() {

    if (Mongo_URL == 'string') {
        await mongoose.connect(Mongo_URL) 
    }
    const data = NextResponse.json({result:true})

    return data;
}