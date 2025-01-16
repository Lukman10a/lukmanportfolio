import { clsx, type ClassValue } from "clsx";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const formatDate = (
  date: Date | string | undefined
): string | undefined => {
  if (!date) return undefined;

  // Convert string to Date if necessary
  const dateObj = typeof date === "string" ? new Date(date) : date;

  // Check if dateObj is a valid Date
  if (!(dateObj instanceof Date) || isNaN(dateObj.getTime())) {
    console.error("Invalid date provided:", date);
    return undefined; // or throw an error if preferred
  }

  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const day = String(dateObj.getDate()).padStart(2, "0");
  // const hours = String(dateObj.getHours()).padStart(2, "0");
  // const minutes = String(dateObj.getMinutes()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};
