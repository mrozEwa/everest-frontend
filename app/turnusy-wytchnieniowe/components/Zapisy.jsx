"use client";
import React from "react";
import {
  Box,
  Button,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaInfoCircle } from "react-icons/fa";

const Zapisy = function ({ content }) {
  console.log(content);
  return (
    <Box
      bgGradient="linear(to-b, blue.100, blue.50)"
      py={{ base: 16, md: 24 }}
      px={{ base: 4, md: 10 }}
      textAlign="center"
    >
      <VStack spacing={8} maxW="4xl" mx="auto">
        <Heading size="xl" color="blue.900">
          {content[0].content[0].value}
        </Heading>

        <Text fontSize="lg" color="red.600" fontWeight="bold">
          {content[1].content[0].value}
        </Text>

        <List spacing={5} textAlign="left" fontSize="lg">
          {content[2].content.map((item, index) => (
            <ListItem key={index} pl={4} marginY={4}>
              <ListIcon as={FaInfoCircle} color="blue.600" />
              {item.content[0].content[0].value}
            </ListItem>
          ))}
        </List>
        <Button
          colorScheme="teal"
          size="lg"
          letterSpacing={1}
          as="a"
          href={content[3].content[1].data.uri}
        >
          ZAPISZ SIĘ NA TURNUS
        </Button>
      </VStack>
    </Box>
  );
};

export default Zapisy;
