import Image from 'next/image';
import React from 'react';
import Wiigame from './wiigame';
function Wiimenu() {
  return (
    <>
      <main
        style={{
          cursor: 'url(/wiicursor-60.png), auto',
        }}
      >
        <ul className="flex w-[90%] max-w-[1200px] my-[10vh] mx-auto p-4 flex-wrap list-none">
          <Wiigame imageURL="/radioclub.png" linkTo="https://blnd.miami/" />
          <Wiigame imageURL="/letterboxd.png" linkTo="#container-2" />
          <li className="relative overflow-hidden w-[calc(25%-0.8rem)] m-[0.4rem] aspect-[2/1] flex items-center justify-center border-[2.4px] border-gray-300 rounded-xl shadow-[2px_2px_10px_rgba(0,0,0,0.02)] bg-[repeating-radial-gradient(circle_at_14%_30%,white,rgba(0,0,0,0.12)_0.0008px)] text-[rgba(0,0,0,0.6)]">
            <a href="#container-3" className="flex items-center justify-center w-full h-full">
              <Image
                src="/randomgrub.png"
                alt="wii shop channel"
                width={1280}
                height={1920}
                className="object-contain"
              />
            </a>
          </li>
          <li className="relative overflow-hidden w-[calc(25%-0.8rem)] m-[0.4rem] aspect-[2/1] flex items-center justify-center border-[2.4px] border-gray-300 rounded-xl shadow-[2px_2px_10px_rgba(0,0,0,0.02)] bg-[repeating-radial-gradient(circle_at_14%_30%,white,rgba(0,0,0,0.12)_0.0008px)] text-[rgba(0,0,0,0.6)]">
            <a href="https://eggdesign.tumblr.com" className="flex items-center justify-center w-full h-full">
              <Image
                src="/backgroundport.gif"
                alt="check mii out channel"
                width={1280}
                height={1920}
                className="object-contain"
              />
            </a>
          </li>
          <li></li>
        </ul>
      </main>
    </>
  );
}

export default Wiimenu;