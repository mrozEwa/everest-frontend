"use client";
import { useEffect } from "react";
import {
  Container,
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  StackDivider,
  Card,
  CardHeader,
  CardBody,
  Stack,
  keyframes,
  useBreakpointValue,
} from "@chakra-ui/react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

const Team = [
  {
    name: "Ewa",
    surname: "Mróz",
    position: "Prezes Fundacji",
    description:
      "Z Fundacją związana jest od początku. Wprawna organizatorka, która uwielbia wyzwania w postaci imprezy dla kilku tysięcy osób. Kocha dzieci – wszystkie zdrowe i chore. Stara się być stale blisko problemów podopiecznych i ich rodzin. Prywatnie mama dwóch córek, narodziny pierwszej z nich były inspiracją do przebiegnięcia pierwszego maratonu.",
  },
  {
    name: "Wojciech",
    surname: "Mróz",
    position: "Członek Zarządu",
    description:
      "Przedsiębiorca, fundator, pomysłodawca Biegu Firmowego. Nic by się nie wydarzyło gdyby nie wizja – Wojtek ją ma i nie boi się wcielać jej w życie. Dba o rozwój Fundacji, generuje nowe pomysły i z zapałem je realizuje. Ciągle w biegu dosłownie i w przenośni. Prywatnie miłośnik długodystansowych biegów, triathlonów i swoich córek.",
  },
  {
    name: "Marcin",
    surname: "Łuczyn",
    position: "Członek Zarządu",
    description:
      "Przedsiębiorca, fundator, pomysłodawca Biegu Firmowego. Mieszkając w Niemczech wielokrotnie był świadkiem odbywających się tam wielkich ulicznych biegów dla firm. Jego entuzjazm do realizacji podobnych biegów w Polsce był punktem zapalnym dla powołania Fundacji i zorganizowania Biegu Firmowego. Prywatnie triathlonista, biegacz, podróżnik i tato.",
  },
];

export default function About({ content }) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const animation = keyframes`
    0% {
      transform: translateY(-10%);

      opacity: 0;
    }
    50% {

      transform: translateY(3%);

    }

    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  `;

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <Text mb={4} fontSize="md" color="blue.700" lineHeight="tall">
          {children}
        </Text>
      ),
    },
  };

  const fundacjaContent = content.data.find(item =>
    item.fields.title?.toLowerCase() === 'fundacja'
  );

  console.log('Content data:', content.data);
  console.log('Fundacja content:', fundacjaContent);
  return (
    <Box>
      <Flex pt="120px" w={"full"} justify={"center"}>
        <Container centerContent maxW="8xl">
          <Container centerContent maxW="5xl">
            <Heading
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              animation={`${animation} .6s ease-in-out`}
              pb={8}
            >
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: useBreakpointValue({ base: "20%", md: "30%" }),
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "blue.400",
                  zIndex: -1,
                }}
              >
                Misja i cele
              </Text>
            </Heading>
            <Box>
              {fundacjaContent ? (
                documentToReactComponents(fundacjaContent.fields.tresc, options)
              ) : (
                content.data[0] && documentToReactComponents(content.data[0].fields.tresc, options)
              )}
            </Box>
          </Container>
          <Container centerContent maxW="8xl">
            <VStack>
              <Heading
                bgGradient="linear(to-l, purple.800, blue.500)"
                bgClip="text"
                fontSize={{ base: "xl", sm: "2xl", md: "4xl" }}
                fontWeight="extrabold"
                py={10}
              >
                Nasz Zespół
              </Heading>
              <Flex gap={4} direction={{ base: "column", lg: "row" }}>
                {Team.map((item) => {
                  return (
                    <Card key={item.name}>
                      <CardHeader>
                        <Heading size="md">
                          {item.name}
                          {" " + item.surname}
                        </Heading>
                      </CardHeader>

                      <CardBody>
                        <Stack divider={<StackDivider />} spacing="4">
                          <Box>
                            <Heading size="xs" textTransform="uppercase">
                              {item.position}
                            </Heading>
                            <Text pt="2" fontSize="md">
                              {item.description}
                            </Text>
                          </Box>
                        </Stack>
                      </CardBody>
                    </Card>
                  );
                })}
              </Flex>
            </VStack>
          </Container>
        </Container>
      </Flex>
    </Box>
  );
}
