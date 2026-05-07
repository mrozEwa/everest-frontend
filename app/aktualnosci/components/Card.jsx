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

function getYoutubeThumbnail(url) {
  const match = url?.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? `https://img.youtube.com/vi/${match[1]}/maxresdefault.jpg` : null;
}

function CardComponent({ newsItem }) {
  const router = useRouter();

  const imageSrc = newsItem.fields.image?.fields.file.url
    ?? getYoutubeThumbnail(newsItem.fields.videoUrl);

  return (
    <Card maxW="sm">
      <CardBody>
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={newsItem.fields.tytul}
            borderRadius="lg"
          />
        )}
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
