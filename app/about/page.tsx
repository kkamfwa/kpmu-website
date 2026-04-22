import { FeatureGrid } from "@/components/feature-grid";
import { PageHero } from "@/components/page-hero";
import { Container, SectionHeading, SurfaceCard } from "@/components/ui";
import { pillars } from "@/data/site";

export const metadata = {
  title: "About"
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About KPMU"
        title="A modern university college with a clear commitment to quality and transformation"
        description="KPMU University College exists to deliver credible, future-facing higher education in Zambia through strong governance, relevant teaching, and a student-first culture."
      />
      <section className="py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.95fr]">
          <SurfaceCard className="border-ink/5">
            <SectionHeading
              eyebrow="Institutional Direction"
              title="Grounded in academic excellence and readiness for HEA standards"
              description="Every element of the institution is being shaped to support robust quality systems, accountable leadership, and programme delivery that earns trust from students, families, and regulators."
            />
          </SurfaceCard>
          <SurfaceCard className="border-ink/5 bg-mist">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">Vision</h2>
            <p className="mt-4 text-base leading-8 text-slate">
              To become a distinguished university college in Zambia known for innovation, integrity,
              and graduate impact.
            </p>
            <h2 className="mt-10 font-display text-2xl font-semibold tracking-tight text-ink">Mission</h2>
            <p className="mt-4 text-base leading-8 text-slate">
              To provide accessible, high-quality, technology-enabled education that prepares students
              to lead, serve, and solve real-world challenges.
            </p>
          </SurfaceCard>
        </Container>
      </section>
      <section className="pb-20">
        <Container>
          <SectionHeading
            eyebrow="Core Pillars"
            title="What defines the KPMU experience"
            description="The institution is built around practical excellence, learner support, and a culture that embraces innovation responsibly."
          />
          <div className="mt-12">
            <FeatureGrid items={pillars} />
          </div>
        </Container>
      </section>
    </>
  );
}

