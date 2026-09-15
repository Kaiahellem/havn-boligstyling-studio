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
    {
      name: "aboutHeading",
      title: "«Om meg»-seksjon — overskrift",
      type: "string",
      description:
        "Kortversjonen av «Om meg» som vises nederst på forsiden. Helt uavhengig av Om-siden — den redigeres under «Om».",
    },
    {
      name: "aboutImage",
      title: "«Om meg»-seksjon — bilde",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "aboutBody1",
      title: "«Om meg»-seksjon — første avsnitt",
      type: "text",
      rows: 4,
    },
    {
      name: "aboutBody2",
      title: "«Om meg»-seksjon — andre avsnitt",
      type: "text",
      rows: 4,
    },
    {
      name: "aboutLinkText",
      title: "«Om meg»-seksjon — lenketekst",
      type: "string",
      description: "Teksten på lenken videre til Om-siden",
    },
  ],
  preview: {
    select: { media: "heroImage" },
    prepare: ({ media }) => ({ title: "Forside", media }),
  },
};
