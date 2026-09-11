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
    {
      name: "instagramAccessToken",
      title: "Instagram access token (fornyes automatisk)",
      type: "string",
      hidden: true,
    },
    {
      name: "instagramTokenUpdatedAt",
      title: "Instagram token sist fornyet (automatisk)",
      type: "datetime",
      hidden: true,
    },
  ],
  preview: {
    select: { media: "logo" },
    prepare: ({ media }) => ({ title: "Generelt", media }),
  },
};
