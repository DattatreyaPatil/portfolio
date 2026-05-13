import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import TerminalFooter from "@/components/TerminalFooter";
import SiteFooter from "@/components/SiteFooter";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dattatreya Patil | AI Automation Engineer",
  description: "Portfolio of Dattatreya Patil, AI Automation Engineer specializing in Agentic Workflows, LangGraph, and RAG.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col selection:bg-n8n/30">
        <Navigation />
        <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-8 relative z-10 flex flex-col">
          {children}
        </main>
        <SiteFooter />
        <TerminalFooter />
      </body>
    </html>
  );
}
