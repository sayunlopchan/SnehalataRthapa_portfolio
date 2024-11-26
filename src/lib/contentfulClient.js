// lib/contentfulClient.js

import { createClient } from 'contentful';

// Create a Contentful client
export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});
