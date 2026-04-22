import { CtaBanner } from "@/components/cta-banner";
import { FeatureGrid } from "@/components/feature-grid";
import { Hero } from "@/components/hero";
import { ProgrammeGrid } from "@/components/programme-grid";
import { Container, SectionHeading, SurfaceCard } from "@/components/ui";
import { highlights, pillars } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Strategic Differentiators"
            title="A university college built for trust, relevance, and the future of learning"
            description="KPMU blends academic governance, contemporary programme design, and AI-enabled student support to create a premium and credible higher education experience."
          />
          <div className="mt-12">
            <FeatureGrid items={highlights} />
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Learning Model"
              title="Modern teaching, practical application, and AI-enhanced support"
              description="Students benefit from structured academic delivery, digital fluency, and faculty engagement that prepares them for leadership and impact."
            />
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <SurfaceCard key={pillar.title} className="border-ink/5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mist text-ocean">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-ink">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate">{pillar.description}</p>
                </SurfaceCard>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Academic Portfolio"
            title="Programmes aligned with opportunity and national development"
            description="The KPMU academic offer is designed to support employability, entrepreneurship, digital capability, and meaningful contribution across sectors."
          />
          <div className="mt-12">
            <ProgrammeGrid />
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}

