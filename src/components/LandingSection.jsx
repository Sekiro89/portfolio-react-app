import React from "react";
import {Text,chakra,Heading, VStack,Button} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Keerthan!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#151515"
  >
     <VStack spacing={8} textAlign="center" maxW="800px" px={4}>
     <Heading as="h1" size="2xl" color="whiteAlpha.900">
         Hi, I'm <chakra.span color="teal.300">Keerthan</chakra.span>
      </Heading>

    <Heading as="h2" size="lg" color="teal.100">
      I'm a Frontend Developer
    </Heading>

    <Text fontSize="md" color="gray.300">
      I build responsive, modern, and user-friendly web applications
      using React. Passionate about clean code and intuitive design.
    </Text>
    <Button
    as="a"
    href="https://drive.google.com/file/d/1J03Zu9_s70XQKmst_8n76GP321ItNHRi/view?usp=sharing"
    colorScheme="teal"
    size="md"
    target="_blank"
    rel="noopener noreferrer"
  >
    My Resume
  </Button>
  </VStack>
    
  </FullScreenSection>
);

export default LandingSection;
