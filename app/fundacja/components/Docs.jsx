"use client";
import {
  Button,
  Container,
  Text,
  Flex,
  VStack,
  Divider,
} from "@chakra-ui/react";
import { BsFiletypePdf } from "react-icons/bs";

function Docs({ docs, status }) {
  return (
    <Container my={10}>
      <VStack>
        <Text fontSize={"lg"} fontWeight={600}>
          Do pobrania:
        </Text>
        <Divider />
        <Flex
          direction={{ base: "column", md: "row" }}
          pt={6}
          justify={"space-around"}
          gap={4}
          flex={1}
          wrap="wrap"
        >
          <Button
            as="a"
            size="lg"
            leftIcon={<BsFiletypePdf />}
            colorScheme="gray"
            variant="solid"
            href={status.data[0].fields.document.fields.file.url}
            target="_blank"
          >
            Statut fundacji
          </Button>
          {docs.data.map((doc, index) => (
            <Button
              key={index}
              as="a"
              size="lg"
              leftIcon={<BsFiletypePdf />}
              colorScheme="gray"
              variant="solid"
              href={doc.fields.dokument.fields.file.url}
              target="_blank"
            >
              Sprawozdanie {doc.fields.name}
            </Button>
          ))}
        </Flex>
      </VStack>
    </Container>
  );
}

export default Docs;
