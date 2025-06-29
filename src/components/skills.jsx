import React from 'react';
import { Stack, Heading, SimpleGrid, Button , Box} from '@chakra-ui/react';
import { FaJsSquare, FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaNodeJs,FaFigma, FaJava} from 'react-icons/fa';
import { SiChakraui } from 'react-icons/si';
import FullScreenSection from './FullScreenSection';


const SkillsSection = () => {
  return (
    <Box bg="#1a1a1a">
    <Stack spacing={8} py={10} align="center">
      <Heading as="h2" size="lg" color="teal.100">
        Skills
      </Heading>
      <SimpleGrid columns={[2, 3, 4]} spacing={4}>
        <Button
          variant="outline"
          leftIcon={<FaJsSquare />}
          colorScheme="teal"
          _hover={{ bg: 'teal.900', color: 'teal.100' }}
        >
          JavaScript
        </Button>
        <Button
          variant="outline"
          leftIcon={<FaReact />}
          colorScheme="teal"
          _hover={{ bg: 'teal.900', color: 'teal.100' }}
        >
          React
        </Button>
           <Button
          variant="outline"
          leftIcon={<FaJava />}
          colorScheme="teal"
          _hover={{ bg: 'teal.900', color: 'teal.100' }}
        >
          Java
        </Button>
        <Button
          variant="outline"
          leftIcon={<SiChakraui />}
          colorScheme="teal"
          _hover={{ bg: 'teal.900', color: 'teal.100' }}
        >
          Chakra UI
        </Button>
        <Button
          variant="outline"
          leftIcon={<FaHtml5 />}
          colorScheme="teal"
          _hover={{ bg: 'teal.900', color: 'teal.100' }}
        >
          HTML5
        </Button>
        <Button
          variant="outline"
          leftIcon={<FaCss3Alt />}
          colorScheme="teal"
          _hover={{ bg: 'teal.900', color: 'teal.100' }}
        >
          CSS3
        </Button>
        <Button
          variant="outline"
          leftIcon={<FaGitAlt />}
          colorScheme="teal"
          _hover={{ bg: 'teal.900', color: 'teal.100' }}
        >
          Git
        </Button>
          <Button
          variant="outline"
          leftIcon={<FaNodeJs />}
          colorScheme="teal"
          _hover={{ bg: 'teal.900', color: 'teal.100' }}
        >
          Node.js
        </Button>
        
      </SimpleGrid>
    </Stack>
   </Box>
  );
};

export default SkillsSection;