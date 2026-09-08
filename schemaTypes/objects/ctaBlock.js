// Reusable "closing call to action" block — heading + body + button label —
// embedded on the Om/Tjenester/Prosjekter page-settings documents so each
// page's closing CTA section is editable without its own document type.
export const ctaBlock = {
  name: "ctaBlock",
  title: "CTA-seksjon",
  type: "object",
  fields: [
    { name: "heading", title: "Overskrift", type: "string" },
    { name: "body", title: "Tekst", type: "string" },
    { name: "buttonText", title: "Knappetekst", type: "string" },
  ],
};
