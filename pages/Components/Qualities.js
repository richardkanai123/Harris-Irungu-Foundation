import { Flex } from "@chakra-ui/react";
import React from "react";
import Qualitycard from "./Qualitycard";

const Qualities = () => {
  const QualityList = [
    { 1: "Respect" },
    { 2: "Stewardship" },
    { 3: "Charity and Love for Service" },
    { 4: "Solidarity" },
  ];
  return (
    <Flex
      marginTop="3"
      color="telegram.500"
      padding="1"
      paddingBottom="2"
      justifyContent={{ base: "center", lg: "space-around" }}
      alignItems="center"
      gap="4"
      flexWrap="wrap"
    >
      <Qualitycard
        title="Mission"
        desc="To provide hope, care and empower stroke survivors in a stigma free community in Nyeri and neighbouring counties."
      />
      <Qualitycard
        title="Vision"
        desc="A sustainable, supportive and trusted foundation serving stroke survivors."
      />
      <Qualitycard title="Core Values" desc2={QualityList} />
    </Flex>
  );
};

export default Qualities;
