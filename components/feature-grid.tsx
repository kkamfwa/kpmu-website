import { LucideIcon } from "lucide-react";
import { SurfaceCard } from "@/components/ui";

type Item = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function FeatureGrid({ items }: { items: Item[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <SurfaceCard key={item.title} className="border-ink/5">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mist text-ocean">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-ink">{item.title}</h3>
            <p className="mt-3 text-base leading-7 text-slate">{item.description}</p>
          </SurfaceCard>
        );
      })}
    </div>
  );
}

