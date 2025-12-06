import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "hireMe",
      comment: "",
    },
    onSubmit: (values) => {
      submit("https://john.com/contactme", values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid Email address").required("Required"),
      comment: Yup.string().min(25, "must be atleast 25 characters"),
    }),
  });

  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);
      if (response.type === "success") {
        formik.resetForm();
      }
    }

  }, [response]);

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#121212"
      py={{ base: 8, md: 16 }}
      spacing={8}
      justifyContent="center"
      alignItems="center"
    >
      {/* Responsive: full width on mobile, fixed max width on md+ */}
      <VStack
        w={{ base: "calc(100% - 32px)", md: "1024px" }}
        maxW="1024px"
        p={{ base: 6, md: 32 }}
        alignSelf={{ base: "center", md: "flex-start" }}
        spacing={6}
      >
        <Heading
          as="h1"
          id="contactme-section"
          color="teal.300"
          fontSize={{ base: "2xl", md: "4xl" }}
          textAlign={{ base: "center", md: "left" }}
        >
          Contact me
        </Heading>

        <Box
          p={{ base: 4, md: 6 }}
          rounded={{ base: "md", md: "lg" }}
          w="100%"
          bg={{ base: "transparent", md: "transparent" }}
        >
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl
                isInvalid={!!formik.errors.firstName && formik.touched.firstName}
              >
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps("firstName")}
                  size={{ base: "md", md: "lg" }}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                  size={{ base: "md", md: "lg" }}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select
                  id="type"
                  name="type"
                  {...formik.getFieldProps("type")}
                  size={{ base: "md", md: "lg" }}
                >
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">Open source consultancy session</option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>

              <FormControl isInvalid={!!formik.errors.comment && formik.touched.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  {...formik.getFieldProps("comment")}
                  height={{ base: "150px", md: "250px" }}
                  resize="vertical"
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>

              <Button
                type="submit"
                width="full"
                bg="teal.400"
                _hover={{ bg: "teal.500" }}
                isLoading={isLoading}
                loadingText="Submitting"
                size={{ base: "md", md: "lg" }}
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
