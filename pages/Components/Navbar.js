import NextLink from "next/link";
import {
  Box,
  Flex,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Button,
  Link,
} from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";
import { FcAbout, FcMenu, FcDonate, FcContacts } from "react-icons/fc";
import { BiPhoneCall } from "react-icons/bi";
import Image from "next/image";
import LogoImage from "../assets/Images/logo250.png";

const Navbar = () => {
  return (
    <Flex
      p={(2, 1)}
      borderBottom="2px"
      borderColor="gray.200"
      textAlign="center"
      alignContent="center"
    >
      <Box
        fontSize={{ md: "xl", base: "lg" }}
        color="cyan.500"
        fontWeight="bold"
      >
        <NextLink href={"/"} passHref>
          <Link paddingLeft="2">
            <Image src={LogoImage} width={60} height={60} alt="logo image" />
          </Link>
        </NextLink>
      </Box>
      <Spacer />

      <Box>
        <Menu>
          <Flex flexWrap="noWrap" gap="5">
            <IconButton
              colorScheme="teal"
              aria-label="+254722775454"
              padding={1}
              fontSize="15px"
            >
              <NextLink href="tel:+254722775454" passHref>
                <Link>
                  <BiPhoneCall />
                </Link>
              </NextLink>
            </IconButton>

            <Button variant="outline" colorScheme="teal">
              <Link href="/Donate">Donate</Link>
            </Button>
            <MenuButton
              as={IconButton}
              icon={<FcMenu />}
              variant="outlined"
              color="cyan.800"
              fontSize="2xl"
            />
          </Flex>
          <MenuList
            textColor="cyan.600"
            fontSize="20px"
            alignContent="center"
            alignItems="center"
            textAlign="center"
          >
            <NextLink href="/" passHref>
              <Link>
                <MenuItem icon={<AiFillHome />}>Home</MenuItem>
              </Link>
            </NextLink>
            <NextLink href="/About" passHref>
              <Link>
                <MenuItem icon={<FcAbout />}>About</MenuItem>
              </Link>
            </NextLink>
            <NextLink href="/Donate" passHref>
              <Link>
                <MenuItem icon={<FcDonate />}>Donate</MenuItem>
              </Link>
            </NextLink>
            <NextLink href="/Contact" passHref>
              <Link>
                <MenuItem icon={<FcContacts />}>Contact</MenuItem>
              </Link>
            </NextLink>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};

export default Navbar;
