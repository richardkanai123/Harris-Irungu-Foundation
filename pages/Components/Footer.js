import {
  Button,
  Flex,
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  IconButton,
  Container,
} from "@chakra-ui/react";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { BiCopyright } from "react-icons/bi";
import Link from "next/link";

const Footer = () => {
  return (
    <Container minW="100%" padding="0">
      <Flex
        width="100%"
        alignContent="center"
        alignItems="center"
        textAlign="center"
        padding="1"
        flexWrap={{ base: "wrap", sm: "wrap", lg: "nowrap" }}
        justifyContent={{ base: "space-around" }}
        color="teal.600"
        bgColor="gray.200"
        gap={{ base: "1", sm: "1", lg: "2" }}
      >
        <Flex
          flexDirection="column"
          width={{ md: "50%", sm: "100%", xs: "100%" }}
          textAlign="center"
          marginTop={{ base: "3", lg: "0" }}
          alignItems="center"
          justifyContent="center"
        >
          <Heading as="h6" fontSize="lg" fontWeight="light">
            Connect With Us
          </Heading>

          <Flex
            width="100%"
            gap="2"
            marginTop="3"
            alignItems="center"
            justifyContent="space-evenly"
          >
            <IconButton colorScheme="facebook">
              <a
                href="https://m.facebook.com/profile.php?id=100079764606194&eav=AfZPw0eImmGe9Rl0xKWyPmRVO1nfAFfXfaPYgbwES25XuAYKVv4SAkUZhCvnxcP6y9g&paipv=0&_rdr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            </IconButton>
            <IconButton colorScheme="whatsapp">
              <a
                href="https://wa.me/+447907806583"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiWhatsappFill />
              </a>
            </IconButton>
          </Flex>
        </Flex>
        <Flex
          flexDirection="column"
          width={{ md: "50%", sm: "100%" }}
          textAlign="center"
          marginTop={{ base: "3", lg: "0" }}
          alignItems="center"
        >
          <Heading as="h4" fontSize="md" fontWeight="light">
            Quick Links
          </Heading>
          <Button colorScheme="teal" variant="link">
            <Link href="/" passHref>
              Home
            </Link>
          </Button>
          <Button colorScheme="teal" variant="link">
            <Link href="/About" passHref>
              About Us
            </Link>
          </Button>
          <Button colorScheme="teal" variant="link">
            <Link href="/Donate" passHref>
              Donate
            </Link>
          </Button>
          <Button colorScheme="teal" variant="link">
            <Link href="/Contact" passHref>
              Contact us
            </Link>
          </Button>
        </Flex>
        <Flex
          flexDirection="column"
          width={{ md: "50%", sm: "100%" }}
          textAlign="center"
          alignItems="center"
          marginTop={{ base: "3", lg: "0" }}
        >
          <Heading as="h4" fontSize="md" fontWeight="light">
            How To Donate
          </Heading>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    textColor="green.500"
                    fontWeight="600"
                  >
                    Mpesa
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={3} fontWeight="500">
                <Text>
                  Mpesa PayBill Number: {""}
                  <Text as="mark" fontWeight="800">
                    4085285
                  </Text>
                </Text>
                <br />
                <Text>Account Number: {"harrisirungufoundation"}</Text>
                <br />
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Gofundme
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={3}>
                <Text>
                  Visit our website on the donate page where you will find a
                  link to our Gofundme.com donation.
                  <a
                    href="https://www.gofundme.com/f/harris-irungu-stroke-survivors-foundation?utm_source=customer&utm_medium=copy_link&utm_campaign=p_cf+share-flow-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here
                  </a>
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Flex>
        <Flex
          flexDirection="column"
          width={{ md: "100%", sm: "100%" }}
          textAlign="center"
          marginTop={{ base: "3", lg: "0" }}
          alignItems="center"
        >
          <Text fontSize="sm" fontWeight="light">
            <BiCopyright /> Harris Irungu Stroke Survivors Foundation
          </Text>
          <br />
          <Text fontSize="md" fontWeight="light">
            2022
          </Text>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Footer;
