"use client";
import { useEffect } from "react";
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  keyframes,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";

import { MdFacebook, MdOutlineEmail } from "react-icons/md";
import { Image } from "@chakra-ui/react";
import { FaCalendarAlt } from "react-icons/fa";
import { FaSearchLocation } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

export default function page() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  //   const slide = keyframes`
  //   0% {
  //     transform: translateY(-10%);
  //         opacity: 0;
  //   }
  //   50% {
  //     transform: translateY(2%);
  //     opacity: .6;
  //   }
  //   100% {
  //     transform: translateY(0%);
  //     opacity: 1;
  //   }
  // `;

  const sections = [
    {
      title: "Z troską o wszystkich członków rodziny",
      text: `Turnusy wytchnieniowe to czas, kiedy osoby z niepełnosprawnością – dzieci i dorośli – mają zapewnioną indywidualną opiekę lub asystę przez 6 godzin dziennie. W tym czasie biorą udział w zajęciach dostosowanych do ich potrzeb i możliwości.

Opieką otaczamy także rodzeństwo rozwijające się typowo – tak, by wszyscy czuli się zauważeni i zaopiekowani.`,
      image: "./children1.jpg", // <-- Podmień na swój obraz
    },
    {
      title: "Czas dla rodziców i opiekunów",
      text: `Podczas gdy dzieci i podopieczni są bezpieczni i radośnie spędzają czas, dorośli mogą odpocząć. Przespacerować się w lesie, poczytać książkę w hamaku, wypić kawę bez pośpiechu – albo po prostu się zatrzymać i złapać oddech.

To czas na regenerację i zadbanie o siebie – bez poczucia winy.`,
      image: "./children2.jpg",
    },
    {
      title: "Wsparcie psychologiczne",
      text: `Podczas turnusów dostępne są indywidualne konsultacje psychologiczne oraz codzienne kręgi wsparcia. Zapraszamy do nich wszystkich uczestników – rodziny, wolontariuszy i osoby z niepełnosprawnością.

To przestrzeń dzielenia się, słuchania i bycia wysłuchanym.`,
      image: "./children3.jpg",
    },
    {
      title: "Integracja i wspólna radość",
      text: `Turnusy odbywają się w pięknych, przyjaznych miejscach blisko natury. Organizujemy wycieczki, ogniska, warsztaty, pikniki, zajęcia integracyjne, a nawet masaże dla rodziców.

Chcemy, by każdy uczestnik – niezależnie od wieku i sprawności – poczuł się częścią wspierającej, życzliwej społeczności.`,
      image: "./children2.jpg",
    },
  ];

  return (
    <Box
      bg="white"
      maxW="full"
      pt={24}
      overflow="hidden"
      // animation={`${slide} .8s ease-in-out`}
    >
      <Box
        bgGradient="linear(to-t, white, blue.100)"
        py={{ base: 10 }}
        textAlign="center"
        width="full"
      >
        <VStack spacing={6}>
          <Heading
            as="h1"
            fontSize={{ base: "3xl" }}
            fontWeight="bold"
            color="blue.700"
          >
            Turnusy wytchnieniowe – przestrzeń na oddech, odpoczynek i wspólnotę
          </Heading>
          <Text
            fontSize={{ base: "xl", md: "2xl" }}
            color="blue.700"
            maxW="3xl"
          ></Text>
        </VStack>
      </Box>
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
      <Box
        bgGradient="linear(to-b, blue.50, blue.100)"
        py={{ base: 16 }}
        px={{ base: 4, md: 10 }}
        textAlign="center"
      >
        <VStack spacing={6} maxW="4xl" mx="auto">
          <Heading size="xl" color="blue.900">
            Wakacyjne turnusy wytchnieniowe 2025
          </Heading>
          <Text fontSize="lg" color="gray.700">
            Wspólnie ze Stowarzyszeniem Mudita zapraszamy rodziny osób z
            niepełnosprawnością na trzy letnie turnusy:
          </Text>

          <List spacing={6} textAlign="left" fontSize="md" w="full">
            <ListItem>
              <ListIcon as={FaCalendarAlt} color="blue.600" />
              <strong>8–12 lipca 2025</strong>
              <br />
              <ListIcon as={FaSearchLocation} color="blue.600" />
              Ośrodek Wypoczynkowy „Perkoz”, Olsztynek
            </ListItem>
            <ListItem>
              <ListIcon as={FaCalendarAlt} color="blue.600" />
              <strong>4–8 sierpnia 2025</strong>
              <br />
              <ListIcon as={FaSearchLocation} color="blue.600" />
              Ośrodek Wypoczynkowo-Turystyczny „Perła Krutyni”, Nowy Most (koło
              Rucianego-Nidy)
            </ListItem>
            <ListItem>
              <ListIcon as={FaCalendarAlt} color="blue.600" />
              <strong>27–31 sierpnia 2025</strong>
              <br />
              <ListIcon as={FaSearchLocation} color="blue.600" />
              Ośrodek wczasowo-kolonijny „Janina”, Łeba
            </ListItem>
          </List>
        </VStack>
      </Box>
      <Box
        bg="white"
        py={{ base: 16, md: 24 }}
        px={{ base: 4, md: 10 }}
        textAlign="center"
      >
        <VStack spacing={8} maxW="4xl" mx="auto">
          <Heading size="xl" color="blue.900">
            Co zapewniamy?
          </Heading>

          <List spacing={5} textAlign="left" fontSize="lg">
            <ListItem>
              <ListIcon as={FaCheck} color="blue.500" />5 dni pobytu z noclegiem
              i pełnym wyżywieniem
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheck} color="blue.500" />6 godzin dziennie
              indywidualnej opieki/asysty dla dziecka lub dorosłej osoby z
              niepełnosprawnością
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheck} color="blue.500" />
              Opiekę dla rodzeństwa bez niepełnosprawności
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheck} color="blue.500" />
              Czas dla rodziców na odpoczynek – spacery, czytanie, leżenie w
              hamaku
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheck} color="blue.500" />
              Warsztaty, ogniska, pikniki i integracyjne aktywności dla całej
              rodziny
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheck} color="blue.500" />
              Spotkania i wsparcie psychologiczne
            </ListItem>
          </List>
        </VStack>
      </Box>
      <Box
        bgGradient="linear(to-b, blue.100, blue.50)"
        py={{ base: 16, md: 24 }}
        px={{ base: 4, md: 10 }}
        textAlign="center"
      >
        <VStack spacing={8} maxW="4xl" mx="auto">
          <Heading size="xl" color="blue.900">
            Zapisy i ważne informacje
          </Heading>

          <Text fontSize="lg" color="red.600" fontWeight="bold">
            Liczba miejsc jest ograniczona!
          </Text>

          <List spacing={5} textAlign="left" fontSize="lg">
            <ListItem>
              <ListIcon as={FaInfoCircle} color="blue.600" />
              Pierwszeństwo mają rodziny, które są objęte opieką Fundacji
              Everest oraz te, które nie uczestniczyły dotąd w turnusach
              organizowanych przez Stowarzyszenie Mudita.
            </ListItem>
            <ListItem>
              <ListIcon as={FaInfoCircle} color="blue.600" />
              Kolejność zgłoszeń ma znaczenie – ale ostateczna kwalifikacja
              będzie uzależniona także od dostępnych miejsc w konkretnych
              terminach.
            </ListItem>
            <ListItem>
              <ListIcon as={FaInfoCircle} color="blue.600" />
              Zapisy ruszają <strong>24 kwietnia o godzinie 12:00</strong>
            </ListItem>
            <ListItem>
              <ListIcon as={FaInfoCircle} color="blue.600" />
              Formularz zgłoszeniowy znajdziesz na: Facebooku, Instagramie i
              stronie internetowej Stowarzyszenia Mudita oraz Fundacji Everest.
            </ListItem>
          </List>
        </VStack>
      </Box>
    </Box>
  );
}
