import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

/*const projects = [
  {
    title: "React Space",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: "React Infinite Scroll",
    description:
      "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "Photo Gallery",
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "Event planner",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
];*/

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
    title: "Portfolio app",
    description: "A personal portfolio website built with React and Chakra UI to showcase projects, skills, and contact information in a clean, responsive, and professional layout.",
   getImageSrc: () => require("../images/portfolioimg.png"),
   link:" https://sekiro89.github.io/portfolio-react-app/"
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            link={project.link}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
