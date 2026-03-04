import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans,Poppins } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  preload: false,
});
export const metadata = {
  title: "Business Website",
  description: "Modern one-page business website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${openSans.variable} ${poppins.variable} bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100`}>
        {children}
      </body>
    </html>
  );
}
