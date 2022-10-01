import {
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { MdSettings } from "react-icons/md";

const Qualitycard = ({ title, desc, desc2 }) => {
  return (
    <Flex
      minWidth={{ base: "100%", md: "400px", lg: "350px" }}
      maxWidth={{ base: "100%", md: "400px", lg: "350px" }}
      height="250px"
      boxShadow="md"
      bgColor="whiteAlpha.100"
      borderRadius="md"
      overflow="hidden"
      textAlign="center"
      alignItems="center"
      flexDirection="column"
      justifyItems="center"
      justifyContent="center"
      padding="3"
      border="none"
    >
      <Heading as="h4" fontWeight="semibold" marginBottom="3" color="teal.900">
        {title}
      </Heading>

      <Text fontWeight="semibold" fontSize="lg" color="teal.600">
        {desc}
      </Text>

      {desc2 && (
        <List
          textAlign="left"
          alignItems="center"
          spacing="1"
          color="teal.600"
          fontWeight="medium"
        >
          <ListItem>
            <ListIcon as={MdSettings} />
            Respect
          </ListItem>
          <ListItem>
            <ListIcon as={MdSettings} />
            Stewardship
          </ListItem>
          <ListItem>
            <ListIcon as={MdSettings} />
            Solidarity
          </ListItem>
          <ListItem>
            <ListIcon as={MdSettings} />
            Charity
          </ListItem>
          <ListItem>
            <ListIcon as={MdSettings} />
            Love for Service
          </ListItem>
        </List>
      )}
    </Flex>
  );
};

export default Qualitycard;
