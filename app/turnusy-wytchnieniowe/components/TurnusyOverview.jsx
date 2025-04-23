"use client";
import React from "react";
import { Box, Flex, Heading, VStack, Text, Image } from "@chakra-ui/react";

const TurnusyOverview = function () {
  const sections = [
    {
      title: "Z troską o wszystkich członków rodziny",
      text: `Turnusy wytchnieniowe to czas, kiedy osoby z niepełnosprawnością – dzieci i dorośli – mają zapewnioną indywidualną opiekę lub asystę przez 6 godzin dziennie. W tym czasie biorą udział w zajęciach dostosowanych do ich potrzeb i możliwości.
    
    Opieką otaczamy także rodzeństwo rozwijające się typowo – tak, by wszyscy czuli się zauważeni i zaopiekowani.`,
      image: "./ewa1.webp", // <-- Podmień na swój obraz
    },
    {
      title: "Czas dla rodziców i opiekunów",
      text: `Podczas gdy dzieci i podopieczni są bezpieczni i radośnie spędzają czas, dorośli mogą odpocząć. Przespacerować się w lesie, poczytać książkę w hamaku, wypić kawę bez pośpiechu – albo po prostu się zatrzymać i złapać oddech.
    
    To czas na regenerację i zadbanie o siebie – bez poczucia winy.`,
      image: "./ewa2.webp",
    },
    {
      title: "Wsparcie psychologiczne",
      text: `Podczas turnusów dostępne są indywidualne konsultacje psychologiczne oraz codzienne kręgi wsparcia. Zapraszamy do nich wszystkich uczestników – rodziny, wolontariuszy i osoby z niepełnosprawnością.
    
    To przestrzeń dzielenia się, słuchania i bycia wysłuchanym.`,
      image: "./ewa3.webp",
    },
    {
      title: "Integracja i wspólna radość",
      text: `Turnusy odbywają się w pięknych, przyjaznych miejscach blisko natury. Organizujemy wycieczki, ogniska, warsztaty, pikniki, zajęcia integracyjne, a nawet masaże dla rodziców.
    
    Chcemy, by każdy uczestnik – niezależnie od wieku i sprawności – poczuł się częścią wspierającej, życzliwej społeczności.`,
      image: "./ewa4.webp",
    },
  ];
  return (
    <VStack
      spacing={24}
      py={20}
      px={{ base: 4 }}
      maxWidth={"8xl"}
      mx="auto"
      w={"full"}
    >
      {sections.map((section, index) => {
        const isReversed = index % 2 === 1;

        return (
          <Flex
            key={index}
            direction={{
              base: "column",
              md: isReversed ? "row-reverse" : "row",
            }}
            align="center"
            gap={10}
          >
            <Box flex={1}>
              <Image
                src={section.image}
                alt={section.title}
                borderRadius="xl"
                objectFit="cover"
                w="100%"
                maxH="400px"
              />
            </Box>
            <VStack flex={1} align="start" spacing={6}>
              <Heading size="lg" color="blue.800">
                {section.title}
              </Heading>
              <Text fontSize="lg" color="gray.700" whiteSpace="pre-line">
                {section.text}
              </Text>
            </VStack>
          </Flex>
        );
      })}
    </VStack>
  );
};

export default TurnusyOverview;
