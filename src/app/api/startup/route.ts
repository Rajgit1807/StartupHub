import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import { connectStr } from "../db";
import Startup from "@/lib/model/startup";

export async function POST(req: NextRequest) {
  try {
    await mongoose.connect(connectStr); 
  
    const body = await req.json();

    console.log(body)

    if (!body.title || !body.description) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    console.log("aaya ahi")

    const newStartup = new Startup(body);
    
    await newStartup.save();

    return NextResponse.json({ message: "Startup created successfully", startup: newStartup }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

export async function GET() {
    try {
      await mongoose.connect(connectStr); 
    
      const data = await Startup.find().populate("author")
      
      if (!data) {
        return NextResponse.json({ error: "couldn't find Startups" }, { status: 400 });
      }
       
      return NextResponse.json({ message: "Startup Fetched Successfully", startups: data }, { status: 201 });
    } catch (error) {
      return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
  }
