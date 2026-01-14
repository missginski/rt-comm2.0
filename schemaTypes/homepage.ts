import { defineField, Rule } from "sanity";

const homepage = {
  name: "homepage",
  title: "Homepage",
  type: "document",
  preview: {
    prepare() {
      return { title: "Homepage" };
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
          name: "heroHeadline",
          title: "Headline",
          type: "text",
          rows: 2,
          validation: (rule: Rule) => rule.max(300),
        },
        {
          name: "heroSubhead",
          title: "Subhead",
          type: "text",
          rows: 2,
          validation: (rule: Rule) => rule.max(300),
        },
        {
          name: "heroBtnText",
          title: "Button Text",
          type: "string",
        },
        {
          name: "heroImage",
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
        {
          name: "aboutBtnText",
          title: "About Button Text",
          type: "string",
        },
      ],
    },
    {
      name: "stats",
      title: "Stats Section",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        {
          name: "statItems",
          title: "Stats",
          type: "array",
          of: [
            {
              type: "object",
              name: "stat",
              fields: [
                { 
                  name: "label", 
                  title: "Label", 
                  type: "string" 
                },
                { 
                  name: "value", 
                  title: "Stat Value", 
                  type: "number" 
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "services",
      title: "Services Section",
      options: { collapsible: true, collapsed: true },
      type: "object",
      fields: [
        {
          name: "title",
          title: "Section Title",
          type: "string",
        },
        {
          name: "description",
          title: "Description",
          type: "text",
          rows: 3,
        },
        {
          name: "btnText",
          title: "Button Text",
          type: "string",
        },
        {
          name: "serviceItems",
          title: "Services",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "title",
                  title: "Service Title",
                  type: "string",
                },
                {
                  name: "description",
                  title: "Description",
                  type: "text",
                  rows: 3,
                },
                {
                  name: "image",
                  title: "Image",
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
              ]
            }
          ],
        }
      ]
    },
    {
      name: "valProps",
      title: "Value Props",
      options: { collapsible: true, collapsed: true },
      type: "object",
      fields: [
        {
          name: "title",
          title: "Section Title",
          type: "string",
        },
        {
          name: "description",
          title: "Description",
          type: "text",
          rows: 3,
        },
        {
          name: "image",
          title: "Val Prop Image",
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
          name: "valPropItems",
          title: "Value Props Section",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "description",
                  title: "Description",
                  type: "string",
                },
                {
                  name: "icon",
                  title: "Icon",
                  type: "string",
                  options: {
                    list: [
                      { title: "Clock", value: "Clock" },
                      { title: "Badge Check", value: "BadgeCheck" },
                      { title: "Zap", value: "Zap" },
                      { title: "Activity", value: "Activity" },
                      { title: "Network", value: "Network" },
                      { title: "Hard Hat", value: "HardHat" },
                      { title: "Shield Check", value: "ShieldCheck" },
                      { title: "Siren", value: "Siren" },
                      { title: "Phone Call", value: "PhoneCall" },
                      { title: "Rocket", value: "Rocket" },
                      { title: "Gauge", value: "Gauge" },
                      { title: "Server", value: "Server" },
                      { title: "Clipboard Check", value: "ClipboardCheck" },
                    ],
                  },
                  validation: (rule: Rule) => rule.required(),
                }
              ]
            }
          ],
        }
      ]
    },
    {
      name: "contact",
      title: "Contact Section",
      options: { collapsible: true, collapsed: true },
      type: "object",
      fields: [
        {
          name: "title",
          title: "Section Title",
          type: "string",
        },
        {
          name: "description",
          title: "Description",
          type: "text",
          rows: 4,
        },
        {
          name: "image",
          title: "Contact Image",
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
          name: "contactItems",
          title: "Contacts",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "name",
                  title: "Name",
                  type: "string",
                },
                {
                  name: "email",
                  title: "Email",
                  type: "string",
                },
                {
                  name: "phone",
                  title: "Phone Number",
                  type: "string",
                },
              ]
            }
          ],
        },
        {
          name: "address",
          title: "Address",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "street",
                  title: "Street",
                  type: "string",
                },
                {
                  name: "line2",
                  title: "Line 2",
                  type: "string",
                },
                {
                  name: "city",
                  title: "City",
                  type: "string",
                },
                {
                  name: "state",
                  title: "State",
                  type: "string",
                },
                {
                  name: "zipcode",
                  title: "Zipcode",
                  type: "string",
                },
              ]
            }
          ],
        }
      ]
    },
  ]
}

export default homepage;
