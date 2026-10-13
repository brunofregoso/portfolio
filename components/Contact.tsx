"use client";

import React from "react";
import { SpeedDial, SpeedDialAction, type FabProps } from "@mui/material";
import { EnvelopeAlt, FileDetail, Github, Linkedin } from "@boxicons/react";

const actions = [
  {
    name: "Resume",
    href: "https://www.dropbox.com/scl/fi/m8d0wiur0dg428sgihxrq/FregosoFriasBruno_Resume.pdf?rlkey=rumbfz3sifbt9isso6ltcg3p9&st=knw81fac&raw=1",
    icon: <FileDetail />,
  },
  {
    name: "Email",
    href: "mailto:brunofregosofrias@gmail.com",
    icon: <EnvelopeAlt />,
  },
  {
    name: "GitHub",
    href: "https://github.com/brunofregoso",
    icon: <Github />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/brunofregosofrias",
    icon: <Linkedin />,
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
