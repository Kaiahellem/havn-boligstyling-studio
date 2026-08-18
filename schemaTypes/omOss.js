export const omOssSchema = {
  name: "omOss",
  title: "Om oss",
  type: "document",
  __experimental_actions: ["update", "publish"],
  fields: [
    {
      name: "heroImage",
      title: "Hero — bilde (høyre side)",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "aboutImage",
      title: "Om-bilde (venstre side)",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "quote",
      title: "Sitat (hero)",
      type: "text",
      rows: 3,
    },
    {
      name: "quoteAuthor",
      title: "Sitatforfatter",
      type: "string",
    },
    {
      name: "bodyText1",
      title: "Brødtekst 1",
      type: "text",
      rows: 4,
    },
    {
      name: "bodyText2",
      title: "Brødtekst 2",
      type: "text",
      rows: 4,
    },
    {
      name: "values",
      title: "Verdier",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Tittel", type: "string" },
            { name: "desc", title: "Beskrivelse", type: "text", rows: 2 },
          ],
          preview: {
            select: { title: "title" },
          },
        },
      ],
    },
    {
      name: "stats",
      title: "Statistikk",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "num", title: "Tall", type: "string" },
            { name: "label", title: "Etikett", type: "string" },
            { name: "desc", title: "Beskrivelse", type: "string" },
          ],
          preview: {
            select: { title: "num", subtitle: "label" },
          },
        },
      ],
    },
  ],
};
