import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  Box,
  HStack,
  VStack,
  IconButton,
  useDisclosure,
  Collapse,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const socials = [
  { icon: faEnvelope, url: "mailto:keerthanpkaranth@gmail.com" },
  { icon: faGithub, url: "https://github.com/Sekiro89" },
  { icon: faLinkedin, url: "http://www.linkedin.com/in/keerthanpkaranth" },
];

const Header = () => {
  const headerRef = useRef(null);
  const { isOpen, onToggle } = useDisclosure();
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = () => { 
    const currScrollPos = window.scrollY; 
    const currHeaderElement = headerRef.current;
     if (!currHeaderElement){ 
      return; } 
      if (prevScrollPos > currScrollPos) 
        { currHeaderElement.style.transform = "translateY(0)"; }
       else { currHeaderElement.style.transform = "translateY(-200px)"; } 
       prevScrollPos = currScrollPos; };


  const handleClick = (anchor) => () => {
    const element = document.getElementById(`${anchor}-section`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    onToggle(); // Close mobile menu after click
  };

  return (
    <Box
      ref={headerRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      backgroundColor="#18181b"
      zIndex={1000}
      transition="transform .3s ease-in-out"
    >
      <Box color="white" maxWidth="1280px" mx="auto">
        <HStack
          px={{ base: 4, md: 16 }}
          py={4}
          justifyContent="space-between"
          alignItems="center"
          color={"teal.300"}
        >
          {/* Social Icons */}
          <HStack spacing={6}>
            {socials.map((social) => (
              <a href={social.url} key={social.url}>
                <FontAwesomeIcon icon={social.icon} size="2x" />
              </a>
            ))}
          </HStack>

          {/* Desktop Navigation */}
          <HStack
            spacing={8}
            display={{ base: "none", md: "flex" }}
          >
            <a onClick={handleClick("projects")}>projects</a>
            <a onClick={handleClick("contactme")}>contact me</a>
          </HStack>

          {/* Mobile Hamburger Button */}
          <IconButton
            display={{ base: "flex", md: "none" }}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={onToggle}
            variant="ghost"
            color="white"
            aria-label="Toggle Navigation"
          />
        </HStack>

        {/* Mobile Menu */}
        <Collapse in={isOpen} animateOpacity>
          <VStack
            align="start"
            px={6}
            pb={4}
            spacing={4}
            display={{ base: "flex", md: "none" }}
            color="teal.300"
          >
            <a onClick={handleClick("projects")}  >projects</a>
            <a onClick={handleClick("contactme")} >contact me</a>
          </VStack>
        </Collapse>
      </Box>
    </Box>
  );
};

export default Header;
