"use client";
import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { FaCalendarAlt, FaSearchLocation } from "react-icons/fa";

const Terminarz = function ({ content }) {
  return (
    <Box
      bgGradient="linear(to-b, blue.50, blue.100)"
      py={{ base: 16 }}
      px={{ base: 4, md: 10 }}
      textAlign="center"
    >
      <VStack spacing={6} maxW="4xl" mx="auto">
        <Heading size="xl" color="blue.900">
          {content[0].content[0].value}
        </Heading>
        <Text fontSize="lg" color="gray.700">
          {content[1].content[0].value}
        </Text>

        <List spacing={6} textAlign="left" fontSize="md" w="full">
          {content[2].content.map((item, index) => (
            <ListItem key={index} pl={4}>
              <ListIcon as={FaCalendarAlt} color="blue.600" />
              <strong>{item.content[0].content[0].value}</strong>
              <br />
              <ListIcon as={FaSearchLocation} color="blue.600" />
              {item.content[0].content[1].value}
            </ListItem>
          ))}
        </List>
      </VStack>
    </Box>
  );
};

export default Terminarz;
