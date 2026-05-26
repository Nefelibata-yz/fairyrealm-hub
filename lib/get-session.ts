import { cookies } from "next/headers";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";

const sessionCookieName =
  process.env.NODE_ENV === "production"
    ? "__Secure-authjs.session-token"
    : "authjs.session-token";

export async function getSessionToken() {
  const cookieStore = await cookies();
  const cookieHeader = cookieStore
    .getAll()
    .map((c) => `${c.name}=${c.value}`)
    .join("; ");

  return getToken({
    req: { headers: { cookie: cookieHeader } } as unknown as NextRequest,
    secret: process.env.AUTH_SECRET,
    cookieName: sessionCookieName,
    secureCookie: process.env.NODE_ENV === "production",
  });
}
