import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SCHOOLCONNECT | One School. One Platform.",
  description:
    "A secure school management and parent communication platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
