import Navigation from "@/components/navigation/Navigation";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "RedditCL",
    template: "RedditCL | %s",
  },
  description: "A Reddit client built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className} antialiased`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
