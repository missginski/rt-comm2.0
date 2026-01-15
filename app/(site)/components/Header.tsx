import { getSiteSettings } from "@/sanity/sanity.query";
import HeaderClient from "./HeaderClient";

export default async function Header() {
  const siteSettings = await getSiteSettings();

  return (
    <HeaderClient
      brandSrc={siteSettings.logoImageUrl}
      brandAlt={siteSettings.logoImageAlt}
    />
  );
}