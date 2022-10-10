import {
  Flex,
  Heading,
  Text,
  Image,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import Achievements from "./Components/Achievements";
import Qualities from "./Components/Qualities";

const About = () => {
  return (
    <Flex
      width="100%"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      padding="2"
      overflow="hidden"
    >
      <Heading as="h1" size="xl" marginBottom="6" color="teal.900">
        About Us
      </Heading>

      <Flex
        width="100%"
        padding="2"
        overflow="hidden"
        flexWrap="wrap"
        justifyContent={{ base: "center", lg: "space-around" }}
        alignItems="center"
        gap="4"
      >
        <Flex width={{ base: "100%", lg: "49%" }} objectFit="cover" padding="1">
          <Image
            src="https://i.ibb.co/rHcGHxk/2ed7210f-e54e-4525-b777-b3c8a51098aa.jpg"
            width={{ base: "100%", lg: "500" }}
            height={600}
            alt="image loading"
            objectFit="cover"
            style={{
              borderRadius: "5px",
              boxShadow: "0 0 5px 3px rgba(0,0,0,0.6)",
              overflow: "hidden",
              objectFit: "cover",
            }}
          />
        </Flex>
        <Flex
          width={{ base: "100%", lg: "49%" }}
          flexDirection="column"
          padding="1"
          justifyContent={{ base: "center", lg: "space-between" }}
          color="teal.700"
        >
          <Heading
            as="h3"
            size={{ base: "lg", lg: "xl" }}
            marginBottom="2"
            textAlign="center"
            color="teal.800"
          >
            Brief History of Harris Irungu Stroke Survivors Foundation
          </Heading>

          <Text textAlign="justify" fontSize="lg" fontWeight="semibold">
            Harris Irungu Stroke survivors{"'"} foundation is a non-profit
            making organisation based in Aguthi Gaaki in Nyeri County, Kenya.
            The noble idea to start the Foundation was motivated by Harris
            Irungu who succumbed to stroke related complications. He was the
            brother to Caroline Wambugu who came up with the idea of supporting
            stroke survivors after witnessing the suffering her brother went
            through.
          </Text>

          <br />

          <Text textAlign="justify" fontSize="lg" fontWeight="semibold">
            It was formed in the year 2018 and formally registered in January
            2019 by the NGO Coordination Board registration number OP.218/051/18
            {"-"}101/11190. The Foundation undertakes its activities mainly in
            Nyeri County which include: offering care and support to survivors
            of stroke through provision of nutritious food, therapy, counselling
            and psychosocial support, provide linkage to students from poor
            households to access available bursaries and also support them start
            income generating activities (IGAs).{" "}
          </Text>

          <Heading as="h5" fontSize="lg" marginTop="3">
            Thematic Areas
          </Heading>
          <UnorderedList listStyleType="none" textAlign="center" marginTop="2">
            <ListItem>Health </ListItem>
            <ListItem>Livelihood Support </ListItem>
            <ListItem>Nutrition </ListItem>
            <ListItem>Education </ListItem>
          </UnorderedList>
        </Flex>
      </Flex>

      <Qualities />

      <Achievements />
    </Flex>
  );
};

export default About;
