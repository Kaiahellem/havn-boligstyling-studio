export const siteSettingsSchema = {
  name: "siteSettings",
  title: "Forsideinnhold",
  type: "document",
  __experimental_actions: ["update", "publish"],
  fields: [
    // Hero
    {
      name: "heroImage",
      title: "Hero — bilde",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "heroLabel",
      title: "Hero — etikett (liten tekst over tittel)",
      type: "string",
    },
    {
      name: "heroTitle",
      title: "Hero — tittel",
      type: "text",
      rows: 3,
    },
    {
      name: "heroBody",
      title: "Hero — brødtekst",
      type: "text",
      rows: 3,
    },
    {
      name: "heroCta",
      title: "Hero — knappetekst",
      type: "string",
    },
    // Editorial block
    {
      name: "editorialImage",
      title: "Editorialblokk — bilde",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "editorialLabel",
      title: "Editorialblokk — etikett",
      type: "string",
    },
    {
      name: "editorialTitle",
      title: "Editorialblokk — tittel",
      type: "text",
      rows: 3,
    },
    {
      name: "editorialBody",
      title: "Editorialblokk — brødtekst",
      type: "text",
      rows: 4,
    },
    {
      name: "editorialQuote",
      title: "Editorialblokk — sitat",
      type: "text",
      rows: 2,
    },
    {
      name: "editorialQuoteAuthor",
      title: "Editorialblokk — sitatforfatter",
      type: "string",
    },
    // Dark CTA
    {
      name: "ctaTitle",
      title: "CTA — tittel",
      type: "string",
    },
    {
      name: "ctaBody",
      title: "CTA — brødtekst",
      type: "string",
    },
  ],
};
