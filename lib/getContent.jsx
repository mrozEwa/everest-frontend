import { createClient } from "contentful";

export default async function getContent() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: "content",
    order: "sys.createdAt",
  });

  return {
    data: res.items,
  };
}
