"use client";
import React, { useState } from "react";
import {
  Box,
  Image,
  SimpleGrid,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  IconButton,
  Flex,
  Container,
} from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

export default function Gallery({ images }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openModalAt = (index) => {
    setSelectedIndex(index);
    onOpen();
  };

  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % images.data.length);
  };

  const prevImage = () => {
    setSelectedIndex((prev) => (prev - 1 + images.data.length) % images.data.length);
  };

  const selectedImage =
    selectedIndex !== null ? images.data[selectedIndex].fields.image.fields : null;

  return (
    <Container centerContent maxW="8xl">
      <SimpleGrid columns={{ base: 2, md: 3 }} spacing={3} py="12" w="full">
        {images.data.map((img, index) => (
          <Box
            key={index}
            cursor="pointer"
            onClick={() => openModalAt(index)}
          >
            <Image
              src={`https:${img.fields.image.fields.file.url}`}
              alt={img.fields.image.fields.title}
              objectFit="cover"
              borderRadius="xl"
              boxShadow="md"
              height="250px"
              width="100%"
              transition="transform 0.3s ease"
              _hover={{ transform: "scale(1.05)", zIndex: 1 }}
            />
          </Box>
        ))}
      </SimpleGrid>

      <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered>
        <ModalOverlay />
        <ModalContent bg="transparent" position="relative" boxShadow="none">
          <ModalCloseButton color="gray.700" _hover={{ bg: "gray.300" }} />

          {selectedImage && (
            <ModalBody p={4} textAlign="center">
              <Flex align="center" justify="center" position="relative">
                <IconButton
                  icon={<ArrowBackIcon w={6} h={6} />}
                  onClick={prevImage}
                  position="absolute"
                  left="0"
                  top="50%"
                  transform="translateY(-50%)"
                  zIndex="1"
                  color="gray.700"
                  _hover={{ bg: "gray.200" }}
                  variant="ghost"
                  aria-label="Previous image"
                />

                <Image
                  src={`https:${selectedImage.file.url}`}
                  alt={selectedImage.title}
                  mx="auto"
                  maxHeight="80vh"
                  borderRadius="md"
                />

                <IconButton
                  icon={<ArrowForwardIcon w={6} h={6} />}
                  onClick={nextImage}
                  position="absolute"
                  right="0"
                  top="50%"
                  transform="translateY(-50%)"
                  zIndex="1"
                  color="gray.700"
                  _hover={{ bg: "gray.200" }}
                  variant="ghost"
                  aria-label="Next image"
                />
              </Flex>
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </Container>
  );
}