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
      <body className={`${inter.className} bg-gray-300 text-gray-950 h-[5000px]`}>
        <div className="bg-red-600 w-[13rem] h-[20rem] blur-[7rem] rounded-full absolute top--24 right-[0.25rem] z--999 md:w-[22rem] lg:w-[40rem] xl:w-[66rem] md:blur-[12rem]"></div>
        <div className="bg-fuchsia-500 w-[13rem] h-[20rem] blur-[7rem] rounded-full absolute top--24 left-[0.25rem] z--999 md:w-[22rem] lg:w-[40rem] xl:w-[66rem] md:blur-[12rem]"></div>
        <Header />
        {children}
        </body>
    </html>
  );
}
