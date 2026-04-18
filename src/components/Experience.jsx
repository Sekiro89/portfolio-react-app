import { Box, Text, VStack, HStack, Circle, Heading} from "@chakra-ui/react";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Scrodrive",
    duration: "2025 Jan - 2025 Dec",
    description:
      "Built responsive dashboards and web applications using React and Next.js. Worked on API integrations and reusable UI components.",
  },
];

export default function Experience() {
  return (
    <Box
      bg="#0d1117"
      color="white"
      py={16}
      px={6}
    >
       <Heading as="h1" id="experience-section"  mb={8}
              color="teal.300"
              fontWeight="bold"
              textAlign="center"
              w="100%">
              Experience
        </Heading>

      <VStack spacing={10} align="start" maxW="800px" mx="auto">
        {experiences.map((exp, index) => (
          <HStack align="start" spacing={4} key={index}>
            
            {/* Timeline dot */}
            <Circle size="12px" bg="teal.300" mt={2} />

            {/* Content */}
            <Box>
              <Text fontSize="xl" fontWeight="bold">
                {exp.role}
              </Text>

              <Text color="gray.400">
                {exp.company} • {exp.duration}
              </Text>

              <Text mt={2} color="gray.300">
                {exp.description}
              </Text>
            </Box>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
}