import Link from "next/link";
import { programmes } from "@/data/site";
import { SurfaceCard } from "@/components/ui";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function ProgrammeGrid() {
  return (
    <div className="grid gap-6 xl:grid-cols-3">
      {programmes.map((programme) => {
        const Icon = programme.icon;
        const href = `/programmes/${slugify(programme.title)}`;

        return (
          <Link key={programme.title} href={href} className="group block h-full">
            <SurfaceCard className="flex h-full flex-col border-ink/5 transition duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-[1.01] group-hover:border-ocean/20 group-hover:shadow-2xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-mist text-ocean transition group-hover:bg-ocean group-hover:text-white">
                <Icon className="h-7 w-7" />
              </div>

              <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-ink">
                {programme.title}
              </h3>

              <p className="mt-3 text-base leading-7 text-slate">
                {programme.description}
              </p>

              <ul className="mt-6 space-y-3 text-sm text-ink">
                {programme.items.map((item) => (
                  <li key={item} className="rounded-2xl bg-mist px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>

              <span className="mt-8 inline-flex items-center font-semibold text-ocean transition group-hover:translate-x-1">
                View Programme →
              </span>
            </SurfaceCard>
          </Link>
        );
      })}
    </div>
  );
}
