export const projectSchema = {
  name: "project",
  title: "Prosjekt",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Tittel",
      type: "string",
      validation: (r) => r.required(),
    },
    {
      name: "order",
      title: "Rekkefølge",
      type: "number",
      description: "Lavere tall vises først",
    },
    {
      name: "mainImage",
      title: "Hovedbilde",
      type: "image",
      options: { hotspot: true },
      validation: (r) => r.required(),
    },
    {
      name: "images",
      title: "Bildegalleri",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    },
    {
      name: "description",
      title: "Beskrivelse",
      type: "text",
      rows: 3,
    },
    {
      name: "city",
      title: "Sted",
      type: "string",
    },
    {
      name: "service",
      title: "Tjeneste",
      type: "string",
      options: {
        list: [
          { title: "Boligstyling", value: "Boligstyling" },
          { title: "Konsultasjon", value: "Konsultasjon" },
          { title: "Utleiestyling", value: "Utleiestyling" },
        ],
      },
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "service",
      media: "mainImage",
    },
  },
};
