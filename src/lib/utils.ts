import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export interface ImageData {
  id: number;
  src: string;
  alt: string;
  title: string;
  category: string;
}
