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
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const selectedImage =
    selectedIndex !== null ? images[selectedIndex].fields : null;

  return (
    <>
      <SimpleGrid columns={{ base: 2, md: 3 }} spacing={4} pt="6">
        {images.map((img, index) => (
          <Box
            key={index}
            cursor="pointer"
            onClick={() => openModalAt(index)}
            textAlign="center"
          >
            <Image
              src={`https:${img.fields.file.url}`}
              alt={img.fields.title}
              objectFit="cover"
              borderRadius="xl"
              boxShadow="md"
              height="300px"
              width="100%"
              transition="transform 0.3s ease"
              _hover={{ transform: "scale(1.05)", zIndex: 1 }}
            />
            <Text mt={2} fontSize="sm">
              {img.fields.title}
            </Text>
          </Box>
        ))}
      </SimpleGrid>

      <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered>
        <ModalOverlay />
        <ModalContent bg="gray.100" position="relative">
          <ModalCloseButton color="gray.700" _hover={{ bg: "gray.300" }} />

          {selectedImage && (
            <ModalBody p={4} textAlign="center">
              <Text
                mb={4}
                fontSize={{ base: "lg", md: "2xl" }}
                fontWeight="bold"
                color="gray.800"
              >
                {selectedImage.title}
              </Text>

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
    </>
  );
}
