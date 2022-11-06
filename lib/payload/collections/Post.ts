import { CollectionConfig } from 'payload/types';

const Post: CollectionConfig = {
  slug: 'posts',
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
    {
      name: 'someField2',
      type: 'text',
    }
  ],
}

export default Post;