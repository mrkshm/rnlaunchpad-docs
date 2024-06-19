import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "SupaStarter Native",
      customCss: ["./src/custom.css"],
      social: {
        github: "https://github.com/mrkshm/supastarter-native",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Getting Started", link: "/guides/setup/" },
            { label: "Internationalization", link: "/guides/i18n/" },
            { label: "Error Logging", link: "/guides/error-logging/" },
            { label: "Analytics", link: "/guides/analytics/" },
          ],
        },
        {
          label: "Reference",
          // autogenerate: { directory: "reference" },
          items: [
            { label: "Overview", link: "/reference/overview/" },
            { label: "Authentication", link: "/reference/authentication/" },
            { label: "Organization", link: "/reference/organization/" },
          ],
        },
      ],
    }),
  ],
});
