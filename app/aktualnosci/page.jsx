import getNews from "@/lib/getNews";
import AktualnosciWrapper from "./components/AktualnosciWrapper";
import CardComponent from "./components/Card";
import NewsOverview from "./components/NewsOverview";

export const revalidate = 60;

export default async function page() {
  const news = await getNews();


  return (
    <div>
      <AktualnosciWrapper>
        <NewsOverview>
          {news.data.map((newsItem) => (
            <CardComponent key={newsItem.sys.id} newsItem={newsItem} />
          ))}
        </NewsOverview>
      </AktualnosciWrapper>
    </div>
  );
}
