import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chinmay Ghule | Home",
  description: "Portfolio website for Chinmay Ghule",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.className,
          "bg-gradient-to-br from-[#1e1e28] to-[#4d4f60] bg-no-repeat text-white"
        )}
      >
        {children}
      </body>
    </html>
  );
}
