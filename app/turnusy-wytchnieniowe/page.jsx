import getContent from "@/lib/getContent";
import TurnusyWrapper from "./components/TurnusyWrapper";
import TurnusyOverview from "./components/TurnusyOverview";
import Terminarz from "./components/Terminarz";
import Zapewniamy from "./components/Zapewniamy";
import Zapisy from "./components/Zapisy";

export default async function page() {
  const content = await getContent();

  return (
    <div>
      <TurnusyWrapper>
        <TurnusyOverview />
        <Terminarz content={content.data[3].fields.tresc.content} />
        <Zapewniamy />
        <Zapisy content={content.data[4].fields.tresc.content} />
      </TurnusyWrapper>
    </div>
  );
}
