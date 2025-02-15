import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import { connectStr } from "../db";
import Author from "@/lib/model/author";

export async function POST(req: NextRequest) {
  try {
    await mongoose.connect(connectStr); 
  
    const body = await req.json();
    console.log(body)

    if (!body.name || !body.username || !body.email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    
    const newAuthor = new Author(body);
    await newAuthor.save();

    return NextResponse.json({ message: "Author created successfully", author: newAuthor }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

export async function GET() {
    try {
      await mongoose.connect(connectStr); 
    
      const data = await Author.find()
      
      if (!data) {
        return NextResponse.json({ error: "couldn't find Authors" }, { status: 400 });
      }
     
      console.log(data)
  
      return NextResponse.json({ message: "Author Fetched Successfully", authors: data }, { status: 201 });
    } catch (error) {
      return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
  }
