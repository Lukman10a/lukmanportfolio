// import Image from "next/image";
// import Marquee from "../ui/animated/marquee";
import { useState } from "react";
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
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  
  const handleImageError = (index: number) => {
    setImageErrors(prev => ({
      ...prev,
      [index]: true
    }));
  };
  
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
          src={imageErrors[index] ? '/placeholder.jpg' : image}
          alt={`Brand ${index}`}
          width={80}
          height={80}
          className={cn("size-20 sm:size-14 object-contain", imageClassName)}
          onError={() => handleImageError(index)}
        />
      ))}
    </Marquee>
  );
}
