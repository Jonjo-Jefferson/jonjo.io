import {defineConfig} from 'sanity';
import {deskTool} from 'sanity/desk';

import schemas from './sanity/schemas';

const config = defineConfig({
  projectId: 'ro4mg4d0',
  dataset: 'production',
  title: 'Jonjo.io',
  apiVersion: '2023-08-03',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: {types: schemas},
});

export default config;
