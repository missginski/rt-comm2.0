export function resolvePreviewUrl(doc: any) {
  const base =
    process.env.SANITY_STUDIO_PREVIEW_URL || "http://localhost:3000";

  let path = "/";

  switch (doc?._type) {
    case "homepage":
      path = "/";
      break;
    case "aboutPage":
      path = "/about";
      break;
    case "servicesPage":
      path = "/services";
      break;
    case "contact":
      path = "/contact";
      break;
    default:
      path = "/";
  }

  const secret = process.env.SANITY_STUDIO_PREVIEW_SECRET;

  const url = new URL("/api/preview", base);
  url.searchParams.set("to", path);
  if (secret) url.searchParams.set("secret", secret);

  return url.toString();
}
