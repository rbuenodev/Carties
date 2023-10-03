"use client";
import Image from "next/image";
import React, { useState } from "react";

type Props = {
  imageURL: string;
};
export default function CarImage({ imageURL }: Props) {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      src={imageURL}
      alt="image"
      fill
      priority
      className={`
        object-cover hover:opacity-75 duration-700 ease-in-out
        ${
          isLoading
            ? "grayscale blur-2xl scale-110"
            : "grayscale-0 blur-0 scale-100"
        }
      `}
      sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 25vw"
      onLoadingComplete={() => {
        setLoading(false);
      }}
    />
  );
}
