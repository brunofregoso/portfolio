"use client";

import React from "react";
import { Card, CardContent, CardMedia, Link, Typography } from "@mui/material";

export type CarouselItem = {
  name: string;
  details: readonly string[];
  imageUrl?: string | null;
  href?: string;
};

type CardCarouselProps = {
  title: string;
  items: readonly CarouselItem[];
};

// Minimum horizontal travel in px before a touch counts as a swipe
const SWIPE_THRESHOLD = 50;

export default function CardCarousel({ title, items }: CardCarouselProps) {
  const [index, setIndex] = React.useState(0);
  const touchStart = React.useRef<{ x: number; y: number } | null>(null);
  const item = items[index];

  const step = (delta: number) => {
    setIndex((i) => (i + delta + items.length) % items.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      step(-1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      step(1);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart.current) return;
    const touch = e.changedTouches[0];
    const dx = touch.clientX - touchStart.current.x;
    const dy = touch.clientY - touchStart.current.y;
    touchStart.current = null;
    // Ignore mostly-vertical gestures so the modal can still scroll
    if (Math.abs(dx) > SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy)) {
      step(dx < 0 ? 1 : -1);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <p className="text-center text-gray-50 pt-3 text-lg">{title}</p>
      <Card
        tabIndex={0}
        role="group"
        aria-roledescription="carousel"
        aria-label={`${title}, ${index + 1} of ${items.length}`}
        // The modal backdrop closes on click, so keep card clicks from reaching it
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        sx={{
          mt: 2,
          width: { xs: 220, md: 320 },
          minHeight: 180,
          touchAction: "pan-y",
          userSelect: "none",
          "&:focus-visible": { outline: "2px solid #f9fafb", outlineOffset: 2 },
        }}
      >
        {item.imageUrl && (
          <CardMedia
            component="img"
            image={item.imageUrl}
            alt={`Cover art for ${item.name}`}
            draggable={false}
            sx={{ aspectRatio: "1 / 1", objectFit: "cover" }}
          />
        )}
        <CardContent>
          <Typography variant="h5" component="h3" fontWeight={600}>
            {item.href ? (
              <Link href={item.href} target="_blank" rel="noopener noreferrer" color="inherit" underline="hover">
                {item.name}
              </Link>
            ) : (
              item.name
            )}
          </Typography>
          {item.details.length > 0 && (
            <ul className="mt-2 list-disc pl-5">
              {item.details.map((detail) => (
                <li key={detail}>
                  <Typography variant="body1">{detail}</Typography>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
