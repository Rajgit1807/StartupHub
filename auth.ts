import { connectStr } from "@/app/api/db";
import Author from "@/lib/model/author";
import mongoose from "mongoose";
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GitHub
  ],
})