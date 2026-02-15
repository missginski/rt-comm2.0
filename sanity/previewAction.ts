import type { DocumentActionComponent } from "sanity";

export const openPreviewAction: DocumentActionComponent = (props) => {
  return {
    label: "Open preview",
    onHandle: () => {
      const base =
        typeof window !== "undefined" ? window.location.origin : "https://rt-comm2-0.vercel.app";

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

      window.open(url.toString(), "_blank", "noopener,noreferrer");
      props.onComplete();
    },
  };
};
