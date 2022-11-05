import { CollectionConfig } from 'payload/types';

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Examples: CollectionConfig = {
  slug: 'examples',
  access: {
    create: () => true,
    read: () => true,
    readVersions: () => true,
    update: () => true,
    delete: () => true,
  },
  admin: {
    useAsTitle: 'someField',
  },
  fields: [
    {
      name: 'someField',
      type: 'text',
    },
  ],
}

export default Examples;