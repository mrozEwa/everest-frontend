"use client";
import React from "react";
import { SimpleGrid } from "@chakra-ui/react";

const NewsOverview = function NewsOverview({ children }) {
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing="40px">
      {children}
    </SimpleGrid>
  );
};

export default NewsOverview;
