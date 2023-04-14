import Proteges from "@/app/podopieczni/components/Proteges";
import getProteges from "@/lib/getProteges";
import Protege from "@/app/podopieczni/components/Protege";

export default async function page() {
  const proteges = await getProteges();

  return (
    <div>
      <Proteges>
        {proteges.data.map((protege, index) => (
          <Protege protege={protege} key={index} />
        ))}
      </Proteges>
    </div>
  );
}
