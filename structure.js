export const singletonTypes = new Set([
  "siteSettings",
  "omOss",
  "forside",
  "kontaktinfo",
  "tjenesterSide",
  "prosjekterSide",
]);

export const structure = (S) =>
  S.list()
    .title("Innhold")
    .items([
      S.listItem()
        .title("Generelt")
        .id("siteSettings")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
      S.listItem()
        .title("Forside")
        .id("forside")
        .child(S.document().schemaType("forside").documentId("forside")),
      S.listItem()
        .title("Om")
        .id("omOss")
        .child(S.document().schemaType("omOss").documentId("omOss")),
      S.listItem()
        .title("Tjenester")
        .id("tjenesterSide")
        .child(S.document().schemaType("tjenesterSide").documentId("tjenesterSide")),
      S.listItem()
        .title("Prosjekter")
        .id("prosjekterSide")
        .child(S.document().schemaType("prosjekterSide").documentId("prosjekterSide")),
      S.listItem()
        .title("Kontaktinfo")
        .id("kontaktinfo")
        .child(S.document().schemaType("kontaktinfo").documentId("kontaktinfo")),
      S.divider(),
      ...S.documentTypeListItems().filter((listItem) => !singletonTypes.has(listItem.getId())),
    ]);
