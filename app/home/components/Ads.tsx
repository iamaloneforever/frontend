import Image from "next/image";
import React from "react";

interface AdsInterface {
  imagepath: string;
  Description:string
}

export default function Ads({ imagepath,Description }: AdsInterface) {
  return (
    <div className="flex items-center my-20 justify-center">
      <div className="w-[80vw] relative h-[40vh]">
        <Image
          src={imagepath}
          fill
          alt={Description}
          className="rounded-2xl "
        />
      </div>
    </div>
  );
}
