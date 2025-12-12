import type { Metadata } from "next";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";

export const metadata: Metadata = {
  title: "JAV Sub Indo - Video Streaming",
  description: "Video streaming platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#1a1a1a]">
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}