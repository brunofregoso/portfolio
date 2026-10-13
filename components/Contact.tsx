"use client";

import React from "react";
import Image from "next/image";
import { SpeedDial, SpeedDialAction, type FabProps } from "@mui/material";
import { EnvelopeAlt, FileDetail } from "@boxicons/react";

const actions = [
  {
    name: "Resume",
    href: "/BrunoFregosoFriasResume.pdf",
    icon: <FileDetail />,
  },
  {
    name: "Email",
    href: "mailto:br199946@ucf.edu",
    icon: <EnvelopeAlt />,
  },
  {
    name: "GitHub",
    href: "https://github.com/brunofregoso",
    icon: <Image src="/github.png" alt="" width={24} height={24} />,
  },
];

export default function Contact() {
  return (
    <SpeedDial
      ariaLabel="Contact"
      direction="down"
      icon={<span>Contact</span>}
      FabProps={{
        disableRipple: true,
        sx: {
          width: "auto",
          height: "auto",
          minHeight: 0,
          px: 0,
          bgcolor: "transparent",
          boxShadow: "none",
          color: "inherit",
          font: "inherit",
          textTransform: "none",
          transition: "color 150ms",
          "&:hover, &:active": { bgcolor: "transparent", boxShadow: "none", color: "#f0f9ff" },
        },
      }}
      sx={{
        position: "relative",
        // Overlay the actions so opening the dial doesn't shift the nav
        "& .MuiSpeedDial-actions": {
          position: "absolute",
          top: "100%",
          left: "50%",
          transform: "translateX(-50%)",
        },
      }}
    >
      {actions.map((action) => {
        const external = !action.href.startsWith("mailto:");
        return (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            // Fab renders an <a> when given href; its types just don't list target/rel
            FabProps={{
              href: action.href,
              target: external ? "_blank" : undefined,
              rel: external ? "noopener noreferrer" : undefined,
              "aria-label": action.name,
            } as Partial<FabProps>}
          />
        );
      })}
    </SpeedDial>
  );
}
