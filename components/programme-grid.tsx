import { programmes } from "@/data/site";
import { SurfaceCard } from "@/components/ui";

export function ProgrammeGrid() {
  return (
    <div className="grid gap-6 xl:grid-cols-3">
      {programmes.map((programme) => {
        const Icon = programme.icon;

        return (
          <SurfaceCard key={programme.title} className="border-ink/5">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-mist text-ocean">
              <Icon className="h-7 w-7" />
            </div>
            <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-ink">
              {programme.title}
            </h3>
            <p className="mt-3 text-base leading-7 text-slate">{programme.description}</p>
            <ul className="mt-6 space-y-3 text-sm text-ink">
              {programme.items.map((item) => (
                <li key={item} className="rounded-2xl bg-mist px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </SurfaceCard>
        );
      })}
    </div>
  );
}

