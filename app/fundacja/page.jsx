import getSlider from "@/lib/getSlider";
import getDocs from "@/lib/getDocs";
import getContent from "@/lib/getContent";

import Carousel from "@/app/fundacja/components/Carousel";
import About from "@/app/fundacja/components/About";
import Docs from "@/app/fundacja/components/Docs";

export default async function page() {
  const slider = await getSlider();
  const docs = await getDocs();
  const content = await getContent();

  return (
    <div>
      <About content={content} />
      <Carousel images={slider} />
      <Docs docs={docs} />
    </div>
  );
}
