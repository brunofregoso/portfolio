import { lastFmRequest } from "./client";
import { toTopAlbums, type RawTopAlbumsResponse, type TopAlbum } from "./dto";

export type Period = "overall" | "7day" | "1month" | "3month" | "6month" | "12month";

function getUsername(): string {
  const user = process.env.LASTFM_USERNAME;
  if (!user) {
    throw new Error("LASTFM_USERNAME is not set");
  }
  return user;
}

export async function getTopAlbums(period: Period = "1month", limit = 5): Promise<TopAlbum[]> {
  const raw = await lastFmRequest<RawTopAlbumsResponse>("user.gettopalbums", {
    user: getUsername(),
    period,
    limit,
  });
  return toTopAlbums(raw);
}
