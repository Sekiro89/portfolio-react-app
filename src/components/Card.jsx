import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack color="black"
    backgroundColor="white"
    cursor="pointer"
    borderRadius="20">
      <Image src={imageSrc} borderRadius="20"/>
      <VStack spacing={4} p={4} align-items="flex-start">
        <HStack justifycontent="space-between" align-items="center">
          <Heading as="h3" size="md">{title}</Heading>
        </HStack>
        <Text color="#64748b">{description}
        </Text>
        <HStack>
          <p>See More</p>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );

};

export default Card;
