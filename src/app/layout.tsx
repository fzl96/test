import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistSans } from "geist/font";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { EdgeStoreProvider } from "@/lib/edgestore";
import { SiteFooter } from "@/components/footer";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon/favicon-32x32.png",
    apple: "/favicon/apple-touch-icon.png",
  },
  title: "Masjid Zaid bin Tsabit",
  description: "Aplikasi Web Masjid Zaid bin Tsabit",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body
        className={cn(
          "min-h-screen bg-background antialiased grainy",
          GeistSans.className,
          GeistSans.variable
        )}
      >
        <EdgeStoreProvider>{children}</EdgeStoreProvider>
        <Toaster />
      </body>
    </html>
  );
}
