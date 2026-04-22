import { ShieldCheck, Sparkles } from "lucide-react";
import { Container, PrimaryButton, SecondaryButton, SurfaceCard } from "@/components/ui";
import { stats } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-grid">
      <Container className="grid gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-ocean/15 bg-white/80 px-4 py-2 text-sm font-medium text-ocean shadow-sm">
            <ShieldCheck className="h-4 w-4" />
            HEA accreditation readiness built into the institution strategy
          </div>
          <h1 className="mt-8 max-w-3xl font-display text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
            KPMU University College
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate sm:text-xl">
            A premium higher education destination in Zambia combining academic integrity, practical
            programmes, and AI-powered learning for the next generation of leaders.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <PrimaryButton href="/admissions">Apply Now</PrimaryButton>
            <SecondaryButton href="/programmes">Explore Programmes</SecondaryButton>
          </div>
          <div className="mt-10 flex items-center gap-3 text-sm text-slate">
            <Sparkles className="h-4 w-4 text-gold" />
            Purpose-built for quality assurance, industry relevance, and modern student experience
          </div>
        </div>
        <SurfaceCard className="relative overflow-hidden border-ink/5 bg-gradient-to-br from-ink via-ocean to-[#1A6C7C] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.18),_transparent_30%)]" />
          <div className="relative grid gap-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">
                Why KPMU
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight">
                Designed for a confident, future-ready student journey
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur">
                  <p className="font-display text-3xl font-semibold">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-white/74">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </SurfaceCard>
      </Container>
    </section>
  );
}

