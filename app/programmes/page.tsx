import { PageHero } from "@/components/page-hero";
import { ProgrammeGrid } from "@/components/programme-grid";
import { Container, SectionHeading, SurfaceCard } from "@/components/ui";

export const metadata = {
  title: "Programmes"
};

export default function ProgrammesPage() {
  return (
    <>
      <PageHero
        eyebrow="Programmes"
        title="Degrees and academic pathways designed for modern careers and meaningful impact"
        description="KPMU University College offers industry-aligned programmes that blend academic rigor, digital fluency, and practical relevance for Zambia's evolving economy."
      />
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Schools"
            title="A focused portfolio with room for growth"
            description="Our programmes are structured to deliver strong foundations, future-ready skills, and pathways into leadership, innovation, and service."
          />
          <div className="mt-12">
            <ProgrammeGrid />
          </div>
        </Container>
      </section>
      <section className="pb-20">
        <Container className="grid gap-6 lg:grid-cols-3">
          {[
            "Applied, career-oriented curricula",
            "Faculty-supported student mentoring",
            "Technology-rich delivery and digital resources"
          ].map((item) => (
            <SurfaceCard key={item} className="border-ink/5 bg-mist">
              <p className="font-display text-2xl font-semibold tracking-tight text-ink">{item}</p>
            </SurfaceCard>
          ))}
        </Container>
      </section>
    </>
  );
}

