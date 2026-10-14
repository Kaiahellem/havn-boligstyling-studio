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
      name: "shortDescription",
      title: "Kort beskrivelse (forsiden)",
      type: "text",
      rows: 2,
      description: "Vises på tjenestekortet på forsiden. Hold den til én eller to setninger",
    },
    {
      name: "description",
      title: "Beskrivelse (tjenestesiden)",
      type: "text",
      rows: 8,
      description: "Den utfyllende beskrivelsen på tjenestesiden. Trykk Enter for å starte et nytt avsnitt",
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
