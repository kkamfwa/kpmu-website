import { PageHero } from "@/components/page-hero";
import { Container, PrimaryButton, SurfaceCard } from "@/components/ui";
import { contactDetails } from "@/data/site";

export const metadata = {
  title: "Contact"
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Connect with KPMU University College"
        description="Reach out to our admissions and institutional support team to ask questions, request guidance, or begin your application journey."
      />
      <section className="py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-6">
            {contactDetails.map((detail) => (
              <SurfaceCard key={detail.label} className="border-ink/5">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-ocean">{detail.label}</p>
                <p className="mt-3 text-lg font-medium text-ink">{detail.value}</p>
              </SurfaceCard>
            ))}
          </div>
          <SurfaceCard className="border-ink/5">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">Admissions enquiry</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate">
              This production-ready starter includes a polished contact form layout ready to connect to
              your preferred form backend or CRM.
            </p>
            <form className="mt-8 grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-ink">
                Full Name
                <input
                  type="text"
                  placeholder="Your full name"
                  className="rounded-2xl border border-ink/10 px-4 py-3 outline-none transition focus:border-ocean"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-ink">
                Email Address
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="rounded-2xl border border-ink/10 px-4 py-3 outline-none transition focus:border-ocean"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-ink">
                Programme Interest
                <input
                  type="text"
                  placeholder="Preferred programme"
                  className="rounded-2xl border border-ink/10 px-4 py-3 outline-none transition focus:border-ocean"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-ink">
                Phone Number
                <input
                  type="tel"
                  placeholder="+260..."
                  className="rounded-2xl border border-ink/10 px-4 py-3 outline-none transition focus:border-ocean"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-ink sm:col-span-2">
                Message
                <textarea
                  rows={6}
                  placeholder="Tell us how we can help."
                  className="rounded-3xl border border-ink/10 px-4 py-3 outline-none transition focus:border-ocean"
                />
              </label>
              <div className="sm:col-span-2">
                <PrimaryButton href="mailto:admissions@kpmu.edu.zm">Send Enquiry</PrimaryButton>
              </div>
            </form>
          </SurfaceCard>
        </Container>
      </section>
    </>
  );
}

