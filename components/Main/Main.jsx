// "use client";

// import { Box, Text, Container, VStack, StackDivider } from "@chakra-ui/react";
// import Tabs from "./Tabs";

// function Main({ content }) {
//   return (
//     <Box>
//       <Box bg="green.600" py={12} boxShadow="md">
//         <Container maxW="5xl">
//           <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4}>
//             <Box color="white" fontSize="lg" lineHeight={2}>
//               <b>{content.data[0].fields.tresc.content[0].content[0].value}</b>
//               {content.data[0].fields.tresc.content[0].content[1].value}
//               <Text
//                 as="a"
//                 href="https://biegfirmowy.pl/"
//                 textDecoration={"underline"}
//               >
//                 {
//                   content.data[0].fields.tresc.content[0].content[2].content[0]
//                     .value
//                 }
//               </Text>
//               <br />

//               {content.data[0].fields.tresc.content[1].content[0].value}
//               <Text
//                 as="a"
//                 href={
//                   content.data[0].fields.tresc.content[1].content[1].data.uri
//                 }
//                 textDecoration={"underline"}
//               >
//                 {
//                   content.data[0].fields.tresc.content[1].content[1].content[0]
//                     .value
//                 }
//               </Text>
//               {content.data[0].fields.tresc.content[1].content[2].value}
//             </Box>

//             <Text color="white" fontSize="lg" lineHeight={2}>
//               <b>{content.data[1].fields.tresc.content[0].content[0].value} </b>
//               {content.data[1].fields.tresc.content[0].content[1].value}
//             </Text>
//           </VStack>
//         </Container>
//       </Box>
//       <Box pt="8">
//         <Tabs />
//       </Box>
//     </Box>
//   );
// }

// export default Main;

"use client";

import { Box, Text, Container, VStack, StackDivider } from "@chakra-ui/react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Tabs from "./Tabs";
import SliderComponent from "./Slider";

function Main({ content, news }) {
  const blok1 = content.data[0].fields.tresc;
  const blok2 = content.data[1].fields.tresc;

  return (
    <Box>
      <Box bg="green.600" py={12} boxShadow="md">
        <Container maxW="5xl">
          <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4}>
            <Box color="white" fontSize="lg" lineHeight={2}>
              {documentToReactComponents(blok1)}
            </Box>

            <Box color="white" fontSize="lg" lineHeight={2}>
              {documentToReactComponents(blok2)}
            </Box>
          </VStack>
        </Container>
      </Box>

      <Box pt="8">
        <Box pb="10">
          <SliderComponent news={news} />
        </Box>
        <Tabs />
      </Box>
    </Box>
  );
}

export default Main;
