// import Image from "next/image";
// import Marquee from "../ui/animated/marquee";
import Image from "next/image";

import { ClassValue } from "clsx";

import { cn } from "@/lib/utils";

import Marquee from "./ui/animated/marque";

type PartnerSliderProps = {
  images: string[];
  imageClassName?: ClassValue;
  reverse?: boolean;
  grayscale?: boolean;
};

export function PartnersSlider({
  images,
  imageClassName,
  reverse = false,
  grayscale,
}: PartnerSliderProps) {
  return (
    <Marquee
      className={cn("my-4 overflow-hidden", grayscale && "grayscale")}
      applyMask
      pauseOnHover
      reverse={reverse}
    >
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`Brand ${index}`}
          className={cn("size-20 sm:size-14 object-contain", imageClassName)}
        />
      ))}
    </Marquee>
  );
}
