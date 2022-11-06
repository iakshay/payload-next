import { buildConfig } from 'payload/config';
import path from 'path';
import Users from './collections/Users';
import Examples from './collections/Examples';
import { Service } from './collections/Service';
import { Settings } from './globals/Settings';
import Post from './collections/Post';

export default buildConfig({
  admin: {
    user: Users.slug
  },
  collections: [
    Users,
    Post,
    // Add Collections here
    Examples,
    Service
  ],
  globals: [Settings],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});
