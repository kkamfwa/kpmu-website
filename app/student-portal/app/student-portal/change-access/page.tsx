import { redirect } from "next/navigation";
import { hash } from "bcryptjs";
import { getPortalSession, setPortalSession } from "@/lib/portal-auth";
import { updatePortalUserCredential } from "@/lib/db";

async function updateAction(formData: FormData) {
  "use server";

  const email = String(formData.get("email") ?? "");
  const newValue = String(formData.get("newValue") ?? "");
  const name = String(formData.get("name") ?? "");
  const role = String(formData.get("role") ?? "student");

  if (!email || !newValue) {
    redirect("/student-portal/change-access");
  }

  const newHash = await hash(newValue, 10);

  await updatePortalUserCredential(email, newHash);

  setPortalSession({
    name,
    email,
    role: role as any,
    mustUpdateAccess: false,
  });

  if (role === "admin") {
    redirect("/student-portal/admin");
  }

  redirect("/student-portal/dashboard");
}

export default function ChangeAccessPage() {
  const user = getPortalSession();

  if (!user) {
    redirect("/student-portal/login");
  }

  return (
    <main className="px-6 py-24">
      <div className="mx-auto max-w-md">
        <h1 className="text-3xl font-semibold text-slate-950">
          Update Your Access
        </h1>

        <p className="mt-4 text-slate-600">
          Please create your new private access code before continuing.
        </p>

        <form action={updateAction} className="mt-8 space-y-4">
          <input type="hidden" name="email" value={user.email} />
          <input type="hidden" name="name" value={user.name} />
          <input type="hidden" name="role" value={user.role} />

          <input
            name="newValue"
            type="password"
            required
            placeholder="New access code"
            className="w-full rounded-xl border p-3"
          />

          <button className="w-full rounded-xl bg-[#0b3b5d] p-3 text-white">
            Update Access
          </button>
        </form>
      </div>
    </main>
  );
}
