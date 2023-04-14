"use client";
import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Collapse,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";
import Image from "next/image";
import { BiRun } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { usePathname } from "next/navigation";

import Logo from "@/public/logo-transparent.webp";

const Links = [
  {
    label: "Strona Główna",
    href: "/",
  },
  {
    label: "Fundacja",
    href: "/fundacja",
  },

  {
    label: "Podopieczni",
    href: "/podopieczni",
  },
  // {
  //   label: "Aktualności",
  //   href: "/news",
  // },
  {
    label: "Kontakt",
    href: "/kontakt",
  },
];

const NavLink = ({ onClose, children, href }) => {
  return (
    <Link
      px={2}
      py={1}
      color="white"
      rounded={"md"}
      textTransform={"uppercase"}
      letterSpacing={"2px"}
      _hover={{
        textDecoration: "none",
        color: "gray.300",
      }}
      href={href}
      onClick={onClose}
    >
      {children}
    </Link>
  );
};

export default function Navigation({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [scrollPosition, setScrollPosition] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav>
      <Box position="fixed" w="full" zIndex={"2"}>
        <Flex
          h={24}
          alignItems={"center"}
          justifyContent={"space-between"}
          style={{ transition: "0.3s" }}
          bg={
            scrollPosition <= 10
              ? pathname === "/"
                ? "blackAlpha.600"
                : "blue.700"
              : "blue.900"
          }
          minH={"60px"}
          align={"center"}
          boxShadow={"2xl"}
        >
          <IconButton
            variant={"ghost"}
            size={"lg"}
            color="blue.700"
            icon={
              isOpen ? (
                <CloseIcon w={4} h={4} color={"white"} />
              ) : (
                <HamburgerIcon w={6} h={6} color={"white"} />
              )
            }
            aria-label={"Open Menu"}
            display={{ xl: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack alignItems={"center"}>
            <Flex minW={300} justify={"end"} mr={12}>
              <Link href="/">
                <Image src={Logo} alt="logo" width={"220"} />
              </Link>
            </Flex>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", xl: "flex" }}
            >
              {/* <Link
                href="/"
                color={"white"}
                _hover={{
                  color: "gray.200",
                }}
                pl={6}
                pb={1}
              >
                <AiOutlineHome size={"25px"} />
              </Link> */}
              {Links.map((link) => (
                <NavLink key={link.href} href={link.href}>
                  {link.label}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Button
              as={"a"}
              leftIcon={<BiRun size={25} />}
              display={{ base: "none", xl: "inline-flex" }}
              fontSize={{ md: "sm", lg: "md" }}
              textTransform={"uppercase"}
              letterSpacing={1}
              fontWeight={500}
              color={"white"}
              bg={"blue.600"}
              mx="2"
              mr="8"
              href={"https://biegfirmowy.pl"}
              target="_blank"
              _hover={{
                bg: "blue.400",
              }}
            >
              Bieg Firmowy
            </Button>
          </Flex>
        </Flex>
        <Collapse in={isOpen} animateOpacity>
          <Box
            py={4}
            px={2}
            display={{ xl: "none" }}
            bg="blue.800"
            position={"relative"}
            zIndex={1}
          >
            <Stack as={"nav"} spacing={4}>
              {/* <Link
                href="/"
                pl={2}
                color="white"
                textTransform={"uppercase"}
                letterSpacing={1}
                onClick={onClose}
              >
                Strona główna
              </Link> */}
              {Links.map((link) => (
                <NavLink
                  key={link.href}
                  onClose={onClose}
                  href={link.href}
                  color="gray.800"
                >
                  {link.label}
                </NavLink>
              ))}
              <Link
                as={"a"}
                pl={2}
                onClick={onClose}
                href={"https://biegfirmowy.pl"}
                target="_blank"
                color="white"
                textTransform={"uppercase"}
                letterSpacing={1}
              >
                Bieg firmowy
              </Link>
            </Stack>
          </Box>
        </Collapse>
      </Box>

      <Box>{children}</Box>
    </nav>
  );
}
