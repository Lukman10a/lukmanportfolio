import { StaticImageData } from "next/image";

export interface Hero {
  title: string;
  date: string; // Could also be a Date if you parse it into a Date object
  author: string;
  description: string;
  buttonText: string;
  image: string; // Assuming this is a path to an image
}

export interface FeaturedPostData {
  title: string;
  author: string;
  date: string; // Could also be a Date if you parse it into a Date object
  description: string;
  image: string | StaticImageData; // Assuming this is a path to an image
  slug: string;
}

export interface BlogPost {
  title: string;
  author: string;
  description: string;
  date: string; // Could also be a Date if you parse it into a Date object
}

export interface AboutUs {
  title: string;
  description: string;
  buttonText: string;
}

export interface OurMission {
  title: string;
  description: string;
}

export interface WhyWeStarted {
  title: string;
  description: string;
  buttonText: string;
  image: string; // Assuming this is a path to an image
}

export interface Testimonial {
  comment: string;
  name: string;
  location: string;
}

export interface DummyData {
  hero: Hero;
  aboutUs: AboutUs;
  ourMission: OurMission;
  whyWeStarted: WhyWeStarted;
}

// types.ts
export interface PostData {
  slug: string;
  title: string;
  description: string;
  date: string; // Use Date type if you want to work with Date objects
  thumbnail: string | StaticImageData; // Optional
  author: string;
  body: string; // The actual content of the post
}
export interface FeaturedPost {
  slug: string;
  title: string;
  description: string;
  date: string; // Use Date type if you want to work with Date objects
  thumbnail?: string | StaticImageData; // Optional
  author: string;
  body: string; // The actual content of the post
}

// Example usage
