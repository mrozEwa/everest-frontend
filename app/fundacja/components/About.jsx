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
} from "@chakra-ui/react";

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
  return (
    <Box>
      <Flex pt="120px" w={"full"} justify={"center"}>
        <Container centerContent maxW="8xl">
          <Container centerContent maxW="5xl">
            <Heading
              bgGradient="linear(to-r, purple.800, blue.500)"
              bgClip="text"
              fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
              fontWeight="extrabold"
              pb={8}
            >
              Misja i cele
            </Heading>
            <VStack
              divider={<StackDivider borderColor="gray.200" />}
              spacing={4}
              align="stretch"
              color="blue.700"
            >
              <Text>
                Fundacja Everest powstała w 2012 roku. Inspiracją do jej
                utworzenia była nasza pasja – bieganie. Zastanawialiśmy się jak
                można pomóc innym wykorzystując nasze zamiłowanie do sportu i
                biegania. Zainspirowani setkami przebiegniętych kilometrów
                powołaliśmy do życia pomysł organizacji charytatywnego biegu dla
                firm. Od początku praca przy tworzeniu tego eventu dawała nam
                dużą radość. Naszym motorem napędowym była Alicja – pierwsza
                podopieczna Fundacji, dziewczynka dla której zawodnicy pobiegli
                w 1. Biegu Firmowym. To myśl o możliwościach jakie dadzą Ali
                zebrane pieniądze napędzała nas do działania. Ali groziła wtedy
                amputacja nóżki. Dzięki przekazanym Alicji środkom mogła
                pojechać do Stanów Zjednoczonych na operację i… udało się! Nóżka
                została uratowana, a Alunia dzielnie ćwiczy, aby kiedyś pobiec w
                naszym biegu.
              </Text>
              <Text>
                {content.data[2].fields.tresc.content[0].content[0].value}
              </Text>
              <Text>
                Każdego roku wybieramy podopiecznych Biegu Firmowego. Nasi
                podopieczni to dzieci chore, niepełnosprawne, znajdujące się w
                trudnej sytuacji życiowej, których jedyną szansą na sprawniejsze
                życie jest kosztowna, intensywna rehabilitacja i leczenie. Co
                roku fundujemy naszym beneficjentom terapię, która jest
                najbardziej przystosowana do ich potrzeb. Staramy się, aby
                rodzaj rehabilitacji i sprzęt były odpowiednio dobrane i pomogły
                im zrobić krok w stronę większej sprawności i samodzielności.
                Poprawa sprawności naszych podopiecznych jest dla nas ogromną
                radością. Chcemy być stale obecni w ich życiu, wpieramy ich, a
                oni dają nam siłę do podejmowania kolejnych wyzwań.
              </Text>
              <Text>
                Fundacja w 2013 r. zorganizowała także Bieg dla kobiet – w
                pierwszej edycji wzięło w nim udział 500 pań. Z imprezą wiązała
                się kampania na rzecz profilaktyki raka piersi i raka szyjki
                macicy. Podczas biegu Panie mogły dowiedzieć się więcej o
                samobadaniu piersi oraz porozmawiać z amazonkami, które chorobę
                mają za sobą.
              </Text>
            </VStack>
          </Container>
          <Container centerContent maxW="8xl">
            <VStack>
              <Heading
                bgGradient="linear(to-l, purple.800, blue.500)"
                bgClip="text"
                fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
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
