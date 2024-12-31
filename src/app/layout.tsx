import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'

import "./globals.css";

import Header from "./_components/layout/Header";
import Footer from "./_components/layout/Footer";

export const metadata: Metadata = {
  title: "SAMO Hand Tools",
  description: "Quality hand tools exports",
};

const font = Open_Sans({
  subsets: ['latin']
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header />
        <main className="flex-auto">
          {children}
        </main>
        <Footer />
        <GoogleAnalytics gaId="G-JBD8CQ72M5" />
      </body>
    </html>
  );
}
