import React from "react";
import CardCarousel, { type CarouselItem } from "./CardCarousel";
import { albums as fallbackAlbums, keyboards } from "@/lib/data";
import { getTopAlbums } from "@/lib/lastfm/albums";
import type { TopAlbum } from "@/lib/lastfm/dto";

function toCarouselItem(album: TopAlbum): CarouselItem {
  return {
    name: album.name,
    details: [album.artist, `${album.playcount.toLocaleString("en-US")} plays`],
    imageUrl: album.imageUrl,
    href: album.url,
  };
}

async function loadAlbums(): Promise<readonly CarouselItem[]> {
  try {
    const topAlbums = await getTopAlbums("1month", 5);
    return topAlbums.length > 0 ? topAlbums.map(toCarouselItem) : fallbackAlbums;
  } catch (err) {
    console.error("Failed to load Last.fm top albums", err);
    return fallbackAlbums;
  }
}

export default async function Hobbies() {
  const albums = await loadAlbums();
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
