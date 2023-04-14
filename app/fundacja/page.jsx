// "use client";

import getSlider from "@/lib/getSlider";
import getDocs from "@/lib/getDocs";

import Carousel from "@/app/fundacja/components/Carousel";
import About from "@/app/fundacja/components/About";
import Docs from "@/app/fundacja/components/Docs";

export default async function page() {
  const slider = await getSlider();
  const docs = await getDocs();

  return (
    <div>
      <About />
      <Carousel images={slider} />
      <Docs docs={docs} />
    </div>
  );
}
