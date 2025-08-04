"use client";
import React from "react";
import {
    Box,
    Heading,
    Text,
    List,
    ListItem,
    ListIcon,
    Link,
    Divider,
} from "@chakra-ui/react";
import { CheckCircleIcon, InfoIcon } from "@chakra-ui/icons";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const options = {
    renderNode: {
        paragraph: (node, children) => (
            <Text fontSize="md" mb={4} lineHeight="1.8" textAlign="justify">
                {children}
            </Text>
        ),
        heading_1: (node, children) => (
            <Heading as="h1" size="xl" mb={6} mt={8}>
                {children}
            </Heading>
        ),
        heading_2: (node, children) => (
            <Heading as="h2" size="lg" mb={5} mt={8}>
                {children}
            </Heading>
        ),
        heading_3: (node, children) => (
            <Heading as="h3" size="md" mb={4} mt={6}>
                {children}
            </Heading>
        ),
        unordered_list: (node, children) => (
            <List spacing={3} mb={4} pl={4} styleType="disc">
                {children}
            </List>
        ),
        ordered_list: (node, children) => (
            <List as="ol" spacing={3} mb={4} pl={4} styleType="decimal">
                {children}
            </List>
        ),
        list_item: (node, children) => <ListItem>{children}</ListItem>,
        quote: (node, children) => (
            <Box
                borderLeft="4px solid"
                borderColor="gray.400"
                pl={4}
                fontStyle="italic"
                color="gray.600"
                my={6}
            >
                {children}
            </Box>
        ),
        hyperlink: (node, children) => (
            <Link
                href={node.data.uri}
                color="blue.600"
                isExternal
                _hover={{ textDecoration: "underline" }}
            >
                {children}
            </Link>
        ),
        hr: () => <Divider my={6} />,
    },
};

function PolitykaPrywatnosci({ politykaPrywatnosci }) {
    const content =
        politykaPrywatnosci?.data?.[0]?.fields?.tresc?.content || null;

    const title = politykaPrywatnosci?.data?.[0]?.fields?.tytul || "Polityka Prywatności";

    return (
        <Box maxW="4xl" mx="auto" px={{ base: 4, md: 6 }} py={10}>
            <Heading as="h1" size="2xl" mb={10}>
                {title}
            </Heading>
            {content ? (
                documentToReactComponents(
                    {
                        nodeType: "document",
                        data: {},
                        content: content,
                    },
                    options
                )
            ) : (
                <Text>Brak danych do wyświetlenia.</Text>
            )}
        </Box>
    );
}

export default PolitykaPrywatnosci;

