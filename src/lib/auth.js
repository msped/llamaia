import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { db } from "@/db/schema"
import { DrizzleAdapter } from "@auth/drizzle-adapter";

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: DrizzleAdapter(db),
    provdiers: [GitHub,],
})