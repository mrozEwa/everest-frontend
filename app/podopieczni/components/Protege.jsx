"use client";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
  Divider,
  Button,
  Flex,
} from "@chakra-ui/react";

import { FaHeart } from "react-icons/fa";

import Image from "next/image";

function Protege({ protege }) {
  return (
    <Card maxW="xl" color="gray.600" py={10}>
      <CardBody>
        <Flex align="center" direction="column">
          <Image
            src={`https:${protege.fields.image.fields.file.url}`}
            alt={protege.fields.name + " " + protege.fields.surname}
            width={240}
            height={240}
            style={{ borderRadius: "10px" }}
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">
              {protege.fields.name} {protege.fields.surname}
            </Heading>

            {protege.fields.description.content.map((item, index) => (
              <span key={index}>{documentToReactComponents(item)}</span>
            ))}
          </Stack>
        </Flex>
      </CardBody>
      <Divider color="gray.300" />
      <CardFooter>
        <Flex direction={"column"} align="center" gap="1">
          <Heading as="h3" size="sm">
            Chcesz pomoc?
          </Heading>
          <Text fontSize="sm">Wpłać dowolną kwotę na konto:</Text>

          <Text fontSize="sm">
            Fundacja Everest, ul. Wielka 67, 53-340 Wrocław
          </Text>
          <Text fontWeight="500">41 1140 1140 0000 3822 7400 1006</Text>
          <Text fontSize="sm" textAlign="center">
            W tytule wpisując: na leczenie i rehabilitację -{" "}
            {protege.fields.name} {protege.fields.surname}
          </Text>

          <Button
            as="a"
            size="sm"
            rightIcon={<FaHeart size={20} ml={"20px"} />}
            bg={"red.600"}
            fontSize={"lg"}
            mt="4"
            textTransform={"uppercase"}
            letterSpacing={3}
            color={"white"}
            _hover={{ bg: "red.500" }}
            target="blank"
            href="https://donate.stripe.com/5kAcQ3gxVdhw0Zq288?locale=pl"
          >
            Wesprzyj
          </Button>
        </Flex>
      </CardFooter>
    </Card>
  );
}

export default Protege;
