import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: import.meta.env.VITE_SERVER_URL,
  credentials:
    import.meta.env.VITE_CLIENT_URL === "http://localhost:5173"
      ? null
      : "include",
});
