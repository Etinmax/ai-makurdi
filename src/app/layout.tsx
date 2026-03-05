import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/poppins/400.css"
import "@fontsource/poppins/600.css"
import "@fontsource/poppins/700.css"
import "@fontsource/poppins/800.css"
import "@fontsource/open-sans/400.css"
import "@fontsource/open-sans/600.css"

export const metadata = {
  title: "Augustinian Institute",
  description: "A Centre of Wisdom, Faith and Intellectual Formation",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={` bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100`}>
        {children}
      </body>
    </html>
  );
}
