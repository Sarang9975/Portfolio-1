import type { Metadata } from "next";
import { Syne, Kumbh_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "./components/header-section/Header";
import { ViewProvider } from "@/contexts/ViewContext";

const kumbhSans = Kumbh_Sans({ subsets: ["latin"] });
const syne = Syne({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sarang Kadukar",
  description:
    "A Frontend Engineer passionate about crafting next-gen software. I drive growth by building user experiences that blend aesthetics with functionality. I thrive on turning ideas into seamless digital solutions.",
  keywords: [
    "frontend",
    "react",
    "tech",
    "creative developer",
    "UI development",
    "frontend engineer",
    "developer portfolio",
    "creative development",
    "india",
    "software",
    "software developer",
    "software engineer",
    "portfolio",
  ],
  openGraph: {
    title: "Sarang Kadukar — Frontend Engineer",
    description:
      "Frontend Engineer passionate about crafting next-gen software and creative websites. I drive growth by building user experiences that blend aesthetics with functionality. I thrive on turning ideas into seamless digital solutions.",
    url: "https://yourdomain.com",       // ← your personal site URL
    siteName: "Sarang Kadukar Portfolio", // ← your site name
    images: [
      {
        url: "https://yourdomain.com/og-image-1200x630.png",
        width: 1200,
        height: 630,
        alt: "Sarang Kadukar — Frontend Engineer",
      },
      {
        url: "https://yourdomain.com/og-image-800x800.png",
        width: 800,
        height: 800,
        alt: "Sarang Kadukar — Frontend Engineer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarang Kadukar — Frontend Engineer",
    description:
      "Frontend Engineer passionate about crafting next-gen software and creative websites. I drive growth by building user experiences that blend aesthetics with functionality. I thrive on turning ideas into seamless digital solutions.",
    creator: "@SarangKadukar",            // ← your Twitter handle
    images: ["https://yourdomain.com/twitter-card.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      "max-image-preview": "large",
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kumbhSans.className} max-w-[90%] xl:max-w-[1223px] w-full mx-auto overflow-x-hidden`}
      >
        <ViewProvider>
          <Header />
          {children}
          <Analytics />
          <SpeedInsights />
        </ViewProvider>
      </body>
    </html>
  );
}
