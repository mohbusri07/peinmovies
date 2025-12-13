import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yurinime - Streaming Anime Sub Indo",
  description: "Streaming anime sub indo terlengkap",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.variable} antialiased`}>
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}