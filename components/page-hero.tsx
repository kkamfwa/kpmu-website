import { Container } from "@/components/ui";

export function PageHero({
  eyebrow,
  title,
  description,
  variant = "default"
}: {
  eyebrow: string;
  title: string;
  description: string;
  variant?: "default" | "flagship";
}) {
  if (variant === "flagship") {
    return (
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(196,154,58,0.28),transparent_28%),radial-gradient(circle_at_85%_10%,rgba(15,76,92,0.45),transparent_32%),linear-gradient(135deg,#092235_0%,#0f4c5c_54%,#092235_100%)]" />
        <div className="absolute inset-0 -z-10 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:44px_44px]" />
        <div className="absolute left-0 top-0 -z-10 h-48 w-48 rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 -z-10 h-64 w-64 rounded-full bg-ocean/30 blur-3xl" />

        <Container className="py-24 sm:py-28 lg:py-32">
          <div className="max-w-5xl">
            <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-gold shadow-sm backdrop-blur">
              {eyebrow}
            </p>
            <h1 className="mt-8 max-w-5xl font-display text-4xl font-semibold tracking-[-0.035em] text-white sm:text-6xl lg:text-7xl lg:leading-[1.02]">
              {title}
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/82 sm:text-xl sm:leading-9">
              {description}
            </p>
          </div>
        </Container>
      </section>
    );
  }

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
