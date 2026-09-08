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
      description: "Brukes som anker i URL-en (f.eks. #fullstyling) og til å filtrere prosjekter fra denne tjenesten",
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
      title: "Bilde (tjenestesiden)",
      type: "image",
      options: { hotspot: true },
      description: "Vises som denne tjenestens eget bilde i tjenestelisten",
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
