import { createClient } from "contentful";

export default async function getProteges() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: "podopieczny",
  });

  return {
    data: res.items,
  };
}
