import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Save Video App",
  description: "App for downloading social media video with URL or Link",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
