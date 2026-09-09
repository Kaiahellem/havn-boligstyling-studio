export const omOssSchema = {
  name: "omOss",
  title: "Om",
  type: "document",
  __experimental_actions: ["update", "publish"],
  fields: [
    {
      name: "aboutImage",
      title: "Portrettbilde",
      type: "image",
      options: { hotspot: true },
      description: "Vises på forsiden og øverst på Om-siden",
    },
    {
      name: "name",
      title: "Navn",
      type: "string",
    },
    {
      name: "role",
      title: "Rolle/tittel",
      type: "string",
      description: "F.eks. «Gründer og interiørstylist»",
    },
    {
      name: "bodyText1",
      title: "Bio — første avsnitt",
      type: "text",
      rows: 4,
    },
    {
      name: "bodyText2",
      title: "Bio — andre avsnitt",
      type: "text",
      rows: 4,
    },
    {
      name: "galleryLabel",
      title: "Prosessgalleri — liten etikett",
      type: "string",
    },
    {
      name: "galleryHeading",
      title: "Prosessgalleri — overskrift",
      type: "string",
    },
    {
      name: "gallerySteps",
      title: "Prosessgalleri — steg",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Steg-tittel", type: "string" },
            { name: "body", title: "Tekst", type: "text", rows: 2 },
            {
              name: "image",
              title: "Bilde",
              type: "image",
              options: { hotspot: true },
            },
          ],
          preview: {
            select: { title: "label", media: "image" },
          },
        },
      ],
      validation: (r) => r.max(6),
    },
    {
      name: "cta",
      title: "CTA-seksjon",
      type: "ctaBlock",
    },
  ],
  preview: {
    select: { title: "name", media: "aboutImage" },
    prepare: ({ title, media }) => ({ title: title || "Om", media }),
  },
};
