import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
}
export interface Startup {
  _id: string;
  id: number;
  title: string;
  slug: string;
  author: {
    id: string;
    name: string;
    username:string,
    email:string,
    image:string,
    bio:string
  };
  views: number;
  description: string;
  category: string;
  image: string;
  pitch?: string;
  createdAt: string;
}