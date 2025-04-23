"use client";
import {
  Box,
  Flex,
  Heading,
  VStack,
  Text,
  keyframes,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useEffect } from "react";

const TurnusyWrapper = ({ children }) => {
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
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            animation={`${animation} .6s ease-in-out`}
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
              Turnusy wytchnieniowe –
            </Text>
            <br />{" "}
            <Text color={"blue.400"} as={"span"}>
              przestrzeń na oddech, odpoczynek i wspólnotę
            </Text>{" "}
          </Heading>
        </VStack>
      </Box>
      {children}
      {/* </Flex> */}
    </Box>
  );
};

export default TurnusyWrapper;
