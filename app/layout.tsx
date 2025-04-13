
import type { Metadata } from "next";
import { Itim } from "next/font/google";
import React from "react";
import Header from "./(layout)/header";
import TantackProvider from "./(layout)/providers";
import "./globals.css";
const inter = Itim({ subsets: ["vietnamese"], weight: "400", variable: "--font-itim" });



export const metadata: Metadata = {
  title: "Kai Blog",
  description: "Hello i'm Kai, a software engineer.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className}`}
      >
        <div className="flex h-svh ">
          <Header />
          <div className="flex-1 overflow-x-auto ">
            <TantackProvider>
              {children}
            </TantackProvider>
          </div>
        </div>

      </body>
    </html>
  );
}
