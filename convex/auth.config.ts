import { AuthConfig } from "convex/server";

export default {
  providers: [
    {
      domain: "https://guiding-swift-41.clerk.accounts.dev",
      applicationID: "convex",
    },
  ],
} satisfies AuthConfig;
