import type { Metadata } from "next";
import { DM_Sans, Sora } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora"
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kpmu.edu.zm"),
  title: {
    default: "KPMU University College | Zambia",
    template: "%s | KPMU University College"
  },
  description:
    "KPMU University College is a modern higher education institution in Zambia focused on HEA accreditation readiness, AI-powered learning, and career-ready programmes.",
  keywords: [
    "KPMU University College",
    "Zambia university college",
    "HEA accreditation readiness",
    "AI-powered learning",
    "higher education Zambia"
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${dmSans.variable} bg-white font-body text-ink antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
