import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Infloro — Creator Marketing, Made Clear",
  description: "Discover creators, build stronger relationships, and manage creator campaigns in one place with Infloro.",
};

const themeScript = `(() => { try { const saved = localStorage.getItem('infloro-theme'); const theme = saved || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'); document.documentElement.dataset.theme = theme; } catch (_) {} })();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body><Navbar />{children}<Footer /></body>
    </html>
  );
}
