import { createClient } from "contentful";

export default async function getNewsItem(slug) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: "aktualnosci",
    "fields.slug": slug,
    limit: 1,
  });

  return res.items[0] || null;
}
