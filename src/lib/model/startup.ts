import mongoose, { Schema, Document } from "mongoose";

export interface IStartup extends Document {
  id: number;
  title: string;
  slug: string;
  author: mongoose.Types.ObjectId; 
  views: number;
  description: string;
  category: string;
  image: string;
  pitch?: string; 
}

const StartupSchema = new Schema<IStartup>(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "author", // Reference to the Author model
      required: true,
    },
    views: {
      type: Number,
      default: 0, // Default views count
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 20,
    },
    image: {
      type: String, // URLs are stored as strings
      required: true,
    },
    pitch: {
      type: String, // Markdown content stored as string
    },
  },
  { timestamps: true }
);

export default mongoose.models.startup || mongoose.model<IStartup>("startup", StartupSchema);
