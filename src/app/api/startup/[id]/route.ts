import mongoose from "mongoose";
import { connectStr } from "../../db";
import Startup from "@/lib/model/startup";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_: Request, { params }: { params: { id: number } }) {
    
    const id = (await params).id
    try {
      await mongoose.connect(connectStr); 
      const startup = await Startup.findOne({id:id}).populate("author")

      if (!startup) {
        return NextResponse.json({ message: "Startup not found" }, { status: 404 });
      }
  
      return NextResponse.json({message: "Startup Found", startup: startup},{ status: 201 });
    } catch (error) {
      return NextResponse.json({ message: "Error fetching startup", error }, { status: 500 });
    }
}

export async function POST(req: NextRequest, { params }: { params: { id: number } }) {
    
  const id = (await params).id
  try {
    await mongoose.connect(connectStr); 

    const foundstartup = await Startup.findOne({id:id})

    if (!foundstartup) {
      return NextResponse.json({ message: "No Startup Found to update" }, { status: 404 });
    }
    const startup = await Startup.findOneAndUpdate({ id: id }, 
      { $set: { views: foundstartup?.views + 1} })

    if (!startup) {
      return NextResponse.json({ message: "Startup not Updated" }, { status: 404 });
    }

    return NextResponse.json({message: "Startup Updated", startup: startup},{ status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error fetching startup", error }, { status: 500 });
  }
}