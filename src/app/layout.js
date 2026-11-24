import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "../components/Navbar";

const studioFont = DM_Sans({
  variable: "--font-inter",
  subsets: ["latin"],
});


export const metadata = {
  title: "Prism Press - Premium Custom Vector Logo Generator",
  description: "Create professional-grade vector logos instantly using advanced AI models. Generate custom brand identities or refine sketches in seconds.",
  icons: { icon: "/brand-mark.svg" },
  keywords: ["logo generator", "ai logo", "vector logo maker", "brand builder", "nano banana"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Prism Press - Premium AI Vector Logo Generator",
    description: "Create professional-grade vector logos instantly using advanced AI models.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prism Press - AI Logo Generator",
    description: "Create professional-grade vector logos instantly using AI.",
  }
};

import config from "@/lib/config";

export default function RootLayout({ children }) {
  const theme = config?.theme || "prism";

  return (
    <html lang="en" className="h-full w-full" data-theme={theme}>
      <body className={`${studioFont.className} ${studioFont.variable} h-full w-full flex flex-col antialiased bg-bg-page text-primary-text overflow-hidden`}>
        <Providers>
          <Navbar />
          <div className="flex-1 flex flex-col overflow-hidden min-h-0">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
