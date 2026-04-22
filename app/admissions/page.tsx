import { PageHero } from "@/components/page-hero";
import { Container, PrimaryButton, SectionHeading, SurfaceCard } from "@/components/ui";
import { admissionsSteps } from "@/data/site";

export const metadata = {
  title: "Admissions"
};

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title="A confident, supportive admissions process for ambitious students"
        description="KPMU welcomes applicants seeking a modern university college experience with quality standards, future-ready programmes, and clear support at every stage."
      />
      <section className="py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="How to Apply"
              title="Simple steps from enquiry to enrollment"
              description="Our admissions process is intentionally clear and supportive so prospective students and families can move forward with confidence."
            />
            <div className="mt-10 space-y-5">
              {admissionsSteps.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-[24px] border border-ink/10 bg-white p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-semibold text-white">
                    {index + 1}
                  </div>
                  <p className="pt-1 text-base leading-7 text-slate">{step}</p>
                </div>
              ))}
            </div>
          </div>
          <SurfaceCard className="border-ink/5 bg-mist">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-ocean">Ready to begin</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink">
              Apply to KPMU University College
            </h2>
            <p className="mt-4 text-base leading-8 text-slate">
              Connect with admissions to discuss programme fit, requirements, and the best next step
              for your application.
            </p>
            <div className="mt-8">
              <PrimaryButton href="/contact">Speak to Admissions</PrimaryButton>
            </div>
            <div className="mt-8 rounded-[24px] bg-white p-5">
              <p className="font-semibold text-ink">Suggested applicant checklist</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate">
                <li>Academic transcripts or result slips</li>
                <li>National registration card or passport copy</li>
                <li>Programme choice and personal contact details</li>
                <li>Additional supporting records where applicable</li>
              </ul>
            </div>
          </SurfaceCard>
        </Container>
      </section>
    </>
  );
}

