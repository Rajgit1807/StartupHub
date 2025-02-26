import mongoose from "mongoose";
import { connectStr } from "../../db";
import Startup from "@/lib/model/startup";
import { NextResponse } from "next/server";


export async function GET(_: Request, { params }: { params: { id: string} }) {
    
    const id =  (await params).id
    try {
      await mongoose.connect(connectStr); 
      const startups = await Startup.find({author:id})

      if (!startups) {
        return NextResponse.json({ message: "Startups not found" }, { status: 404 });
      }
      console.log(startups)
      return NextResponse.json({message: "Startups Found", startups: startups},{ status: 201 });
    } catch (error) {
      return NextResponse.json({ message: "Error fetching startups", error }, { status: 500 });
    }
}