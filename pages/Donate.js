import { Box, Flex, Heading, Text, Image, Button } from "@chakra-ui/react";

import React from "react";

const Donate = () => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      color="teal.800"
      padding="2"
      textAlign="center"
      marginBottom="1"
      width="100%"
      minHeight="85vh"
    >
      <Heading as="h5" marginBottom="3">
        Donate
      </Heading>
      <Text fontWeight="bold" marginBottom="4">
        To help us reach out to more survivors and improve our operation, we
        invite you to be part of our support...
      </Text>

      <Flex
        justifyContent="space-around"
        flexWrap="wrap"
        minWidth="99%"
        maxWidth="100%"
        gap="2"
      >
        <Box
          width={{ base: "90%", md: "48%" }}
          shadow="base"
          padding="1"
          rounded="xl"
        >
          <Flex flexDirection="column">
            <Image
              src="https://i.ibb.co/BC1d7j3/M-PESA.jpg"
              alt="logo"
              marginBottom="4"
              rounded="xl"
            />
            <Text fontSize="md" fontWeight="bold" marginTop="3">
              Donate using Safaricom Mobile banking Lipa na Mpesa Service
            </Text>
            <Text fontWeight="bold">
              PayBill Number:{" "}
              <span
                style={{
                  backgroundImage: "linear-gradient( 45deg, #008000, #9198e5)",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  letterSpacing: "2px",
                  padding: "0.15rem",
                }}
              >
                4085285
              </span>
            </Text>
            <br />
            <Text fontWeight="bold">
              Account Number :{" "}
              <span
                style={{
                  backgroundImage: "linear-gradient( 45deg, #008000, #9198e5)",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  letterSpacing: "2px",
                  padding: "0.15rem",
                }}
              >
                harrisirungufoundation
              </span>
            </Text>
          </Flex>
        </Box>
        <Box
          width={{ base: "100%", md: "48%" }}
          rounded="xl"
          shadow="base"
          padding="1"
        >
          <Flex flexDirection="column" padding="2">
            <Image
              src="https://i.ibb.co/FgD2v3F/gofundme-logo.webp"
              alt="logo"
              marginBottom="4"
              rounded="xl"
            />

            <Text fontSize="md" fontWeight="bold" margin={("4", "auto")}>
              Donate from anywhere in the world, using any online payment system
              such as paypall, using a bank card or debit card.
            </Text>
            <Button
              colorScheme="green"
              width="50%"
              alignSelf="center"
              marginTop="3"
              fontWeight="bold"
            >
              <a
                href="https://www.gofundme.com/f/harris-irungu-stroke-survivors-foundation?utm_source=customer&utm_medium=copy_link&utm_campaign=p_cp_guide_do&member=22332323"
                target="_blank"
                rel="noopener noreferrer"
              >
                Donate
              </a>
            </Button>
          </Flex>
        </Box>
      </Flex>
      <br />
    </Flex>
  );
};

export default Donate;
