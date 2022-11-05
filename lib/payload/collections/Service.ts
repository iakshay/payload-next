import { CollectionConfig } from "payload/types";

export const Service: CollectionConfig = {
  slug: "services",
  admin: {
    group: 'Services',
    useAsTitle: "title",
  },
  versions: {
    drafts: true,
  },
  access: {
    create: () => true,
    read: () => true,
    readVersions: () => true,
    update: () => true,
    delete: () => true,
  },    
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "textfield",
      type: "textarea",
      required: true,
    },
  ],
};
