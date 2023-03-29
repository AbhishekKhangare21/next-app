import {
  Button,
  Flex,
  Container,
  Heading,
  Input,
  Box,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

import { RiBubbleChartLine } from "react-icons/ri";
import { AiOutlineCalendar, AiOutlineChrome } from "react-icons/ai";
import {
  BsFillTriangleFill,
  BsFillSquareFill,
  BsFillCircleFill,
} from "react-icons/bs";

import { IoMdStopwatch } from "react-icons/io";
import React from "react";
import { CgLaptop } from "react-icons/cg";
import { BiMobile, BiTachometer } from "react-icons/bi";

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
        borderRadius={2}
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
        <Flex paddingTop={"4"} gap={3} width={500}>
          <Input variant="filled" placeholder="Enter a web page URL" />
          <Button
            colorScheme="purple"
            fontSize={12}
            size="md"
            paddingLeft={10}
            paddingRight={10}
            background={"#4D0F9D"}
          >
            Analyse
          </Button>
        </Flex>
        <Box width={"96"} h={"96"} bg={"whatsapp.200"}>
          Chart Should Here
        </Box>
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
        <SimpleGrid
          padding={"8"}
          width={"5xl"}
          columns={[2, null, 3]}
          spacing="4"
        >
          <Stack direction="row" alignItems="center">
            <BsFillCircleFill color="green" />
            <Text>First Contentful Paint</Text>
            <Text color="green">0.4s</Text>
          </Stack>
          <Stack direction="row" alignItems="center">
            <BsFillCircleFill color="green" />
            <Text>Largest Contentful Paint</Text>
            <Text color="green">0.1s</Text>
          </Stack>
          <Stack direction="row" alignItems="center">
            <BsFillTriangleFill color="red" />
            <Text>Total Blocking Time</Text>
            <Text color="red">1,190 ms</Text>
          </Stack>
          <Stack direction="row" alignItems="center">
            <BsFillSquareFill color="orange" />
            <Text>Speed Index</Text>
            <Text color="red">1.7s</Text>
          </Stack>
          <Stack direction="row" alignItems="center">
            <BsFillSquareFill color="orange" />
            <Text>Time to Interactive</Text>
            <Text color="red">3.8s</Text>
          </Stack>
          <Stack direction="row" alignItems="center">
            <BsFillCircleFill color="green" />
            <Text>Cumulative Layout Shift</Text>
            <Text color="green">0.004</Text>
          </Stack>
        </SimpleGrid>
      </VStack>
      <Box marginTop={8}>
        <Container
          maxW={"7xl"}
          py={3}
          px={10}
          bg={"#F1F1F1"}
          borderRadius={"xl"}
        >
          <SimpleGrid columns={[2, null, 3]} spacing="2">
            <Stack direction="row" alignItems="center">
              <AiOutlineCalendar color="background: #B6B6B6" />
              <Text>Captured at 16 Feb 2023, 11:07 GMT+5:30</Text>
            </Stack>
            <Stack direction="row" alignItems="center">
              <CgLaptop color="background: #B6B6B6" />
              <Text>Emulated desktop with Lighthouse 9.6.6</Text>
            </Stack>
            <Stack direction="row" alignItems="center">
              <RiBubbleChartLine color="background: #B6B6B6" />
              <Text>Total Blocking Time</Text>
            </Stack>
            <Stack direction="row" alignItems="center">
              <IoMdStopwatch color="background: #B6B6B6" />
              <Text>Initial page load</Text>
            </Stack>
            <Stack direction="row" alignItems="center">
              <BiTachometer color="background: #B6B6B6" />
              <Text>Custom throttling</Text>
            </Stack>
            <Stack direction="row" alignItems="center">
              <AiOutlineChrome color="background: #B6B6B6" />
              <Text>Using HeadlessChromium 109.0.5414.101 with lr</Text>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
};

export default PageSpeed;
