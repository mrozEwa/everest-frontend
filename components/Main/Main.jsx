"use client";

import {
  Box,
  Text,
  Container,
  VStack,
  StackDivider,
  Heading,
} from "@chakra-ui/react";
import Tabs from "./Tabs";

function Main() {
  return (
    <Box>
      <Box bg="green.600" py={12} boxShadow="md">
        <Container maxW="5xl">
          <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4}>
            <Text color="white" fontSize="lg" lineHeight={2}>
              <b> Fundacja Everest </b> powstała w 2012 roku. Inspiracją do jej
              utworzenia była nasza pasja – bieganie. Zastanawialiśmy się jak
              można pomóc innym wykorzystując nasze zamiłowanie do sportu i
              biegania. Zainspirowani setkami przebiegniętych kilometrów
              powołaliśmy do życia pomysł organizacji charytatywnego{" "}
              <Text
                as="a"
                href="https://biegfirmowy.pl/"
                textDecoration={"underline"}
              >
                Biegu Firmowego
              </Text>
              .
            </Text>
            <Text color="white" fontSize="lg" lineHeight={2}>
              <b>1 743 095 zł </b> to kwota, którą udało nam się przekazać na
              leczenie i rehabilitację podopiecznych Fundacji Everest przez 10
              edycji Biegu Firmowego.
            </Text>
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
