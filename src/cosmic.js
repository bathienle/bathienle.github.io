import Cosmic from "cosmicjs";

const cosmic = Cosmic();
export const bucket = cosmic.bucket({
  slug: process.env.VUE_APP_COSMICJS_SLUG,
  read_key: process.env.VUE_APP_COSMICJS_TOKEN,
});
