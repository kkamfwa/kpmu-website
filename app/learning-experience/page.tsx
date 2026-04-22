import { FeatureGrid } from "@/components/feature-grid";
import { PageHero } from "@/components/page-hero";
import { Container, SectionHeading, SurfaceCard } from "@/components/ui";
import { highlights } from "@/data/site";

export const metadata = {
  title: "Learning Experience"
};

export default function LearningExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="Learning Experience"
        title="A premium student experience shaped by digital excellence and human support"
        description="KPMU combines rigorous teaching with responsive student systems, AI-enhanced learning tools, and environments that help students progress with confidence."
      />
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Student Experience"
            title="Technology-enabled learning with practical academic structure"
            description="Our learning model is designed to balance campus connection, digital access, and guided academic development from first enquiry to graduation."
          />
          <div className="mt-12">
            <FeatureGrid items={highlights} />
          </div>
        </Container>
      </section>
      <section className="pb-20">
        <Container className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "AI Study Support",
              description:
                "Students engage with modern digital workflows that encourage better feedback loops, stronger revision habits, and improved academic confidence."
            },
            {
              title: "Blended Delivery",
              description:
                "Teaching combines face-to-face engagement, guided online resources, and flexible access to learning content."
            },
            {
              title: "Career Preparation",
              description:
                "Students build practical communication, critical thinking, and digital skills that strengthen employability."
            }
          ].map((item) => (
            <SurfaceCard key={item.title} className="border-ink/5">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">{item.title}</h2>
              <p className="mt-4 text-base leading-8 text-slate">{item.description}</p>
            </SurfaceCard>
          ))}
        </Container>
      </section>
    </>
  );
}

