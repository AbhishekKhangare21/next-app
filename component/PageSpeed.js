import {
  Button,
  Flex,
  Heading,
  Input,
  Box,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  BsFillTriangleFill,
  BsFillSquareFill,
  BsFillCircleFill,
} from "react-icons/bs";
import React from "react";
import { CgLaptop } from "react-icons/cg";
import { BiMobile } from "react-icons/bi";
import Footer from "./Footer";

const PageSpeed = () => {
  return (
    <>
      <Box
        bg="#F1F1F1"
        w="98%"
        p={1}
        color="#4D0F9D"
        marginTop={10}
        marginLeft={3}
        fontWeight={"semibold"}
        borderRadius={1}
      >
        PageSeed Insights
      </Box>
      <Flex justifyContent={"flex-start"} color=" #4D0F9D" margin={3} gap={8}>
        <Box align={"center"} opacity={0.2}>
          <BiMobile />
          <Text>Mobile</Text>
        </Box>
        <Box
          align={"center"}
          _hover={{ fontWeight: "700", textDecoration: "underline" }}
        >
          <CgLaptop />
          <Text>Desktop</Text>
        </Box>
      </Flex>

      <VStack flexDirection={"column"} alignItems={"center"}>
        <Heading as="h3" size="md">
          Measure page quality
        </Heading>
        <Text
          as="p"
          paddingTop="1vw"
          width={"container.md"}
          textAlign={"center"}
        >
          Test your pages in a lab environment powered by page Speed Insights.
          Then get tips and recommendations to improve your user experience. For
          field performance, see Page Speed Insights tool
        </Text>
        <Flex marginTop={4} gap={3} width={500}>
          <Input variant="filled" placeholder="Enter a web page URL" />
          <Button
            colorScheme="purple"
            fontSize={12}
            size="md"
            background={"#4D0F9D"}
          >
            Analyse
          </Button>
        </Flex>
        <p>desktop</p>
        <Text width={"container.sm"} textAlign="center">
          Values are estimated and may vary. The performance score is calculated
          directly from these metrics. See calculator.
        </Text>
        <Flex align={"center"}>
          <BsFillTriangleFill color={"red"} />
          <Text paddingRight={10} paddingLeft={1}>
            0-49
          </Text>
          <BsFillSquareFill color={"orange"} />
          <Text paddingRight={10} paddingLeft={1}>
            50-89
          </Text>
          <BsFillCircleFill color={"green"} />
          <Text paddingRight={10} paddingLeft={1}>
            90-100
          </Text>
        </Flex>
        <Text padding={"8"}> METRICS</Text>
        <SimpleGrid padding={"8"} columns={[2, null, 3]} spacing="4">
          <Stack direction="row" alignItems="center">
            <BsFillCircleFill color="green" />
            <Text>First Contentful Paint</Text>
          </Stack>
          <Stack direction="row" alignItems="center">
            <BsFillCircleFill color="green" />
            <Text>Largest Contentful Paint</Text>
          </Stack>
          <Stack direction="row" alignItems="center">
            <BsFillTriangleFill color="red" />
            <Text>Total Blocking Time</Text>
          </Stack>
          <Stack direction="row" alignItems="center">
            <BsFillSquareFill color="orange" />
            <Text>Speed Index</Text>
          </Stack>
          <Stack direction="row" alignItems="center">
            <BsFillSquareFill color="orange" />
            <Text>Time to Interactive</Text>
          </Stack>
          <Stack direction="row" alignItems="center">
            <BsFillCircleFill color="green" />
            <Text>Cumulative Layout Shift</Text>
          </Stack>
        </SimpleGrid>
      </VStack>
      <Footer />
    </>
  );
};

export default PageSpeed;
