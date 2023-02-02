import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Stack,
  Image,
  Text,
  Divider,
  VStack,
  Grid,
  GridItem,
  Show,
  useColorModeValue
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { cardsVariants, navVariants } from "../utils/motions";

export default function Cities() {
  return (
    <Box
      position={"relative"}
      mb="200px"
      pb="50px"
      bg={useColorModeValue("gray.100", "gray.700")}
    >
      <Divider></Divider>

      <motion.nav variants={navVariants} initial="hidden" whileInView="show">
        <Text
          my="40px"
          align={"center"}
          fontSize={["40px", "35px", "45px"]}
          fontWeight="bold"
          textColor={useColorModeValue("blue.600", "blue.300")}
        >
          Operational Cities
        </Text>
      </motion.nav>
      <Flex direction={["column","column","row"]}>
      <Image src="/pakistanMap.png"></Image>

        <VStack mx="20px"  direction={"row"}>
          <Grid templateColumns={["repeat(1, 1fr)"]} gap={[4]}>
            <GridItem w="100%">
              <motion.nav
                variants={cardsVariants}
                initial="hidden"
                whileInView="show"
              >
                <Card
                  direction={{ base: "column", md: "row", sm: "row" }}
                  overflow="hidden"
                  variant="outline"
                  boxShadow="dark-lg"
                  borderRadius={"2xl"}
                >
                  <Image
                    objectFit="cover"
                    maxW={{ base: "100%", sm: "200px" }}
                    src="/KHR.png"
                    alt="Khr"
                  />
                  <Stack>
                    <CardBody>
                      <Heading size="md">Karachi</Heading>
                      <Text py="2">Location: Bharia Auditorium</Text>
                      <Text>Tue and Wed 6:00 pm to 10:00 pm</Text>
                    </CardBody>
                  </Stack>
                </Card>
              </motion.nav>
            </GridItem>

            <GridItem w="100%">
              <motion.nav
                variants={cardsVariants}
                initial="hidden"
                whileInView="show"
              >
                <Card
                  direction={{ base: "column",md: "row", sm: "row" }}
                  overflow="hidden"
                  variant="outline"
                  boxShadow="dark-lg"
                  borderRadius={"2xl"}
                >
                  <Image
                    objectFit="cover"
                    maxW={{ base: "100%", sm: "200px" }}
                    src="/peshawar.png"
                    alt="Pesh"
                  />
                  <Stack>
                    <CardBody>
                      <Heading size="md">Peshawar</Heading>
                      <Text py="2">Peshawar CECOS</Text>
                      <Text>on Fri 3:00 pm to 7:00 pm</Text>
                    </CardBody>
                  </Stack>
                </Card>
              </motion.nav>
            </GridItem>

            <GridItem w="100%">
              <motion.nav
                variants={cardsVariants}
                initial="hidden"
                whileInView="show"
              >
                <Card
                  direction={{ base: "column", md: "row",sm: "row" }}
                  overflow="hidden"
                  variant="outline"
                  boxShadow="dark-lg"
                  borderRadius={"2xl"}
                >
                  <Image
                    objectFit="cover"
                    maxW={{ base: "100%", sm: "200px" }}
                    src="/ISB.png"
                    alt="ISB"
                  />
                  <Stack>
                    <CardBody>
                      <Heading size="md">Islamabad</Heading>
                      <Text py="2">Location: Air University</Text>
                      <Text>on Sat 9:00 am to 6:00 pm</Text>
                    </CardBody>
                  </Stack>
                </Card>
              </motion.nav>
            </GridItem>
            <GridItem w="100%">
              <motion.nav
                variants={cardsVariants}
                initial="hidden"
                whileInView="show"
              >
                <Card
                  direction={{ base: "column",md: "row", sm: "row" }}
                  overflow="hidden"
                  variant="outline"
                  boxShadow="dark-lg"
                  borderRadius={"2xl"}
                >
                  <Image
                    objectFit="cover"
                    maxW={{ base: "column", sm: "200px" }}
                    src="/LHR.png"
                    alt="Lhr"
                  />
                  <Stack>
                    <CardBody>
                      <Heading size="md">Lahore</Heading>

                      <Text py="2">Location: UMT</Text>
                      <Text>on Sun 9:00 am to 6:00 pm</Text>
                    </CardBody>

                  </Stack>
                </Card>
              </motion.nav>
            </GridItem>
          </Grid>
        </VStack>

      </Flex>
    </Box>
  );
}
