import { AuthConfig } from "convex/server";

export default {
  providers: [
    {
      domain: "https://good-sponge-60.clerk.accounts.dev",
      applicationID: "convex",
    },
  ],
} satisfies AuthConfig;
