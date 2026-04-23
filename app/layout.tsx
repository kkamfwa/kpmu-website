import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "KPMU University College",
  description: "Premium higher education in Zambia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        {/* NAVBAR */}
        <header className="fixed top-0 left-0 w-full z-50">
          <div className="backdrop-blur-md bg-black/30 border-b border-white/10">
            <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">

              {/* Logo */}
              <div className="flex flex-col leading-tight">
                <span className="text-white font-semibold text-lg">
                  KPMU University College
                </span>
                <span className="text-white/70 text-xs tracking-[0.3em]">
                  ZAMBIA
                </span>
              </div>

              {/* Navigation */}
              <nav className="hidden md:flex items-center gap-8 text-white/85 text-sm">
                <Link href="/" className="hover:text-white transition">Home</Link>
                <Link href="/about" className="hover:text-white transition">About</Link>
                <Link href="/programmes" className="hover:text-white transition">Programmes</Link>
                <Link href="/admissions" className="hover:text-white transition">Admissions</Link>
                <Link href="/learning-experience" className="hover:text-white transition">Learning Experience</Link>
                <Link href="/contact" className="hover:text-white transition">Contact</Link>
              </nav>

              {/* CTA */}
              <div>
                <Link
                  href="/admissions"
                  className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-5 py-2.5 text-sm font-medium hover:bg-white/90 transition"
                >
                  Apply Now →
                </Link>
              </div>

            </div>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="pt-24">
          {children}
        </main>

      </body>
    </html>
  );
}
