import mongoose, { Schema, Document } from "mongoose";

export interface IAuthor extends Document {
  id: number;
  name: string;
  username: string;
  email: string;
  image: string;
  bio: string;
}

const AuthorSchema = new Schema<IAuthor>(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String, // URLs are stored as strings
    },
    bio: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.models.author || mongoose.model<IAuthor>("author", AuthorSchema);
