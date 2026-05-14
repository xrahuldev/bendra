import { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Bendra | Build Smarter Digital Systems",
  description:
    "Bendra is a technology partner helping businesses streamline operations and scale with smart CRM, custom software, and powerful digital solutions.",
  openGraph: {
    title: "Bendra | Build Smarter Digital Systems",
    description:
      "Technology partner for CRM, Web, Mobile, and SaaS solutions.",
    url: "https://bendra.ae",
    images: ["/og-image.png"],
  },
};

export default function Home() {
  return <HomeClient />;
}