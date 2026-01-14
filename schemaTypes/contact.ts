import { defineType, defineField } from "sanity";

const contactPage = {
  name: "contactPage",
  title: "Contact Page",
  type: "document",
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
};

export default contactPage;

