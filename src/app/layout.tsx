import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";

import NextTopLoader from "nextjs-toploader";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";
 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const pirulenFont = localFont({
  src: "./fonts/PirulenRg.otf",
  variable: "--font-pirulen",
  weight: "400",
  style: "normal",
  display: "swap",
});

const eurostileFont = localFont({
  src: "./fonts/EurostileLTPro.otf",
  variable: "--font-eurostile",
  weight: "400",
  style: "normal",
  display: "swap",
});

const masivaFont = localFont({
  src: "./fonts/Masiva.ttf",
  variable: "--font-masiva",
  weight: "400",
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AVALON",
  description:
    "Explore a new kind of game...",
  metadataBase: new URL("https://avalon.online"),
  openGraph: {
    title: "AVALON",
    description:
      "Explore a new kind of game...",
    url: "/",
    siteName: "AVALON",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "AVALON" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AVALON",
    description: "Explore a new kind of game...",
    images: ["/og.jpg"],
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  viewport: { width: "device-width", initialScale: 1, maximumScale: 1 },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={[
          geistSans.variable,
          geistMono.variable,
          pirulenFont.variable,
          eurostileFont.variable,
          masivaFont.variable,
          "antialiased",
        ].join(" ")}
      >
        <NextTopLoader />

        <ThemeProvider>
          <main>{children}</main>
          <Toaster richColors position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}
