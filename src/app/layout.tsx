import type { Metadata } from "next";
import { Geist, Geist_Mono, Ubuntu, Bricolage_Grotesque, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Cursor, CursorPointer } from "@/app/components/cursor";
import { StarsBackground } from "@/app/components/stars";
import { Preloader } from "@/app/components/Preloader";
import { MotionProvider } from "@/app/components/MotionProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

// ENHANCED SEO METADATA 
export const metadata: Metadata = {
  title: "Utsho Heaven Chowdhury | Full-Stack Developer & Software Engineer",
  description: "Portfolio of Utsho Heaven Chowdhury, a Full-Stack Software Engineer specializing in Next.js, React, Node.js, and scalable AI integrations based in Dhaka, Bangladesh.",
  keywords: [
    "Utsho Heaven Chowdhury",
    "Utsho Chowdhury",
    "Full-Stack Developer Dhaka",
    "Software Engineer Bangladesh",
    "Next.js Developer Portfolio",
    "MERN Stack Developer"
  ],
  alternates: {
    canonical: "https://www.utshochowdhury.me",
  },
  openGraph: {
    title: "Utsho Heaven Chowdhury | Full-Stack Developer",
    description: "Discover my technical projects, scalable software architecture, and AI integrations.",
    url: "https://www.utshochowdhury.me",
    siteName: "Utsho Heaven Chowdhury Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// STRUCTURED DATA (JSON-LD) FOR GOOGLE SCHEMATICS
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Utsho Heaven Chowdhury",
  "url": "https://www.utshochowdhury.me",
  "jobTitle": "Full-Stack Software Engineer",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dhaka",
    "addressCountry": "Bangladesh"
  },
  "sameAs": [
    "https://github.com/uzicodes",
    "https://www.linkedin.com/in/utsho-heaven-chowdhury"
  ],
  "knowsAbout": [
    "Software Engineering",
    "Full-Stack Development",
    "Next.js",
    "React",
    "Node.js",
    "AI Integration"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ubuntu.variable} ${bricolageGrotesque.variable} ${spaceGrotesk.variable} antialiased bg-black min-h-screen relative`}
      >
        <Preloader />
        <MotionProvider>
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
        </MotionProvider>
      </body>
    </html>
  );
}