import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Cursor, CursorPointer } from "@/app/components/cursor";
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black min-h-screen relative`}
      >
        <div className="fixed inset-0 z-0 pointer-events-none">
          <StarsBackground 
            className="h-full w-full bg-transparent" 
            starColor="#ffffff" 
          />
        </div>
        <div className="relative z-50">
           <Cursor />
        </div>
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}