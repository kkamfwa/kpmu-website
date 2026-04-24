import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "KPMU University College | Top University in Zambia",
  description:"KPMU University College offers Agriculture, Computer Science, and Business degrees in Zambia. Apply now for the 2026 intake.",
  keywords: [
    "University Zambia",
    "Agriculture degree Zambia",
    "Computer Science Zambia",
    "Business degree Zambia",
    "KPMU University",
  ],
  verification: {
    google: "x9IZ9YcqEp1AXhUeVrjRLSd5j3n0506bFfzwWBxW9Ow",
  },
  openGraph: {
    title: "KPMU University College | Top University in Zambia",
    description:
      "Premium higher education in Zambia offering Agriculture, Computer Science, and Business programmes.",
    url: "https://www.kpmuc.com",
    siteName: "KPMU University College",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="fixed left-0 top-0 z-50 w-full">
          <div className="border-b border-white/10 bg-[#0b3b5d] shadow-[0_10px_30px_rgba(11,59,93,0.18)]">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
              <Link href="/" className="flex flex-col leading-tight">
                <span className="text-lg font-semibold text-white">
                  KPMU University College
                </span>
                <span className="text-xs tracking-[0.3em] text-white/70">
                  ZAMBIA
                </span>
              </Link>

              <nav className="hidden items-center gap-8 text-sm text-white/90 md:flex">
                <Link href="/" className="transition hover:text-white">
                  Home
                </Link>
                <Link href="/about" className="transition hover:text-white">
                  About
                </Link>
                <Link href="/programmes" className="transition hover:text-white">
                  Programmes
                </Link>
                <Link href="/admissions" className="transition hover:text-white">
                  Admissions
                </Link>
                <Link
                  href="/learning-experience"
                  className="transition hover:text-white"
                >
                  Learning Experience
                </Link>
                <Link href="/contact" className="transition hover:text-white">
                  Contact
                </Link>
              </nav>

              <Link
                href="/admissions"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#0b3b5d] transition hover:bg-white/90"
              >
                Apply Now →
              </Link>
            </div>
          </div>
        </header>

        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}
