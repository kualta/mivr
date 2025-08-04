import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mindful Insight VR",
  description: "A sangha community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-inter antialiased`}
      >
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <footer className="border-t">
            <div className="container flex h-14 max-w-screen-2xl items-center justify-center">
              <p className="text-sm text-muted-foreground">
                © 2025 Mindful Insight VR.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
