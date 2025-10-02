import React from "react";
import Image from "next/image";

function Wiigame({imageURL, linkTo}: {imageURL: string; linkTo: string}) {
  return (
    <li className="relative overflow-hidden w-[calc(25%-0.8rem)] m-[0.4rem] aspect-[2/1] flex items-center justify-center border-[2.4px] border-gray-300 rounded-xl shadow-[2px_2px_10px_rgba(0,0,0,0.02)] bg-[repeating-radial-gradient(circle_at_14%_30%,white,rgba(0,0,0,0.12)_0.0008px)] text-[rgba(0,0,0,0.6)] cursor-inherit">
      <a
        href={linkTo}
        target="'_blank"
        className="flex items-center justify-center w-full h-full"
      >
        <Image
          src={imageURL}
          alt="empty CD wii menu placeholder"
          width={400}
          height={600}
          className="object-contain"
        />
      </a>
    </li>
  );
}

export default Wiigame;
