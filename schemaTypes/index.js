import { projectSchema } from "./project";
import { siteSettingsSchema } from "./siteSettings";
import { tjenesteSchema } from "./tjeneste";
import { omOssSchema } from "./omOss";
import { forsideSchema } from "./forside";
import { kontaktinfoSchema } from "./kontaktinfo";
import { tjenesterSideSchema } from "./tjenesterSide";
import { prosjekterSideSchema } from "./prosjekterSide";
import { ctaBlock } from "./objects/ctaBlock";

export const schemaTypes = [
  projectSchema,
  siteSettingsSchema,
  tjenesteSchema,
  omOssSchema,
  forsideSchema,
  kontaktinfoSchema,
  tjenesterSideSchema,
  prosjekterSideSchema,
  ctaBlock,
];
