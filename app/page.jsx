import Hero from "@/components/Main/Hero";
import Main from "@/components/Main/Main";
import getContent from "@/lib/getContent";

export default async function Home() {
  const content = await getContent();

  return (
    <main>
      <Hero />
      <Main content={content} />
    </main>
  );
}
