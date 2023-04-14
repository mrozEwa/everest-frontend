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
  Flex,
  Grid,
  useBreakpointValue,
  keyframes,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { BiDonateHeart } from "react-icons/bi";
import { BiRun } from "react-icons/bi";

function TabsComponent() {
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
            <Container maxW="5xl" color="blue.50" py={8} px={8}>
              <Flex align="start">
                <Text
                  fontSize="24px"
                  fontWeight="700"
                  mb="4"
                  textAlign="left"
                  mr="20px"
                >
                  Możesz wpłacić darowiznę
                </Text>
                <BiDonateHeart size="45px" />
              </Flex>

              <Divider mb={8} />
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

              <Flex align="center">
                <Text
                  fontSize="24px"
                  fontWeight="700"
                  mt="8"
                  pb="6"
                  textAlign="left"
                  mr="20px"
                >
                  Możesz biec razem z nami
                </Text>
                <BiRun size="45px" />
              </Flex>
              <Divider mb={8} />
              <Box fontSize="lg" lineHeight={1.7} textAlign="left">
                <Text>
                  Łączy nas wspólny cel. Bieg Firmowy to przede wszystkim pomoc
                  dzieciom chorym i niepełnosprawnym. Poprzez wydarzenie, a w
                  tym roku wirtualną formę imprezy biegowej, promujemy team
                  building, pomoc małym bohaterom i zdrowy tryb życia.
                </Text>
                <Text>
                  Myślisz o tym, jak zaktywizować pracowników Twojej firmy?
                </Text>
                <Text>
                  Biegnij i zacznij pomagać razem z tysiącem innych firm!
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
                  fontSize="24px"
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
