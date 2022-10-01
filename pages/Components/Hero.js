import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Hero = () => {
  return (
    <Flex
      flexWrap="wrap"
      alignItems="center"
      width="full"
      fontFamily={{ base: "Poppins", lg: "Poppins" }}
      flexDirection="column"
      padding={{ base: "2", md: "3" }}
      margin="auto"
      justifyContent="center"
      alignContent="center"
      textAlign="center"
      bgBlendMode="overlay"
      backdropBrightness="0.7"
      backdropFilter="blur(2px)"
    >
      <Box
        width={{ base: "100%", md: "50%" }}
        height="100%"
        display="flex"
        flexDirection="column"
        color="AliceBlue"
      >
        <Text fontSize="lg" fontWeight="bold">
          Care, Support and Empower Stroke Survivors
        </Text>

        <Text
          fontSize={{ base: "4xl", lg: "6xl" }}
          fontWeight=""
          letterSpacing="wide"
          marginBottom="1"
        >
          Harris Irungu Stroke Survivors Foundation
        </Text>

        <Button
          as="a"
          href="/About"
          size="lg"
          colorScheme="cyan"
          variant="solid"
          margin="auto"
          marginTop="2"
          width="40%"
        >
          More about us
        </Button>
      </Box>
    </Flex>
  );
};

export default Hero;
