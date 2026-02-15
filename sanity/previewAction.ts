import type { DocumentActionComponent } from "sanity";

export const openPreviewAction: DocumentActionComponent = (props) => {
  return {
    label: "Open preview",
    onHandle: () => {
      const base = window.location.origin;
      const doc = props.draft || props.published;

      const pathByType: Record<string, string> = {
        homepage: "/",
        aboutPage: "/about",
        servicesPage: "/services",
        contactPage: "/contact",
      };

      const path = pathByType[(doc as any)?._type ?? ""] ?? "/";
      const url = new URL("/api/preview", base);
      url.searchParams.set("to", path);

      window.open(url.toString(), "_blank", "noopener,noreferrer");
      props.onComplete();
    },
  };
};
