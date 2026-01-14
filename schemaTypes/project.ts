import { defineType, defineField } from "sanity";
import ExcerptInput from "@/app/(site)/projects/ExcerptInput";

const project = {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Project Title",
      type: "string",
    },
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title"},
      validation: (rule) => rule.required(),
    }),
    {
      name: "image",
      title: "Project Image",
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
      name: "location",
      title: "Location",
      type: "string"
    },
    {
      name: "client",
      title: "Client",
      type: "string"
    },
    {
      name: "description",
      title: "Project Description",
      type: "text",
    },
    {
      name: "excerpt",
      title: "Preview Text",
      type: "string",
      description: "Shown on the /projects list. Use 1-3 sentences.",
      options: { maxLength: 200 },
      components: {
        input: ExcerptInput,
      },
    },
  ]
}

export default project;
