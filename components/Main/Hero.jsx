"use client";
import { useEffect } from "react";
import { Flex, Button, VStack } from "@chakra-ui/react";

import { FaHeart } from "react-icons/fa";

export default function Hero() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={"url(header.webp)"}
      backgroundSize={"cover"}
      backgroundPosition={"top 14% center"}
      filter="brightness(1.2) sepia(40%) "
    >
      <VStack w={"full"} justify={"flex-end"}>
        <Flex
          bg={"blackAlpha.400"}
          w={"full"}
          h={"120px"}
          justify={"center"}
          align={"center"}
          boxShadow="2xl"
        >
          <Button
            as="a"
            size="lg"
            rightIcon={<FaHeart size={25} ml={"20px"} />}
            bg={"red.600"}
            fontSize={"xl"}
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
      </VStack>
    </Flex>
  );
}
