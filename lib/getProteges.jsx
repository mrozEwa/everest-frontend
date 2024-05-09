import { createClient } from "contentful";

export default async function getProteges() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res1 = await client.getEntries({
    content_type: "podopieczny",
    order: "-sys.createdAt",
    "sys.createdAt[gte]": "2024-01-01T00:00:00Z", // Sort entries from January 1, 2022 onwards
  });

  const res2 = await client.getEntries({
    content_type: "podopieczny",
    order: "sys.createdAt",
    "sys.createdAt[lte]": "2024-01-31T23:59:59Z", // Sort entries from December 31, 2022 onwards
  });

  const res = [...res1.items, ...res2.items];
  // console.log(res);

  return {
    data: res,
  };
}
