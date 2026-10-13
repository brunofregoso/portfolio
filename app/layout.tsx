import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Hobbies from "@/components/hobbies";
import Contact from "@/components/Contact";
import Background from "@/components/background";

// Re-render hourly so the Last.fm albums stay fresh, even after a failed fetch
export const revalidate = 3600;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bruno | Software Developer",
  description:
    "Bruno is a third-year Computer Science student at the University of Central Florida and an aspiring Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        ></link>
      </head>
      <body
        className={`${inter.className} bg-zinc-900 text-gray-950 pt-[10rem]`}
      >
        <Header hobbies={<Hobbies />} />
        <Background />
        {children}
      </body>
    </html>
  );
}
