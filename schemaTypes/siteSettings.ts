export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    {
      name: "brandLogo",
      title: "Brand Logo",
      type: "image",
      options: { hotspot: true },
      fields: [
        { 
          name: "alt", 
          title: "Alt Text", 
          type: "string" 
        }
      ],
    },
    {
      name: "unionLogo",
      title: "Union Logo",
      type: "image",
      options: { hotspot: true },
      fields: [
        { 
          name: "alt", 
          title: "Alt Text", 
          type: "string" 
        }
      ],
    },
    {
      name: "footerText",
      title: "Footer Text",
      type: "string",
    },
  ],
};
