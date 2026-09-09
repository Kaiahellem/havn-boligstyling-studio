export const forsideSchema = {
  name: "forside",
  title: "Forside",
  type: "document",
  __experimental_actions: ["update", "publish"],
  fields: [
    {
      name: "heroImage",
      title: "Hero — bilde",
      type: "image",
      options: { hotspot: true },
      description: "Bildet i hero-seksjonen øverst på forsiden",
    },
    {
      name: "heroHeading",
      title: "Hero — overskrift",
      type: "string",
    },
    {
      name: "whyStyleLabel",
      title: "«Hvorfor style?» — liten etikett",
      type: "string",
    },
    {
      name: "whyStyleHeading",
      title: "«Hvorfor style?» — overskrift",
      type: "string",
    },
    {
      name: "whyStyleIntro",
      title: "«Hvorfor style?» — ingress",
      type: "text",
      rows: 3,
    },
    {
      name: "whyStyleReasons",
      title: "«Hvorfor style?» — de tre begrunnelsene",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Overskrift", type: "string" },
            { name: "body", title: "Tekst", type: "text", rows: 2 },
          ],
          preview: {
            select: { title: "title" },
          },
        },
      ],
      validation: (r) => r.max(3),
    },
  ],
  preview: {
    select: { media: "heroImage" },
    prepare: ({ media }) => ({ title: "Forside", media }),
  },
};
