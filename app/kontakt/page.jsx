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
} from "@chakra-ui/react";
import { MdFacebook, MdOutlineEmail } from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";

export default function page() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const slide = keyframes`
  0% {
    transform: translateY(-10%);
        opacity: 0;
  }
  50% {
    transform: translateY(2%);
    opacity: .6;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
`;

  return (
    <Container
      bg="white"
      maxW="full"
      pt={24}
      centerContent
      overflow="hidden"
      animation={`${slide} .8s ease-in-out`}
    >
      <Flex pt={3}>
        <Box
          bg="blue.800"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Kontakt</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                    Masz pytanie, napisz do nas
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={6} alignItems="flex-start">
                      <Text fontSize={"md"}>Fundacja Everest</Text>
                      <Text fontSize={"md"}>ul. Wielka 67</Text>
                      <Text fontSize={"md"}>53-340 Wrocław</Text>
                      <Text fontSize={"md"}>NIP: 8943043429</Text>
                      <Text fontSize={"md"}>ewa@fundacjaeverest.pl</Text>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="blue.800">
                    <VStack spacing={5}>
                      <form
                        action="https://formsubmit.co/ewa@fundacjaeverest.pl"
                        method="POST"
                      >
                        <input
                          type="hidden"
                          name="_captcha"
                          value="false"
                        ></input>
                        <input
                          type="hidden"
                          name="_next"
                          value="http://localhost:3000/thanks"
                        ></input>
                        <input
                          type="hidden"
                          name="_subject"
                          value="Nowa wiadomość"
                        ></input>
                        <input
                          type="hidden"
                          name="_template"
                          value="table"
                        ></input>
                        <FormControl id="name">
                          <FormLabel>Twoje Imię</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input name="Imię" type="text" size="md" required />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="mail">
                          <FormLabel mt="4">Mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />}
                            />
                            <Input name="Mail" type="text" size="md" required />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="message">
                          <FormLabel mt="4">Wiadomość</FormLabel>
                          <Textarea
                            name="Wiadomość"
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: "gray.300",
                            }}
                            placeholder="wiadomość"
                            required
                          />
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button
                            type="submit"
                            variant="telegram"
                            bg="blue.600"
                            color="white"
                            _hover={{ bg: "blue.500" }}
                            mt="4"
                          >
                            Wyślij
                          </Button>
                        </FormControl>
                      </form>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
