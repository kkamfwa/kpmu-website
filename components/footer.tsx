import Link from "next/link";
import { contactDetails, navLinks } from "@/data/site";
import { Container } from "@/components/ui";

export function Footer() {
  return (
    <footer className="mt-20 bg-ink py-14 text-white">
      <Container className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <p className="font-display text-2xl font-semibold">KPMU University College</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/72">
            A modern Zambia-based university college advancing academic quality, student success,
            and AI-powered learning with HEA accreditation readiness in view.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/60">Explore</p>
          <div className="mt-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-white/78 transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/60">Contact</p>
          <div className="mt-4 space-y-3 text-sm text-white/78">
            {contactDetails.map((detail) => (
              <p key={detail.label}>
                <span className="font-semibold text-white">{detail.label}:</span> {detail.value}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}

