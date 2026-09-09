export const kontaktinfoSchema = {
  name: "kontaktinfo",
  title: "Kontaktinfo",
  type: "document",
  __experimental_actions: ["update", "publish"],
  fieldsets: [
    {
      name: "kontaktside",
      title: "Kontaktside",
      options: { collapsible: true },
    },
  ],
  fields: [
    { name: "epost", title: "E-post", type: "string" },
    { name: "telefon", title: "Telefon", type: "string" },
    { name: "omrade", title: "Område", type: "string" },
    { name: "instagramUrl", title: "Instagram-lenke", type: "url" },
    {
      name: "ctaButtonText",
      title: "Knappetekst (header/CTA)",
      type: "string",
      description: "F.eks. «Bestill befaring» — brukt i header og andre kontakt-knapper",
    },
    {
      name: "kontaktLabel",
      title: "Kontaktside — liten etikett",
      type: "string",
      fieldset: "kontaktside",
    },
    {
      name: "kontaktHeading",
      title: "Kontaktside — overskrift",
      type: "string",
      fieldset: "kontaktside",
    },
    {
      name: "kontaktIntro",
      title: "Kontaktside — ingress",
      type: "text",
      rows: 3,
      fieldset: "kontaktside",
    },
  ],
  preview: {
    prepare: () => ({ title: "Kontaktinfo" }),
  },
};
