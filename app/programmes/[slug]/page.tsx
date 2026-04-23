import { programmes } from "@/data/site";

export default function ProgrammePage({ params }: { params: { slug: string } }) {
  const programme = programmes.find(
    (p) => p.title.toLowerCase().replace(/ /g, "-") === params.slug
  );

  if (!programme) return <div>Programme not found</div>;

  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{programme.title}</h1>
      <p className="mb-6">{programme.description}</p>

      <h2 className="text-xl font-semibold mb-2">Available Programmes</h2>
      <ul className="list-disc pl-5">
        {programme.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
