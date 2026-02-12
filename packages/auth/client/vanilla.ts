import { createAuthClient as createAuthClientVanilla } from "better-auth/client";
import { inferAdditionalFields } from "better-auth/client/plugins";
import { auth } from "@saygo/auth";

export const authClientVanilla = createAuthClientVanilla({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  plugins: [inferAdditionalFields<typeof auth>()],
});