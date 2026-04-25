import { redirect } from "next/navigation";
import { hash } from "bcryptjs";
import { getPortalSession } from "@/lib/portal-auth";
import { updatePortalUserCredential } from "@/lib/db";

async function updateAction(formData: FormData) {
  "use server";

  const email = String(formData.get("email"));
  const newValue = String(formData.get("newValue"));

  if (!email || !newValue) {
    redirect("/student-portal/change-access?error=Missing details");
  }

  const newHash = await hash(newValue, 10);

  await updatePortalUserCredential(email, newHash);

  redirect("/student-portal/dashboard");
}

export default function ChangeAccessPage() {
  const user = getPortalSession();

  if (!user) {
    redirect("/student-portal/login");
  }

  if (!user.mustUpdateAccess) {
    redirect("/student-portal/dashboard");
  }

  return (
    <main className="px-6 py-24">
      <div className="mx-auto max-w-md">
        <h1 className="text-3xl font-semibold text-slate-950">
          Update Your Access
        </h1>

        <p className="mt-4 text-slate-600">
          You must change your temporary access before continuing.
        </p>

        <form action={updateAction} className="mt-8 space-y-4">
          <input type="hidden" name="email" value={user.email} />

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
