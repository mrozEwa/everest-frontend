"use client";
import { useRouter } from "next/navigation";
import React from "react";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  Box,
  Button,
  CardFooter,
} from "@chakra-ui/react";

function CardComponent({ newsItem }) {
  const router = useRouter();

  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={newsItem.fields.image.fields.file.url}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{newsItem.fields.tytul}</Heading>
          <Text>{newsItem.fields.opis}</Text>
        </Stack>
      </CardBody>
      <Box display="flex" justifyContent="center">
        <Divider width={"90%"} />
      </Box>
      <CardFooter>
        <Button
          width="100%"
          variant="outline"
          colorScheme="blue"
          onClick={() => router.push(`/aktualnosci/${newsItem.fields.slug}`)}
        >
          Szczegóły
        </Button>
      </CardFooter>
    </Card>
  );
}

export default CardComponent;
