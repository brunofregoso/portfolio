import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bruno | Software Developer",
  description: "Bruno is a third-year Computer Science student at the University of Central Florida and an aspiring Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-sky-950 text-gray-950 h-[5000px] pt-[10rem]`}>
        <Header />
        {children}
        </body>
    </html>
  );
}
