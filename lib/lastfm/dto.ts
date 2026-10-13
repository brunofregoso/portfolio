// Raw Last.fm response shapes and the mappers that turn them into the
// types the app uses. Last.fm's JSON is converted from XML, so numbers
// arrive as strings and single-item lists can arrive as a bare object.

type RawImage = {
  size: "small" | "medium" | "large" | "extralarge" | "mega" | "";
  "#text": string;
};

type RawTopAlbum = {
  name: string;
  playcount: string;
  mbid: string;
  url: string;
  artist: {
    name: string;
    mbid: string;
    url: string;
  };
  image?: RawImage[];
  "@attr": {
    rank: string;
  };
};

export type RawTopAlbumsResponse = {
  topalbums: {
    album?: RawTopAlbum[] | RawTopAlbum;
    "@attr": {
      user: string;
      page: string;
      perPage: string;
      totalPages: string;
      total: string;
    };
  };
};

export type TopAlbum = {
  rank: number;
  name: string;
  artist: string;
  playcount: number;
  url: string;
  imageUrl: string | null;
};

// Largest first, so we pick the sharpest cover available
const IMAGE_SIZE_PREFERENCE: RawImage["size"][] = ["extralarge", "large", "medium", "small"];

function toArray<T>(value: T[] | T | undefined): T[] {
  if (value === undefined) return [];
  return Array.isArray(value) ? value : [value];
}

function toNumber(value: string): number {
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
}

function pickImage(images: RawImage[] = []): string | null {
  for (const size of IMAGE_SIZE_PREFERENCE) {
    const url = images.find((img) => img.size === size)?.["#text"];
    if (url) return url;
  }
  return null;
}

export function toTopAlbum(raw: RawTopAlbum): TopAlbum {
  return {
    rank: toNumber(raw["@attr"].rank),
    name: raw.name,
    artist: raw.artist.name,
    playcount: toNumber(raw.playcount),
    url: raw.url,
    imageUrl: pickImage(raw.image),
  };
}

export function toTopAlbums(raw: RawTopAlbumsResponse): TopAlbum[] {
  return toArray(raw.topalbums.album).map(toTopAlbum);
}
