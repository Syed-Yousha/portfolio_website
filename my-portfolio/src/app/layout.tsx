import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Syed Yousha — ML Engineer & Full-Stack Developer",
  description:
    "Syed Yousha — CS undergraduate at FAST-NUCES specializing in Machine Learning, Data Science, and full-stack AI deployment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Fraunces:ital,wght@0,400..700;1,400..700&family=EB+Garamond:ital,wght@0,400..700;1,400..700&family=Geist:wght@300..700&family=Geist+Mono:wght@300..600&family=Inter:wght@300..700&family=JetBrains+Mono:wght@300..600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
