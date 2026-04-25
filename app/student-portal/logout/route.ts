import { NextRequest, NextResponse } from "next/server";
import { clearPortalSession } from "@/lib/portal-auth";

export async function GET(request: NextRequest) {
  clearPortalSession();
  return NextResponse.redirect(new URL("/student-portal/login", request.url));
}
