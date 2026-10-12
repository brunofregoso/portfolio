import React from "react";
import CardCarousel from "./CardCarousel";
import { albums, keyboards } from "@/lib/data";

export default function Hobbies() {
  return (
    <div>
      <section className="flex justify-center" id="hobbies">
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-center pt-2 text-gray-50 text-3xl font-semibold">
            Hobbies
          </h1>
          <CardCarousel title="Keyboards I've built" items={keyboards} />
          <CardCarousel title="Top 5 albums this month" items={albums} />
        </div>
      </section>
    </div>
  );
}
