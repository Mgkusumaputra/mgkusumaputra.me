import { config, collection, fields } from "@keystatic/core";

const shouldUseGithub = process.env.NODE_ENV === "production";

export default config({
  storage: shouldUseGithub
    ? {
        kind: "github",
        repo: {
          owner: "mgkusumaputra",
          name: "mgkusumaputra.me"
        }
      }
    : {
        kind: "local",
      },
  collections: {
    portfolio: collection({
      label: "Portfolio",
      entryLayout: "form",
      format: { contentField: "content" },
      slugField: "title",
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        Url: fields.url({
          label: "URL",
          validation: {
            isRequired: true,
          },
        }),
        content: fields.document({
          label: "Content",
          formatting: true,
          dividers: true,
          links: true,
          tables: true,
        }),
      },
    }),
    certificate: collection({
      label: "Certificate",
      entryLayout: "form",
      format: "json",
      slugField: "title",
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        Url: fields.url({
          label: "URL",
          validation: {
            isRequired: true,
          },
        }),
        Org: fields.text({ label: "Organization" }),
        issuedDate: fields.date({
          label: "Issue Date",
        }),
      },
    }),
  },
});
