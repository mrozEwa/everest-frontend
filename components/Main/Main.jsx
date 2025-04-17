"use client";

import { Box, Text, Container, VStack, StackDivider } from "@chakra-ui/react";
import Tabs from "./Tabs";

function Main({ content }) {
  // console.log(content.data[0].fields.tresc.content[1].content[2].value);
  return (
    <Box>
      <Box bg="green.600" py={12} boxShadow="md">
        <Container maxW="5xl">
          <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4}>
            <Text color="white" fontSize="lg" lineHeight={2}>
              <b>{content.data[0].fields.tresc.content[0].content[0].value}</b>
              {content.data[0].fields.tresc.content[0].content[1].value}
              <Text
                as="a"
                href="https://biegfirmowy.pl/"
                textDecoration={"underline"}
              >
                {
                  content.data[0].fields.tresc.content[0].content[2].content[0]
                    .value
                }
              </Text>
              <br />
              <Text>
                W 2025 roku Fundacja Everest – we współpracy ze Stowarzyszeniem
                Mudita, zorganizuje turnusy wytchnieniowe dla rodzin dzieci z
                niepełnosprawnościami. Wiemy, jak bardzo potrzebny jest czas na
                oddech, chwilę spokoju, regeneracji, rozmowy, sen albo po prostu
                ciszę. Właśnie to chcemy Wam podarować.
              </Text>
              {/* {content.data[0].fields.tresc.content[1].content[0].value} */}
              {/* <Text
                as="a"
                href={
                  content.data[0].fields.tresc.content[1].content[1].data.uri
                }
                textDecoration={"underline"}
              >
                {
                  content.data[0].fields.tresc.content[1].content[1].content[0]
                    .value
                }
              </Text> */}
              {/* {content.data[0].fields.tresc.content[1].content[2].value} */}
            </Text>

            {/* <Text color="white" fontSize="lg" lineHeight={2}>
              <b>{content.data[1].fields.tresc.content[0].content[0].value} </b>
              {content.data[1].fields.tresc.content[0].content[1].value}
            </Text> */}
          </VStack>
        </Container>
      </Box>
      <Box pt="8">
        <Tabs />
      </Box>
    </Box>
  );
}

export default Main;
