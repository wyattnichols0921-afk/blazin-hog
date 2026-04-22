import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import { CartProvider } from "@/components/cart-provider";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Blazin Hog | Smoked BBQ Food Truck",
    template: "%s | Blazin Hog",
  },
  description:
    "Blazin Hog is a premium BBQ food truck serving slow-smoked meats, homemade sides, and weekly stops across the Lowcountry.",
  keywords: [
    "BBQ food truck",
    "smoked brisket",
    "pulled pork",
    "catering",
    "Charleston food truck",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--color-ink)] font-sans text-[var(--color-cream)]">
        <CartProvider>
          <div className="relative flex min-h-screen flex-col overflow-x-clip">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(212,98,45,0.1),transparent_30%),linear-gradient(180deg,#120d0c_0%,#171110_45%,#110d0c_100%)]" />
            <Header />
            <main className="flex-1 pt-[68px] sm:pt-[84px]">{children}</main>
            <Footer />
          </div>
        </CartProvider>
        <Analytics />
      </body>
    </html>
  );
}
