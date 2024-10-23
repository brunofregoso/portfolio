import Image from "next/image";
import React from "react";
import background from "../public/backgroundport.gif";
function Background() {
  return (
    <div className="-z-10 w-full h-full fixed inset-0">
      <Image
        src={background}
        height={1920}
        width={1080}
        className="w-full h-full object-cover object-center opacity-30"
        alt="background"
      />
    </div>
  );
}

export default Background;