import { Container } from "@/components/ui";

export function PageHero({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="bg-mist/70">
      <Container className="py-16 sm:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-ocean">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate">{description}</p>
      </Container>
    </section>
  );
}

