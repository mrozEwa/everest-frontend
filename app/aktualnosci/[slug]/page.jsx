import React from "react";
import getNewsItem from "@/lib/getNewsItem";
import NewsItemDetails from "../components/NewsItemDetails";


async function page({ params: { slug } }) {



  const newsItem = await getNewsItem(slug);



  return <NewsItemDetails newsItem={newsItem} />;
}

export default page;
