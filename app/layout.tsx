import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://amazingangelstech.com"),
  title: {
    default: "Amazing Angels Tech Solutions | Digital Ideas, Built Better",
    template: "%s | Amazing Angels Tech Solutions"
  },
  description: "Web development, mobile app development, software solutions and digital marketing for businesses ready to grow.",
  keywords: ["web development", "app development", "software development", "digital marketing", "Amazing Angels Tech Solutions"],
  openGraph: {
    title: "Amazing Angels Tech Solutions",
    description: "Turning ideas into digital reality.",
    url: "https://amazingangelstech.com",
    siteName: "Amazing Angels Tech Solutions",
    type: "website"
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
