// app/layout.tsx

import type { Metadata, Viewport } from "next";
import { Poppins, Sora, DM_Sans } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
  preload: true,
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  display: "swap",
  variable: "--font-sora",
  preload: true,
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--font-dm-sans",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bendra.ae"),

  title: {
    default: "Bendra | Build Smarter Digital Systems",
    template: "%s | Bendra Technologies",
  },

  description:
    "Bendra Technologies helps businesses scale with CRM, SaaS, automation, mobile apps, and powerful digital systems.",

  keywords: [
    "CRM Development",
    "Web Development",
    "Mobile Apps",
    "SaaS Solutions",
    "Business Automation",
    "UI/UX Design",
    "Digital Transformation",
    "Bendra Technologies",
  ],

  authors: [{ name: "Bendra Technologies" }],
  creator: "Bendra Technologies",
  publisher: "Bendra Technologies",

  applicationName: "Bendra",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://bendra.ae",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bendra.ae",
    siteName: "Bendra Technologies",
    title: "Bendra | Build Smarter Digital Systems",
    description:
      "Technology partner for CRM, SaaS, automation, mobile apps, and modern web solutions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bendra Technologies",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Bendra | Build Smarter Digital Systems",
    description:
      "Technology partner for CRM, SaaS, automation, mobile apps, and modern web solutions.",
    creator: "@bendra",
    images: ["/og-image.png"],
  },

  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon/favicon.ico" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon/favicon.ico"],
  },

  manifest: "/favicon/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#050d1a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} ${sora.variable} ${dmSans.variable}`}
    >
      <body
        className={`${poppins.className} min-h-screen bg-[#050d1a] text-white antialiased`}
        style={{
          overflowX: "hidden",
          scrollBehavior: "smooth",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        }}
      >
        <AppRouterCacheProvider>
          <div
            id="app-root"
            style={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              overflowX: "hidden",
              position: "relative",
            }}
          >
            <Navbar />

            <main
              style={{
                flex: 1,
                width: "100%",
                overflowX: "hidden",
              }}
            >
              {children}
            </main>

            <Footer />

            <WhatsAppButton />
          </div>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}