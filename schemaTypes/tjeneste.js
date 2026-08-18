export const tjenesteSchema = {
  name: "tjeneste",
  title: "Tjeneste",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Tittel",
      type: "string",
      validation: (r) => r.required(),
    },
    {
      name: "slug",
      title: "Slug (anker-ID)",
      type: "slug",
      description: "Brukes som anker i URL-en, f.eks. #boligstyling",
      options: { source: "title" },
      validation: (r) => r.required(),
    },
    {
      name: "order",
      title: "Rekkefølge",
      type: "number",
      description: "Lavere tall vises først",
    },
    {
      name: "description",
      title: "Beskrivelse",
      type: "text",
      rows: 4,
    },
    {
      name: "heroImage",
      title: "Hero — bilde (tjenestesiden)",
      type: "image",
      options: { hotspot: true },
      description: "Brukes kun for den første tjenesten, som hero-bilde øverst på siden",
    },
    {
      name: "highlights",
      title: "Punkter",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
  preview: {
    select: { title: "title" },
  },
};
