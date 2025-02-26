import mongoose from "mongoose";
import { connectStr } from "../../db";
import { NextResponse } from "next/server";
import Author from "@/lib/model/author";

export async function GET(_: Request, { params }: { params: { id: number } }
) {
    const id = (await params).id
    try {
      await mongoose.connect(connectStr); 
    
      const data = await Author.findOne({id:id})
      
      if (!data) {
        return NextResponse.json({ error: "couldn't find the Author" }, { status: 400 });
      }
       
      return NextResponse.json({ message: "Author Fetched Successfully", author: data }, { status: 201 });
    } catch (error) {
      return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
  }
