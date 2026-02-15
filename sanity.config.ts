import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { openPreviewAction } from "./sanity/previewAction";
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';
import type { StructureBuilder, StructureContext } from "sanity/structure";


export default defineConfig({
  name: 'default',
  title: 'RTC Website',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  basePath: "/studio",

  plugins: [
    structureTool({
      structure: (S: StructureBuilder, context: StructureContext) =>
        S.list()
          .title("Content")
          .items([
            orderableDocumentListDeskItem({
              type: "service",
              title: "Services (Reorder)",
              S,
              context,
            }),

            ...S.documentTypeListItems().filter(
              (item) => item.getId() !== "service"
            ),
          ]),
}),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },

  document: {
    actions: (prev) => [...prev, openPreviewAction],
  },
})
