import { defineField, Rule } from "sanity";

const servicesPage = {
  name: "servicesPage",
  title: "Services Page",
  type: "document",
  preview: {
    prepare() {
      return { title: "Services Page" };
    },
  },
  fields: [
    {
      name: "hero",
      title: "Hero Section",
      options: { collapsible: true, collapsed: true },
      type: "object",
      fields: [
        {
          name: "headline",
          title: "Headline",
          type: "text",
          rows: 2,
          validation: (rule: Rule) => rule.max(300),
        },
        {
          name: "subhead",
          title: "Subhead",
          type: "text",
          rows: 2,
          validation: (rule: Rule) => rule.max(300),
        },
        {
          name: "bgImage",
          title: "Hero Background Image",
          type: "image",
          options: { hotspot: true },
        },
      ],
    },

  ]
}

export default servicesPage;
