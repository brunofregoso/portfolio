// Thin HTTP client for the Last.fm API. It knows how to build requests,
// authenticate, and surface errors, but nothing about response shapes:
// callers pass the expected type and the DTO layer maps it.
//
// Server-only: LASTFM_API_KEY has no NEXT_PUBLIC_ prefix, so importing this
// from a client component would send requests without a key.

const BASE_URL = "https://ws.audioscrobbler.com/2.0/";

// Default cache lifetime for responses, in seconds
const DEFAULT_REVALIDATE = 60 * 60;

type Params = Record<string, string | number | undefined>;

type RequestOptions = {
  revalidate?: number | false;
};

type LastFmErrorBody = {
  error: number;
  message: string;
};

export class LastFmError extends Error {
  constructor(
    message: string,
    readonly status: number,
    readonly code?: number,
  ) {
    super(message);
    this.name = "LastFmError";
  }
}

function isErrorBody(body: unknown): body is LastFmErrorBody {
  return (
    typeof body === "object" &&
    body !== null &&
    "error" in body &&
    typeof (body as LastFmErrorBody).error === "number"
  );
}

function getApiKey(): string {
  const key = process.env.LASTFM_API_KEY;
  if (!key) {
    throw new LastFmError("LASTFM_API_KEY is not set", 500);
  }
  return key;
}

export async function lastFmRequest<T>(
  method: string,
  params: Params = {},
  { revalidate = DEFAULT_REVALIDATE }: RequestOptions = {},
): Promise<T> {
  const url = new URL(BASE_URL);
  url.searchParams.set("method", method);
  url.searchParams.set("api_key", getApiKey());
  url.searchParams.set("format", "json");
  for (const [name, value] of Object.entries(params)) {
    if (value !== undefined) url.searchParams.set(name, String(value));
  }

  const res = await fetch(url, { next: { revalidate } });

  let body: unknown;
  try {
    body = await res.json();
  } catch {
    throw new LastFmError(`Last.fm returned a non-JSON response for ${method}`, res.status);
  }

  // Last.fm reports some errors with a 200 status, so check the body too
  if (isErrorBody(body)) {
    throw new LastFmError(body.message, res.status, body.error);
  }
  if (!res.ok) {
    throw new LastFmError(`Last.fm request ${method} failed`, res.status);
  }

  return body as T;
}
