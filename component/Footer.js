import { Box, Container, Stack, SimpleGrid, Link } from "@chakra-ui/react";
import { CgLaptop } from "react-icons/cg";
import { AiOutlineCalendar, AiOutlineChrome } from "react-icons/ai";
import { BiTachometer } from "react-icons/bi";
import { RiBubbleChartLine } from "react-icons/ri";
import { IoMdStopwatch } from "react-icons/io";

export default function Footer() {
  return (
    <Box>
      <Container
        maxW={"7xl"}
        py={3}
        px={10}
        bg={"#F1F1F1"}
        borderRadius={"2xl"}
      >
        <SimpleGrid columns={[2, null, 3]} spacing="2" bg={"#F1F1F1"}>
          <Stack direction="row" alignItems="center" bg={"#F1F1F1"}>
            <AiOutlineCalendar color="background: #B6B6B6" />
            <Link>Captured at 16 Feb 2023, 11:07 GMT+5:30</Link>
          </Stack>
          <Stack direction="row" alignItems="center" bg={"#F1F1F1"}>
            <CgLaptop color="background: #B6B6B6" />
            <Link>Emulated desktop with Lighthouse 9.6.6</Link>
          </Stack>
          <Stack direction="row" alignItems="center" bg={"#F1F1F1"}>
            <RiBubbleChartLine color="background: #B6B6B6" />
            <Link>Total Blocking Time</Link>
          </Stack>
          <Stack direction="row" alignItems="center" bg={"#F1F1F1"}>
            <IoMdStopwatch color="background: #B6B6B6" />
            <Link>Initial page load</Link>
          </Stack>
          <Stack direction="row" alignItems="center" bg={"#F1F1F1"}>
            <BiTachometer color="background: #B6B6B6" />
            <Link>Custom throttling</Link>
          </Stack>
          <Stack direction="row" alignItems="center" bg={"#F1F1F1"}>
            <AiOutlineChrome color="background: #B6B6B6" />
            <Link>Using HeadlessChromium 109.0.5414.101 with lr</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
