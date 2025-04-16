"use client";
import { Box, Flex, Heading, VStack, Text } from "@chakra-ui/react";
import { useEffect } from "react";

const TurnusyWrapper = ({ children }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <Box bg="white" maxW="full" pt={24} overflow="hidden">
      {/* <Flex p={8} flex={1} align={"center"} justify={"center"}> */}
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
      {children}
      {/* </Flex> */}
    </Box>
  );
};

export default TurnusyWrapper;
