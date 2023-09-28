import { config, collection, fields } from "@keystatic/core";

const shouldUseGithub = process.env.NODE_ENV === "production";

export default config({
  storage: shouldUseGithub
    ? {
        kind: "github",
        repo: {
          owner: "mgkusumaputra",
          name: "mgkusumaputra.me",
        },
      }
    : {
        kind: "local",
      },
  collections: {
    portfolio: collection({
      label: "Portfolio",
      entryLayout: "form",
      format: "json",
      slugField: "title",
      path: "content/portfolio/*",
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        projectURL: fields.text({ label: "Project URL" }),
        description: fields.text({ label: "Description" }),
        redirect: fields.url({
          label: "Redirect",
          validation: {
            isRequired: true,
          },
        }),
        image: fields.url({
          label: "Image",
          description: "Image URL",
          validation: {
            isRequired: true,
          },
        }),
      },
    }),
    certificate: collection({
      label: "Certificate",
      entryLayout: "form",
      format: "json",
      slugField: "title",
      path: "content/certificate/*",
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        Url: fields.url({
          label: "URL",
          validation: {
            isRequired: true,
          },
        }),
        orgLogo: fields.url({
          label: "Organization Logo",
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
    blog: collection({
      label: "Blog",
      entryLayout: "form",
      format: { contentField: "content" },
      path: "content/blog/*",
      slugField: "title",
      schema: {
        title: fields.slug({
          name: {
            label: "Title",
          },
        }),
        coverImage: fields.url({
          label: "Cover Image",
          description: "Cover Image URL",
          validation: {
            isRequired: true,
          },
        }),
        publishedAt: fields.date({
          label: "Published at",
          validation: {
            isRequired: true,
          },
        }),
        isDraft: fields.checkbox({
          label: "Do not publish",
          description:
            "Check this box to prevent this post from being published",
          defaultValue: false,
        }),
        category: fields.select({
          label: "Category",
          defaultValue: "technology",
          options: [
            {label: 'Technology', value: 'technology'},
            {label: 'Business', value: 'business'},
            {label: "Design", value: "design"},
            {label: "School", value: "school"}
          ]
        }),
        content: fields.document({
          label: "Content",
          formatting: true,
          dividers: true,
          links: true,
          tables: true,
          // componentBlocks,
        }),
      },
    }),
  },
});
