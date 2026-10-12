"use client";

import React from "react";
import { Card, CardContent, IconButton, Typography } from "@mui/material";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { keyboards } from "@/lib/data";

export default function Hobbies() {
  const [index, setIndex] = React.useState(0);
  const keyboard = keyboards[index];

  // The modal backdrop closes on click, so keep carousel clicks from reaching it
  const step = (e: React.MouseEvent, delta: number) => {
    e.stopPropagation();
    setIndex((i) => (i + delta + keyboards.length) % keyboards.length);
  };

  return (
    <div>
      <section className="flex justify-center" id="hobbies">
        <div className="flex flex-col items-center">
          <h1 className="text-center pt-2 text-gray-50 text-3xl font-semibold">
            Hobbies
          </h1>
          <p className="text-center text-gray-50 pt-3 text-lg">
            Keyboards I&apos;ve built
          </p>
          <div className="flex items-center gap-2 pt-4">
            <IconButton
              aria-label="Previous keyboard"
              onClick={(e) => step(e, -1)}
              sx={{ color: "#f9fafb" }}
            >
              <FaChevronLeft />
            </IconButton>
            <Card
              onClick={(e) => e.stopPropagation()}
              sx={{ width: { xs: 220, md: 320 }, minHeight: 180 }}
            >
              <CardContent>
                <Typography variant="h5" component="h3" fontWeight={600}>
                  {keyboard.name}
                </Typography>
                <ul className="mt-2 list-disc pl-5">
                  {keyboard.details.map((detail) => (
                    <li key={detail}>
                      <Typography variant="body1">{detail}</Typography>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <IconButton
              aria-label="Next keyboard"
              onClick={(e) => step(e, 1)}
              sx={{ color: "#f9fafb" }}
            >
              <FaChevronRight />
            </IconButton>
          </div>
          <p className="text-gray-400 text-sm pt-2">
            {index + 1} / {keyboards.length}
          </p>
        </div>
      </section>
    </div>
  );
}
