import Link from "next/link";
import { navLinks } from "@/data/site";
import { Container, PrimaryButton } from "@/components/ui";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-white/90 backdrop-blur">
      <Container className="flex items-center justify-between gap-6 py-4">
        <Link href="/" className="flex min-w-0 flex-col">
          <span className="font-display text-lg font-semibold tracking-tight text-ink sm:text-xl">
            KPMU University College
          </span>
          <span className="text-xs uppercase tracking-[0.24em] text-slate">Zambia</span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate transition hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden sm:block">
          <PrimaryButton href="/admissions">Apply Now</PrimaryButton>
        </div>
      </Container>
      <Container className="pb-4 lg:hidden">
        <nav className="flex flex-wrap gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-ink/10 px-4 py-2 text-sm font-medium text-slate transition hover:border-ocean hover:text-ocean"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}

