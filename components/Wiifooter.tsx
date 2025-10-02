import React from "react";

function Wiifooter() {
  return (
    <div className="flex flex-row w-[100%] justify-between h-[200px] fixed bottom-0 overflow-hidden">
      <div className="flex-1 relative justify-center self-center w-[100%] h-[100%] overflow-hidden z-20">
        <div className="rounded-tr-full border-8 border-cyan-400 overflow-hidden w-[100%] h-[100%] bg-gray-300">
          Item 1
        </div>
      </div>
      <div className="flex-1 relative justify-center self-end h-[100%] w-[100%] z-10">
        <div
          className="absolute bottom-0 left-[-6rem] right-[-6rem] h-[60%] 
                          border-8 border-cyan-400 flex items-center justify-center bg-gray-300"
        >
          Item 2
        </div>
      </div>
      <div className="flex-1 relative justify-center self-center w-[100%] h-[100%] overflow-hidden z-20">
        <div className="rounded-tl-full border-8 border-cyan-400 overflow-hidden w-[100%] h-[100%] bg-gray-300">
          Item 3
        </div>
      </div>
    </div>
  );
}

export default Wiifooter;
