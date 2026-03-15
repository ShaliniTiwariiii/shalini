import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CodeHer | Empowering Women, Building the Web",
  description: "CodeHer is a modern web development agency focused on building high-quality websites for startups, real estate, and local businesses.",
  keywords: ["Web Development", "Women in Tech", "Next.js", "React", "Agency", "SEO", "Real Estate Websites"],
  openGraph: {
    title: "CodeHer | Empowering Women, Building the Web",
    description: "CodeHer is a modern web development agency focused on building high-quality websites for startups, real estate, and local businesses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
