export const siteSettingsSchema = {
  name: "siteSettings",
  title: "Generelt",
  type: "document",
  __experimental_actions: ["update", "publish"],
  fields: [
    {
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
      description: "Vises i header og footer på alle sider",
    },
  ],
  preview: {
    select: { media: "logo" },
    prepare: ({ media }) => ({ title: "Generelt", media }),
  },
};
