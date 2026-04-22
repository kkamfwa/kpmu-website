import { Container, PrimaryButton } from "@/components/ui";

export function CtaBanner() {
  return (
    <section className="mt-20">
      <Container>
        <div className="rounded-[32px] bg-ink px-6 py-12 text-white sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">Start your journey</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Join a university college shaped for quality, innovation, and student success
            </h2>
            <p className="mt-4 text-base leading-7 text-white/76">
              Speak with our admissions team, review programme options, and begin your application
              with confidence.
            </p>
          </div>
          <div className="mt-8 lg:mt-0">
            <PrimaryButton href="/admissions">Apply Now</PrimaryButton>
          </div>
        </div>
      </Container>
    </section>
  );
}

