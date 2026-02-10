import type { DocumentActionComponent } from "sanity";

export const openPreviewAction: DocumentActionComponent = (props) => {
  return {
    label: "Open preview",
    onHandle: () => {
      const base =
        process.env.SANITY_STUDIO_PREVIEW_URL || "http://localhost:3000";

      const doc = props.draft || props.published;

      const map: Record<string, string> = {
        homepage: "/",
        aboutPage: "/about",
        servicesPage: "/services",
        contact: "/contact",
      };

      const type = (doc && (doc as any)._type) as string | undefined;
      const path = (type && map[type]) || "/";

      const url = new URL("/api/preview", base);
      url.searchParams.set("to", path);

      // const secret = process.env.SANITY_STUDIO_PREVIEW_SECRET;
      // if (secret) url.searchParams.set("secret", secret);

      window.open(url.toString(), "_blank", "noopener,noreferrer");
      props.onComplete();
    },
  };
};
