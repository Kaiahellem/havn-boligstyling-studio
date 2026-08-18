export const singletonTypes = new Set(["siteSettings", "omOss"]);

export const structure = (S) =>
  S.list()
    .title("Innhold")
    .items([
      S.listItem()
        .title("Forsideinnhold")
        .id("siteSettings")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
      S.listItem()
        .title("Om oss")
        .id("omOss")
        .child(S.document().schemaType("omOss").documentId("omOss")),
      S.divider(),
      ...S.documentTypeListItems().filter((listItem) => !singletonTypes.has(listItem.getId())),
    ]);
