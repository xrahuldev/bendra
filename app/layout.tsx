import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Bendra | Build Smarter Digital Systems",
    template: "%s | Bendra Technologies",
  },
  description:
    "Bendra is a technology partner helping businesses streamline operations and scale with smart CRM, custom software, and powerful digital solutions.",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bendra.ae",
    siteName: "Bendra Technologies",
    title: "Bendra | Build Smarter Digital Systems",
    description:
      "Technology partner helping businesses streamline operations and scale with smart CRM, custom software, and powerful digital solutions.",
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
      "Technology partner for CRM, Web, Mobile, and SaaS solutions.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={poppins.variable}>
      <head>
        <meta name="theme-color" content="#050d1a" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${poppins.className} min-h-screen bg-[#050d1a] text-white antialiased`}
        style={{
          scrollBehavior: "smooth",
          overflowX: "hidden",
        }}
      >
        {children}
      </body>
    </html>
  );
}