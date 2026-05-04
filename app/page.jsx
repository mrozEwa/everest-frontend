import Hero from "@/components/Main/Hero";
import Main from "@/components/Main/Main";
import getNews from "@/lib/getNews";
import getContent from "@/lib/getContent";

export const revalidate = 60;


export default async function Home() {
  const content = await getContent();
  const news = await getNews();



  return (
    <main>
      <Hero />
      <Main content={content} news={news} />
    </main>
  );
}
