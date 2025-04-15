import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Container,
  Text,
  Divider,
  Heading,
  Flex,
  Grid,
  useBreakpointValue,
  keyframes,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { BiDonateHeart } from "react-icons/bi";
import { BiRun } from "react-icons/bi";
import { FaHandsHelping } from "react-icons/fa";
import { FaHandPointRight } from "react-icons/fa";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * TabsComponent renders a tabbed interface with two main options: "Pomagam" (I help) and "Potrzebuję pomocy" (I need help).
 * It uses Chakra UI components to create a responsive layout that adapts based on breakpoints.
 * The component includes animations, icons, and styled elements to enhance user interaction.
 * 
 * - "Pomagam" tab offers options to donate, run in charity events, or volunteer at a respite camp.
 * - "Potrzebuję pomocy" tab provides information for individuals in need to contact the foundation for assistance.
 * 

/*******  3af65c81-3670-4bf4-bc6c-0e3472dbbce6  *******/ function TabsComponent() {
  const beforeContent = useBreakpointValue({
    base: "none",
    xl: "block",
  });

  const gridTemplateColumns = useBreakpointValue({
    base: "1fr",
    xl: "43fr 50fr",
  });

  const slideIn = keyframes`
  0% {
    transform: translateX(1%);
    
    opacity: 0;
  }
  50% {

    transform: translateX(-1%);

  }

  100% {
    transform: translateX(0%);
    opacity: 1;
  }
`;

  return (
    <Tabs align="center" variant="enclosed" pt={8}>
      <TabList pb="1px">
        <Tab fontWeight="600" _selected={{ color: "blue.50", bg: "blue.700" }}>
          Pomagam
        </Tab>
        <Tab fontWeight="600" _selected={{ color: "blue.50", bg: "blue.700" }}>
          {" "}
          Potrzebuję pomocy
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel p={0} bg="blue.700" animation={`${slideIn} .6s ease-in-out`}>
          <Grid gridTemplateColumns={gridTemplateColumns}>
            <Container maxW="5xl" color="blue.50" py={4} px={8}>
              <Flex align="end">
                <Heading
                  as="h2"
                  fontSize="22px "
                  fontWeight="700"
                  mt="2"
                  pb="2"
                  textAlign="left"
                  mr="20px"
                >
                  Możesz wpłacić darowiznę
                </Heading>
                <Box display={{ base: "none", md: "block" }}>
                  <BiDonateHeart size="40px" />
                </Box>
              </Flex>

              <Divider mb={2} />
              <Box fontSize="lg" lineHeight={1.7} textAlign="left">
                <Text>Fundacja Everest, ul. Wielka 67, 53-340 Wrocław</Text>
                <Text fontWeight="600">41 1140 1140 0000 3822 7400 1006</Text>
                <Text>
                  Z dopiskiem: na leczenie i rehabilitację podopiecznego (tutaj
                  proszę wpisać imię i nazwisko).
                </Text>
                <Text>
                  Wpłaty bez wskazania podopiecznego będą przeznaczone
                  najbardziej potrzebującym dzieciom.
                </Text>
              </Box>

              <Flex align="end">
                <Heading
                  as="h3"
                  fontSize="22px "
                  fontWeight="700"
                  mt="8"
                  pb="2"
                  textAlign="left"
                  mr="20px"
                >
                  Możesz biec razem z nami
                </Heading>
                <Box display={{ base: "none", md: "block" }}>
                  <BiRun size="40px" />
                </Box>
              </Flex>
              <Divider mb={2} />
              <Box fontSize="lg" lineHeight={1.7} textAlign="left">
                <Text>
                  Łączy nas wspólny cel - pomoc dzieciom chorym i
                  niepełnosprawnym. Biegnij i zacznij pomagać razem z tysiącem
                  innych firm!
                </Text>
              </Box>
              <Flex align="center" justify="start">
                <Heading
                  as="h3"
                  fontSize="22px"
                  fontWeight="700"
                  mt="8"
                  pb="2"
                  textAlign="left"
                  mr="20px"
                >
                  Możesz zostać wolontariuszem na obozie wytchnieniowym
                </Heading>
                <Box display={{ base: "none", md: "block" }}>
                  <FaHandsHelping size="38px" />
                </Box>
              </Flex>
              <Divider mb={0} />
              <Box fontSize="lg" lineHeight={1.7} textAlign="left">
                <Text>
                  Chcesz spędzić 5 dni w wyjątkowym miejscu, pomagając dzieciom
                  lub dorosłym z niepełnosprawnością? Szukamy osób, które przez
                  6 godzin dziennie będą towarzyszyć uczestnikom turnusu,
                  wspierać ich w codziennych aktywnościach i tworzyć razem z
                  nami atmosferę akceptacji i radości.
                </Text>

                <Flex align="center" gap="2" mt="2">
                  <FaHandPointRight size="26px" />
                  <Link
                    href="https://docs.google.com/forms/d/e/1FAIpQLSec4AoAjCwynf77AGoQjJpCKKfGTzmnA2U4ULNSyuuF90pH4g/viewform"
                    isExternal
                    textDecoration={"underline"}
                  >
                    ZGŁOŚ SIĘ
                  </Link>
                </Flex>
              </Box>
            </Container>
            <Box
              overflow={"hidden"}
              w="100%"
              position={"relative"}
              _before={{
                content: '""',
                position: "absolute",
                left: "-130px",
                top: "50%",
                display: beforeContent,
                transform: "translateY(-50%) rotate(20deg)",
                width: "250px",
                height: "900px",
                backgroundColor: "blue.700",
              }}
              backgroundImage={"url(run.jpg)"}
              backgroundSize={"cover"}
              backgroundPosition={"center center"}
            ></Box>
          </Grid>
        </TabPanel>
        <TabPanel p={0} bg="blue.700" animation={`${slideIn} .6s ease-in-out`}>
          <Grid gridTemplateColumns={gridTemplateColumns}>
            <Container maxW="5xl" color="blue.50" py={12} px={8}>
              <Flex align="center">
                <Text
                  fontSize="22px "
                  fontWeight="700"
                  mb="4"
                  textAlign="left"
                  mr="20px"
                >
                  Jesteś w ciężkiej sytuacji i potrzebujesz naszej pomocy?
                </Text>
              </Flex>

              <Divider mb={8} />
              <Box fontSize="lg" lineHeight={1.7} textAlign="left">
                <Text>
                  Fundacja pomaga dzieciom chorym, niepełnosprawnym, znajdującym
                  się w trudnej sytuacji życiowej. Każdego roku przyjmujemy 4
                  podopiecznych, którym finansujemy leczenie, rehabilitację oraz
                  potrzebny sprzęt rehabilitacyjny.
                </Text>
                <Text fontWeight="600" pt="10">
                  Jeśli również potrzebujesz pomocy – napisz do nas.
                </Text>
                <UnorderedList>
                  <Text pt="4">Prosimy o przesłanie:</Text>
                  <ListItem>Opisu sytuacji zdrowotnej i rodzinnej</ListItem>
                  <ListItem>Informacji jaka pomoc jest potrzebna</ListItem>
                  <ListItem>Zdjęcia dziecka</ListItem>
                  <ListItem>
                    Dokumentacji potwierdzającej niepełnosprawność dziecka lub
                    zaświadczenie lekarskie o stanie zdrowia
                  </ListItem>
                </UnorderedList>
                <Text pt="8">
                  Napisz do nas: <b>ewa@fundacjaeverest.pl</b>
                </Text>
              </Box>
            </Container>
            <Box
              overflow={"hidden"}
              w="100%"
              position={"relative"}
              _before={{
                content: '""',
                position: "absolute",
                left: "-120px",
                top: "50%",
                display: beforeContent,
                transform: "translateY(-50%) rotate(20deg)",
                width: "250px",
                height: "900px",
                backgroundColor: "blue.700",
              }}
              backgroundImage={"url(woman.jpg)"}
              backgroundSize={"cover"}
              backgroundPosition={"center center"}
            ></Box>
          </Grid>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default TabsComponent;
