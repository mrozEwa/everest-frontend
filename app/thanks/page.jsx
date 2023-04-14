"use client";

import { Heading, Button, Flex } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

import { Link } from "@chakra-ui/next-js";

export default function page() {
  return (
    <Flex
      textAlign="center"
      py={10}
      px={6}
      height="100vh"
      direction="column"
      justify="center"
      align="center"
    >
      <CheckCircleIcon boxSize={"50px"} color={"green.500"} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Twoja wiadomośc została wysłana
      </Heading>
      <Link href="/">
        <Button mt="10" colorScheme="telegram">
          Przejdź do strony głównej
        </Button>
      </Link>
    </Flex>
  );
}
