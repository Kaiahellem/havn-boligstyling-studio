export const prosjekterSideSchema = {
  name: "prosjekterSide",
  title: "Prosjekter",
  type: "document",
  __experimental_actions: ["update", "publish"],
  fields: [
    {
      name: "cta",
      title: "CTA-seksjon",
      type: "ctaBlock",
      description: "Avsluttende seksjon nederst på prosjekter-siden",
    },
  ],
  preview: {
    prepare: () => ({ title: "Prosjekter" }),
  },
};
