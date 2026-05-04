import React from "react";
import getNewsItem from "@/lib/getNewsItem";
import NewsItemDetails from "../components/NewsItemDetails";

export const revalidate = 60;


async function page({ params: { slug } }) {



  const newsItem = await getNewsItem(slug);



  return <NewsItemDetails newsItem={newsItem} />;
}

export default page;
