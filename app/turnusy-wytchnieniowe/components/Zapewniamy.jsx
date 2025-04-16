"use client";
import React from "react";
import {
  Box,
  Heading,
  VStack,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";

const Zapewniamy = function () {
  return (
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
            <ListIcon as={FaCheck} color="blue.500" />5 dni pobytu z noclegiem i
            pełnym wyżywieniem
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
  );
};

export default Zapewniamy;
