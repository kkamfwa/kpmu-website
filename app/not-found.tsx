import Link from "next/link";
import { Container } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="py-24">
      <Container className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-ocean">Page Not Found</p>
        <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          The page you are looking for is not available.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate">
          Return to the KPMU University College homepage to continue exploring programmes,
          admissions, and the student experience.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-ocean"
        >
          Back to Home
        </Link>
      </Container>
    </section>
  );
}
