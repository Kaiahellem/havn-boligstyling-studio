export const tjenesterSideSchema = {
  name: "tjenesterSide",
  title: "Tjenester",
  type: "document",
  __experimental_actions: ["update", "publish"],
  fields: [
    {
      name: "cta",
      title: "CTA-seksjon",
      type: "ctaBlock",
      description: "Avsluttende seksjon nederst på tjenester-siden",
    },
  ],
  preview: {
    prepare: () => ({ title: "Tjenester" }),
  },
};
