import { createClient } from "contentful";

export default async function getNews() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: "aktualnosci",
    order: "-fields.data",
  });

  return {
    data: res.items,
  };
}
