import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { GiOpenedFoodCan } from "react-icons/gi";
import { MdHealthAndSafety } from "react-icons/md";
import { AiFillInsurance } from "react-icons/ai";
import { FaHandHoldingHeart } from "react-icons/fa";
import { GiHieroglyphLegs, GiHouse } from "react-icons/gi";
const Achievements = () => {
  return (
    <Flex
      width="100%"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      padding="3"
      marginTop="5"
      color="teal"
    >
      <Heading as="h5">Our Achievements</Heading>

      <Flex
        flexWrap="wrap"
        width="100%"
        gap="5"
        justifyContent={{ base: "center", lg: "space-around" }}
        padding="3"
      >
        <Flex
          flexDirection="column"
          minwidth={{ base: "100%", md: "50%" }}
          maxWidth="320px"
          height="150px"
          textAlign="center"
          fontSize="2xl"
          fontWeight="medium"
          alignItems="center"
          justifyContent="space-around"
          boxShadow="md"
          padding="4"
          bgColor="green.100"
          color="teal.600"
        >
          <Box
            width="100px"
            height="100px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            objectFit="cover"
            borderRadius="50%"
            fontSize="4xl"
            color="green.800"
          >
            <GiOpenedFoodCan />
          </Box>
          <Text>Food Provision to 18 beneficiaries.</Text>
        </Flex>
        <Flex
          flexDirection="column"
          minwidth={{ base: "100%", md: "50%" }}
          maxWidth="320px"
          height="150px"
          textAlign="center"
          fontSize="2xl"
          fontWeight="medium"
          alignItems="center"
          justifyContent="space-around"
          boxShadow="md"
          padding="4"
          bgColor="purple.100"
          color="teal.600"
        >
          <Box
            width="100px"
            height="100px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            objectFit="cover"
            borderRadius="50%"
            fontSize="4xl"
            color="red.500"
          >
            <MdHealthAndSafety />
          </Box>
          <Text>
            Facilitating hospital visits and home based physiotherapy sessions.
          </Text>
        </Flex>
        <Flex
          flexDirection="column"
          minwidth={{ base: "100%", md: "50%" }}
          maxWidth="320px"
          height="150px"
          textAlign="center"
          fontSize="2xl"
          fontWeight="medium"
          alignItems="center"
          justifyContent="space-around"
          boxShadow="md"
          padding="4"
          bgColor="whatsapp.300"
          color="teal.600"
        >
          <Box
            width="100px"
            height="100px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            objectFit="cover"
            borderRadius="50%"
            fontSize="4xl"
            color="blue.500"
          >
            <AiFillInsurance />
          </Box>
          <Text>Paying up NHIF health covers</Text>
        </Flex>
        <Flex
          flexDirection="column"
          minwidth={{ base: "100%", md: "50%" }}
          maxWidth="320px"
          height="150px"
          textAlign="center"
          fontSize="2xl"
          fontWeight="medium"
          alignItems="center"
          justifyContent="space-around"
          boxShadow="md"
          padding="4"
          bgColor="twitter.50"
          color="teal.600"
        >
          <Box
            width="100px"
            height="100px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            objectFit="cover"
            borderRadius="50%"
            fontSize="4xl"
            color="green.900"
          >
            <GiHouse />
          </Box>
          <Text> Construction of a House for an Elderly Survivor</Text>
        </Flex>
        <Flex
          flexDirection="column"
          minwidth={{ base: "100%", md: "50%" }}
          maxWidth="320px"
          height="150px"
          textAlign="center"
          fontSize="2xl"
          fontWeight="medium"
          alignItems="center"
          justifyContent="space-around"
          boxShadow="md"
          padding="4"
          bgColor="pink.100"
          color="teal.600"
        >
          <Box
            width="100px"
            height="100px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            objectFit="cover"
            borderRadius="50%"
            fontSize="4xl"
            color="red.600"
          >
            <FaHandHoldingHeart />
          </Box>
          <Text>Hiring of Caregivers for needy Survivors</Text>
        </Flex>
        <Flex
          flexDirection="column"
          minwidth={{ base: "100%", md: "50%" }}
          maxWidth="320px"
          height="150px"
          textAlign="center"
          fontSize="2xl"
          fontWeight="medium"
          alignItems="center"
          justifyContent="space-around"
          boxShadow="md"
          padding="4"
          bgColor="green.100"
          color="teal.600"
        >
          <Box
            width="100px"
            height="100px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            objectFit="cover"
            borderRadius="50%"
            fontSize="4xl"
            color="blue.500"
          >
            <GiHieroglyphLegs />
          </Box>
          <Text>Provision of Clutches to Assist when Walking </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Achievements;
