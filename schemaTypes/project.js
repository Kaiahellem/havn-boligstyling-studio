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
      of: [
        {
          type: "object",
          name: "galleryImage",
          fields: [
            {
              name: "image",
              title: "Bilde",
              type: "image",
              options: { hotspot: true },
              validation: (r) => r.required(),
            },
            {
              name: "caption",
              title: "Bildetekst",
              type: "string",
              description: "Valgfri — vises som bildetekst i galleriet",
            },
          ],
          preview: {
            select: { title: "caption", media: "image" },
          },
        },
      ],
    },
    {
      name: "description",
      title: "Undertekst",
      type: "text",
      rows: 2,
      description: "Kort tekstlinje under tittelen på prosjektsiden, f.eks. «Fullstyling, Oslo» — ikke en full beskrivelse",
    },
    {
      name: "service",
      title: "Tjeneste",
      type: "string",
      description: "Brukes til å filtrere prosjekter når man klikker seg inn fra en tjeneste",
      options: {
        list: [
          { title: "Fullstyling", value: "Fullstyling" },
          { title: "Delstyling", value: "Delstyling" },
          { title: "Rådgivning", value: "Rådgivning" },
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
