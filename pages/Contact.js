import {
  Flex,
  Heading,
  Textarea,
  useToast,
  Stack,
  Button,
} from "@chakra-ui/react";
import React from "react";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { AiTwotoneMail } from "react-icons/ai";
import { FaWhatsappSquare, FaFacebook } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
const Contact = () => {
  const [Sender_Name, setName] = useState("");
  const [reply_to, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [senderNumber, setSenderNumber] = useState("");
  const toast = useToast();
  const handleSubmit = (e) => {
    e.preventDefault();
    const Public_KEY = "hD5mvReZmuq7a2FX2";
    const data = {
      Sender_Name: Sender_Name,
      Message: message,
      reply_to: reply_to,
      Sender_Number: senderNumber,
    };

    emailjs
      .send(process.env.SERVICE_ID, process.env.TEMPLATE_ID, data, Public_KEY)
      .then(
        (result) => {
          if (result.text === "OK") {
            toast({
              title: "Success.",
              description: "Message Sent.",
              status: "success",
              duration: 5000,
              isClosable: true,
            });
          }

          setEmail("");
          setMessage("");
          setName("");
          setSenderNumber("");
        },
        (error) => {
          toast({
            title: `Error Occured.`,
            status: "error",
            description: `${error.text}`,
            isClosable: true,
          });
        }
      );
  };
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      justifyContent="center"
      width="100%"
      padding="2"
      overflow="hidden"
      flexWrap="wrap"
      color="teal.600"
    >
      <Heading as="h4" marginBottom="3">
        Contact us
      </Heading>
      <p
        style={{
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        We Will Respond as Soon as Possible ....
      </p>

      <Flex
        width={{ base: "100%", md: "50%" }}
        flexDirection="column"
        padding="2"
        paddingBottom="5"
        justifyContent="center"
        color="teal.700"
        margin="auto"
      >
        <form onSubmit={handleSubmit}>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              textAlign="left"
              placeholder="Enter your name"
              type="text"
              value={Sender_Name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Contact</FormLabel>
            <Input
              textAlign="left"
              placeholder="Enter your phone number (optional)"
              value={senderNumber}
              onChange={(e) => setSenderNumber(e.target.value)}
              type="number"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              textAlign="left"
              placeholder="Enter your email address"
              value={reply_to}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
            <FormHelperText textAlign="left" color="gray.300">
              We use this email to contact you
            </FormHelperText>
          </FormControl>
          <FormControl marginBottom="5" isRequired>
            <FormLabel>Message</FormLabel>
            <Textarea
              placeholder="Enter Message Here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></Textarea>
          </FormControl>

          <FormControl>
            <Input
              type="submit"
              value="Submit"
              bgColor="teal.200"
              colorScheme="teal"
              color="teal.900"
              fontWeight="bold"
              _hover={{ bgColor: "teal.500", color: "white" }}
              cursor="pointer"
            />
          </FormControl>
        </form>
      </Flex>

      <Flex padding="2" marginTop="2" flexDirection="column">
        <Heading as="h5" marginBottom="3" fontSize="xl">
          Connect with us and follow our activities
        </Heading>

        <Flex
          gap="4"
          alignItems="center"
          alignContent="center"
          justifyContent="space-evenly"
          flexWrap="wrap"
        >
          <Button
            leftIcon={<AiTwotoneMail />}
            colorScheme="red"
            variant="solid"
          >
            <a
              href="mailto:harrisirungufoundation1@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Email
            </a>
          </Button>
          <Button
            leftIcon={<FaFacebook />}
            colorScheme="facebook"
            variant="outline"
          >
            <a
              href="https://web.facebook.com/Harris-Irungu-Stroke-Survivors-Foundation-101076485850394"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </Button>
          <Button
            leftIcon={<FaWhatsappSquare />}
            colorScheme="whatsapp"
            variant="outline"
          >
            <a
              href="https://wa.me/447907806583"
              target="_blank"
              rel="noreferrer"
            >
              Whatsapp
            </a>
          </Button>
          <Button
            leftIcon={<FiPhoneCall />}
            colorScheme="teal"
            variant="outline"
          >
            <a href="tel:+25722775454" target="_blank" rel="noreferrer">
              Call us
            </a>
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Contact;
