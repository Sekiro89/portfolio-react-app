import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, Link, Image,Text, VStack, SimpleGrid } from "@chakra-ui/react";
import Card from "./Card";

export const projects = [
  {
    title: "Restuarent app",
    description: "A user-friendly restaurant reservation app that enables customers to browse venues, view availability, and seamlessly book tables in advance.",
    getImageSrc: () => require("../images/Restuarentapp.jpg"), 
    link:"https://sekiro89.github.io/Restuarent-app/"
  },
  {
    title: "Weather app",
    description: "A sleek and responsive weather forecasting app that provides real-time temperature, humidity, and condition updates based on the user’s location or searched cities.",
   getImageSrc: () => require("../images/weatherapp.png"),
   link:" https://sekiro89.github.io/Weatherapp/"
  },
  {
    title: "Movie search app",
    description: "A dynamic movie discovery platform that allows users to explore trending and upcoming films, search by title or genre, and add favorites to a personalized wishlist.",
   getImageSrc: () => require("../images/movie-app.jpg"),
   link:"https://sekiro89.github.io/Moviesearch/"
  },
  {
    title: "travel planner",
    description: "Travel Planner is a React-based web app that helps users design and explore personalized travel itineraries with an intuitive, responsive interface and smooth navigation.",
   getImageSrc: () => require("../images/travelplanner.jpg"),
   link:" https://sekiro89.github.io/travel-planner/"
  },
  {
    title: "resume builder",
    description: "A dynamic resume builder with live preview, theming, and PDF export. Stay in control of your career.",
   getImageSrc: () => require("../images/resumebuilder.png"),
   link:"https://sekiro89.github.io/Resume-builder-website/"
  },

];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      p={8}
      alignItems="flex-start"
      spacing={8}
      backgroundColor="#121212" 
    >
      <Heading as="h1" id="projects-section"  mb={8}
        color="teal.300"
        fontWeight="bold"
        textAlign="center"
        w="100%">
        Featured Projects
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} spacing={8} w="100%">
        {projects.map((project) => (
          <Box
            key={project.title}
            bg="#1e1e1e"
            border="1px solid"
            borderColor="teal.400"
            borderRadius="lg"
            overflow="hidden"
            transition="all 0.3s ease"
            _hover={{
              borderColor: "teal.300",
              boxShadow: "0 0 10px teal"
            }}
          >
            <Image
              src={project.getImageSrc()}
              alt={project.title}
              objectFit="cover"
              w="100%"
              h={["200px", "250px", "300px"]}
            />

            <VStack align="start" p={4} spacing={3}>
              <Heading size="md" color="teal.300">
                {project.title}
              </Heading>
              <Text color="gray.300">{project.description}</Text>
              <Link
                href={project.link.trim()}
                color="teal.200"
                fontWeight="bold"
                isExternal
                _hover={{ textDecoration: "underline", color: "teal.100" }}
              >
                See More →
              </Link>
            </VStack>
          </Box>
        ))}
        </SimpleGrid>
    </FullScreenSection>
  );
};

export default ProjectsSection;
