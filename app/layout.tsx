
import type { Metadata } from "next";
import { Itim } from "next/font/google";
import React from "react";
import Header from "./(layout)/header";
import TantackProvider from "./(layout)/providers";
import "./globals.css";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
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


        <Header />
        
        <TantackProvider>
          {children}
        </TantackProvider>

      </body>
    </html>
  );
}
