import { Flex } from "@chakra-ui/react";
import React from "react";
import Hero from "./Components/Hero";
const index = () => {
  return (
    <Flex
      flexWrap="wrap"
      height="100vh"
      width="full"
      backgroundImage="url('https://i.ibb.co/v34fyRw/e8013a9c-b0cb-474f-9164-7fd6ae23d0c1.jpg')"
      backgroundPosition={{ base: "center", lg: "top" }}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      bgColor="gray.100"
      filter="grayscale(40%)"
      backdropBlur="2px"
    >
      <Hero />
    </Flex>
  );
};

export default index;
