import { getHomepage } from "@/sanity/sanity.query";
import StatsStripClient from "./StatsStripClient";

export default async function StatsStrip() {
  const homepage = await getHomepage();
  const statItems = homepage?.stats?.statItems ?? [];

  return <StatsStripClient statItems={statItems} />;
}
