import getSlider from "@/lib/getSlider";
import getDocs from "@/lib/getDocs";
import getContent from "@/lib/getContent";
import getStatus from "@/lib/getStatus";

export const revalidate = 60;

import Gallery from "@/app/fundacja/components/Gallery";
import About from "@/app/fundacja/components/About";
import Docs from "@/app/fundacja/components/Docs";

export default async function page() {
  const slider = await getSlider();
  const docs = await getDocs();
  const content = await getContent();
  const status = await getStatus();

  console.log(status.data[0].fields.document.fields.file.url);
  return (
    <div>
      <About content={content} />
      <Gallery images={slider} />
      <Docs docs={docs} status={status} />
    </div>
  );
}
