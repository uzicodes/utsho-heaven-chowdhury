import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Cursor, CursorPointer } from "@/app/components/cursor";
// 1. Import the StarsBackground component
import { StarsBackground } from "@/app/components/stars";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Utsho Heaven Chowdhury",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        // 2. Added 'bg-black min-h-screen relative' to ensure background is dark and positioned correctly
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black min-h-screen relative`}
      >
        {/* 3. Global Fixed Stars Layer */}
        {/* Fixed position ensures it covers the screen and stays steady during navigation */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <StarsBackground 
            className="h-full w-full bg-transparent" 
            starColor="#ffffff" 
          />
        </div>

        {/* Custom Cursor for all pages */}
        {/* Wrapped in a high z-index div to ensure it stays on top of everything */}
        <div className="relative z-50">
           <Cursor />
        </div>

        {/* 4. Page Content */}
        {/* Wrapped in relative z-10 so it sits ABOVE the stars */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}