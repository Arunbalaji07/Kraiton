import { AuthConfig } from "convex/server";

export default {
  providers: [
    {
      domain: process.env.NEXT_PUBLIC_CONVEX_URL!,
      applicationID: "convex",
    },
  ],
} satisfies AuthConfig;
