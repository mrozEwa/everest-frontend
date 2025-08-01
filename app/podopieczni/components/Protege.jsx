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

function Protege({ protege }) {
  const { name, surname, image, description } = protege.fields;

  return (
    <Card maxW="xl" color="gray.600" py={4}>
      <CardBody>
        <Flex align="center" direction="column">
          <img
            src={`https:${image.fields.file.url}`}
            alt={`${name} ${surname}`}
            width={240}
            height={240}
            style={{ borderRadius: "10px" }}
          />

          <Stack mt="6" spacing="3" textAlign="center">
            <Heading size="md">
              {name} {surname}
            </Heading>
            {documentToReactComponents(description)}
          </Stack>
        </Flex>
      </CardBody>

      <Divider color="gray.300" />

      <CardFooter>
        <Flex direction="column" align="center" gap="1">
          <Heading as="h3" size="sm">
            Chcesz pomóc?
          </Heading>
          <Text fontSize="sm">Wpłać dowolną kwotę na konto:</Text>
          <Text fontSize="sm">
            Fundacja Everest, ul. Wielka 67, 53-340 Wrocław
          </Text>
          <Text fontWeight="500">41 1140 1140 0000 3822 7400 1006</Text>
          <Text fontSize="sm" textAlign="center">
            W tytule wpisując: na leczenie i rehabilitację - {name} {surname}
          </Text>

          <Button
            as="a"
            size="sm"
            rightIcon={<FaHeart size={20} ml="20px" />}
            bg="red.600"
            fontSize="lg"
            mt="4"
            textTransform="uppercase"
            letterSpacing={3}
            color="white"
            _hover={{ bg: "red.500" }}
            target="_blank"
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