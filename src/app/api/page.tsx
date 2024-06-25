// "use client"

import { Mongo_URL } from "@/lib/db"
import mongoose from "mongoose"
import { NextResponse } from "next/server"

    async function GET() {

    await mongoose.connect(Mongo_URL)
    const data = NextResponse.json({result:true})

    console.log(`This is data : ${JSON.stringify(data)}`)

    return JSON.stringify(data);
}

export default GET;