"use client";
import React from "react";
import Slider from "react-slick";
import {
  Box,
  Image,
  Heading,
  LinkBox,
  LinkOverlay,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";

function SliderComponent({ news }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("pl-PL", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  }

  return (
    <Box maxW="container.xl" mx="auto" mt={10}>
      <Slider {...settings}>
        {news?.data?.map((item, idx) => {
          const { tytul, image, slug } = item.fields;
          const imageUrl = image?.fields?.file?.url
            ? `https:${image.fields.file.url}`
            : "/placeholder.jpg";

          return (
            <Box key={idx} p={4} pb="10">
              <LinkBox
                as="article"
                bg="gray.100"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="md"
                _hover={{ boxShadow: "sm", transform: "scale(1.02)" }}
                transition="linear 0.2s "
                h="100%"
                cursor="pointer"
              >
                <VStack spacing={3} align="start">
                  <Image
                    src={imageUrl}
                    alt={tytul}
                    objectFit="cover"
                    w="100%"
                    h="250px"
                  />
                  <Box fontSize="sm" color="gray.600" px={6}>
                    {formatDate(item.fields.data)}
                  </Box>

                  <Box pb={6} px={6}>
                    <Heading as="h3" size="md" noOfLines={2}>
                      <LinkOverlay
                        as={NextLink}
                        href={`/aktualnosci/${slug}`}
                        textDecoration="none"
                        _hover={{ textDecoration: "none" }}
                      >
                        {tytul}
                      </LinkOverlay>
                    </Heading>
                  </Box>
                </VStack>
              </LinkBox>
            </Box>
          );
        })}
      </Slider>
    </Box>
  );
}

export default SliderComponent;
