"use client"
import React from 'react'
import { Box, Heading, Image, Text, VStack } from '@chakra-ui/react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, Document } from '@contentful/rich-text-types';
import NewsGallery from "../components/NewsGallery";


function NewsItemDetails({ newsItem }) {

  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('pl-PL', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  }

  function getYoutubeEmbedUrl(url) {
    const match = url.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : null;
  }

  const images = newsItem?.fields.galery;
  const youtubeUrl = newsItem?.fields.videoUrl;
  const embedUrl = youtubeUrl ? getYoutubeEmbedUrl(youtubeUrl) : null;

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <Text mb={4} fontSize="md" color="gray.700" lineHeight="tall">
          {children}
        </Text>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <Heading as="h2" size="md" mt={6} mb={2}>
          {children}
        </Heading>
      ),
      // Możesz dodać więcej typów np. listy, cytaty, obrazy itp.
    },
  };
  return (
    <Box

      maxW="6xl"
      mx="auto"
      px={{ base: 4, md: 8 }}
      pt={40}
      pb={8}
      borderRadius="xl"
      // boxShadow="lg"
      bg="white"
    >
      <VStack spacing={6} align="stretch">
        {embedUrl ? (
          <Box
            as="iframe"
            src={embedUrl}
            borderRadius="50px"
            width="100%"
            height={{ base: '220px', md: '400px' }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <Image
            src={newsItem?.fields.image?.fields?.file?.url}
            alt={newsItem?.fields.image?.fields?.title}
            borderRadius="50px"
            objectFit="cover"
            maxH="400px"
          />
        )}

        <Heading as="h1" size="xl">
          {newsItem?.fields.tytul}
        </Heading>

        <Text fontSize="sm" color="gray.500">
          Dodano: {formatDate(newsItem?.fields.data)}
        </Text>
        <div style={{ fontSize: '16px', color: '#4A5568', lineHeight: '1.625', whiteSpace: 'pre-line' }}>
          <Box>{documentToReactComponents(newsItem?.fields.tresc, options)}</Box>
        </div>
      </VStack>
      <NewsGallery images={images} />
    </Box>
  )
}

export default NewsItemDetails