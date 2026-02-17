import { defineField, Rule } from "sanity";

const aboutPage = {
  name: "aboutPage",
  title: "About Page",
  type: "document",
  preview: {
    prepare() {
      return { title: "About Page" };
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
    {
      name: "about",
      title: "About Section",
      options: { collapsible: true, collapsed: true },
      type: "object",
      fields: [
        {
          name: "aboutHeadline",
          title: "Headline",
          type: "string",
        },
        defineField({
          name: "aboutText",
          title: "Text",
          type: "text",
        }),
      ],
    },
    {
      name: "certification",
      title: "Certifications Section",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        {
          name: "headline",
          title: "Headline",
          type: "string",
        },
        {
          name: "certItems",
          title: "Certifications",
          type: "array",
          of: [
            {
              type: "object",
              name: "cert",
              fields: [
                { 
                  name: "title", 
                  title: "Title", 
                  type: "string" 
                },
                { 
                  name: "image",
                  title: "Logo Image", 
                  type: "image",
                  options: { hotspot: true },
                },
              ],
            },
          ],
        },
      ],
    },
    // {
    //   name: "contact",
    //   title: "Contact Section",
    //   options: { collapsible: true, collapsed: true },
    //   type: "object",
    //   fields: [
    //     {
    //       name: "title",
    //       title: "Section Title",
    //       type: "string",
    //     },
    //     {
    //       name: "description",
    //       title: "Description",
    //       type: "string",
    //     },
    //     {
    //       name: "btnText",
    //       title: "Button Text",
    //       type: "string",
    //     },
    //     {
    //       name: "image",
    //       title: "Val Prop Image",
    //       type: "image",
    //       options: { hotspot: true },
    //     },
    //   ],
    // },
  ]
}

export default aboutPage;
