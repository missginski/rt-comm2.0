import { defineType, defineField } from "sanity";
import ServiceExcerptInput from "@/app/(site)/services/ServiceExcerptInput";

const service = {
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Service Title",
      type: "string",
    },
    {
      name: "image",
      title: "Service Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string"
        }
      ]
    },
    {
      name: "bodyText",
      title: "Body Text",
      type: "text",
    },
    {
      name: "excerpt",
      title: "Preview Text",
      type: "string",
      description: "Shown on the /services list. Use 1-3 sentences.",
      options: { maxLength: 200 },
      components: {
        input: ServiceExcerptInput,
      },
    },
  ]
}

export default service;
