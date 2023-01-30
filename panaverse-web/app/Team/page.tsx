'use client'
import { Avatar, Box, ChakraProvider,Text, Divider, Flex, SkeletonCircle, SkeletonText, useColorModeValue,theme, Card, CardHeader, Heading, CardBody, Stack, StackDivider, HStack, Link, Spacer, Grid, GridItem } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import NavBar from "../components/navBar";
import { FacebookIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "../images/socialIcons";
import { qtr1Variants, qtr2Variants, qtr3Variants } from "../utils/motions";


export default function Team(){
    return (
      <ChakraProvider cssVarsRoot={undefined} theme={theme}>
        <NavBar></NavBar>
        <Box my="40px" mb="80px" alignItems={"center"} >
    
          <Flex direction={["column","column","row"]} >
          <Grid templateColumns='repeat(3, 1fr)' gap={4}>
          <GridItem w='100%'>
          <motion.nav variants={qtr1Variants} initial="hidden" whileInView="show">
          <Card
              boxShadow="dark-lg"
              bg={useColorModeValue("WhiteAlpha.800", "gray.700")}
              color={useColorModeValue("grey:800", "gray.700")}
              mx="10px"
              my="20px"
            >
              <CardHeader>
                <HStack spacing="24px">
                  <Box>
                    <Avatar name="Zia Khan" src="/ZiaKhan.png" />
                  </Box>

                  <Box>
                    {" "}
                    <Heading size="md" mt="20px">
                      Zia Khan
                    </Heading>
                  </Box>
                </HStack>
              </CardHeader>
              <Grid justifyContent="flex-end" mr="20px">
                <Flex>
                  <Link mx="5px" href="https://www.facebook.com/ziakhan">
                    <FacebookIcon></FacebookIcon>
                  </Link>

                  <Link mx="5px" href="https://twitter.com/ziakhan?lang=en">
                    <TwitterIcon></TwitterIcon>
                  </Link>
                  <Link mx="5px" href="https://pk.linkedin.com/in/ziaukhan">
                    {" "}
                    <LinkedinIcon></LinkedinIcon>
                  </Link>
                </Flex>
              </Grid>
              <CardBody>
                <Stack divider={<StackDivider />} spacing="4">
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Lead Faculty Member
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      Teaching Web3 and Metaverse technologies
                    </Text>
                  </Box>

                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Classes:
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      Taking 4 onsite classes all over the Pakistan in a week.
                    </Text>
                  </Box>
                </Stack>
              </CardBody>
            </Card>
            </motion.nav>
          </GridItem>
          <motion.nav variants={qtr2Variants} initial="hidden" whileInView="show">
          <GridItem w='100%' >
            <Card
              boxShadow="dark-lg"
              bg={useColorModeValue("WhiteAlpha.800", "gray.700")}
              color={useColorModeValue("grey:800", "gray.700")}
              mx="10px"
              my="20px"
            >
              <CardHeader>
                <HStack spacing="24px">
                  <Box>
                    <Avatar name="Hira Khan" src="/HiraKhan.png" />
                  </Box>
                  <Box>
                    {" "}
                    <Heading size="md">Hira Khan</Heading>
                  </Box>
                </HStack>
              </CardHeader>
              <Grid justifyContent="flex-end" mr="20px">
                <Flex>
                  <Link mx="5px" href="https://www.facebook.com/ziakhan">
                    <FacebookIcon></FacebookIcon>
                  </Link>

                  <Link mx="5px" href="https://twitter.com/ziakhan?lang=en">
                    <TwitterIcon></TwitterIcon>
                  </Link>
                  <Link mx="5px" href="https://pk.linkedin.com/in/hira-khan-76523540">
                    {" "}
                    <LinkedinIcon></LinkedinIcon>
                  </Link>
                </Flex>
              </Grid>
              <CardBody>
                <Stack divider={<StackDivider />} spacing="4">
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Director at the Women Empowerment Div.
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      Teaching TypeScript and NextJs technologies
                    </Text>
                  </Box>

                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Classes:
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      Taking 1 online classes in a week.
                    </Text>
                  </Box>
                </Stack>
              </CardBody>
            </Card>
            </GridItem>            
            </motion.nav>
            <motion.nav variants={qtr3Variants} initial="hidden" whileInView="show">
            <GridItem w='100%'>
            <Card
              boxShadow="dark-lg"
              bg={useColorModeValue("WhiteAlpha.800", "gray.700")}
              color={useColorModeValue("grey:800", "gray.700")}
              mx="10px"
              my="20px"
            >
              <CardHeader>
                <HStack spacing="24px">
                  <Box>
                    <Avatar name="Adil Altaf" src="/adil.jpg" />
                  </Box>
                  <Box>
                    {" "}
                    <Heading size="md">Adil Altaf</Heading>
                  </Box>
                </HStack>
              </CardHeader>
              <Grid justifyContent="flex-end" mr="20px">
                <Flex>
                  <Link mx="5px" href="https://www.facebook.com/piaic">
                    <FacebookIcon></FacebookIcon>
                  </Link>

                  <Link mx="5px" href="https://twitter.com/ziakhan?lang=en">
                    <TwitterIcon></TwitterIcon>
                  </Link>
                  <Link mx="5px" href="https://pk.linkedin.com/in/hira-khan-76523540">
                    {" "}
                    <LinkedinIcon></LinkedinIcon>
                  </Link>
                </Flex>
              </Grid>
              <CardBody>
                <Stack divider={<StackDivider />} spacing="4">
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                    Full Stack Cloud Developer
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      Teaching TypeScript and NextJs technologies
                    </Text>
                  </Box>

                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Classes:
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      Taking 1 online classes in a week.
                    </Text>
                  </Box>
                </Stack>
              </CardBody>
            </Card>
            </GridItem>
            </motion.nav>
            
            <motion.nav variants={qtr3Variants} initial="hidden" whileInView="show">
            <GridItem w='100%'>
            <Card
              boxShadow="dark-lg"
              bg={useColorModeValue("WhiteAlpha.800", "gray.700")}
              color={useColorModeValue("grey:800", "gray.700")}
              mx="10px"
              my="20px"
            >
              <CardHeader>
                <HStack spacing="24px">
                  <Box>
                    <Avatar name="Daniyal Nagori" src="/Daniyal.png" />
                  </Box>
                  <Box>
                    {" "}
                    <Heading size="md">Daniyal Nagori</Heading>
                  </Box>
                </HStack>
              </CardHeader>
              <Grid justifyContent="flex-end" mr="20px">
                <Flex>
                  <Link mx="5px" href="https://www.facebook.com/piaic">
                    <FacebookIcon></FacebookIcon>
                  </Link>

                  <Link mx="5px" href="https://twitter.com/ziakhan?lang=en">
                    <TwitterIcon></TwitterIcon>
                  </Link>
                  <Link mx="5px" href="https://pk.linkedin.com/in/hira-khan-76523540">
                    {" "}
                    <LinkedinIcon></LinkedinIcon>
                  </Link>
                </Flex>
              </Grid>
              <CardBody>
                <Stack divider={<StackDivider />} spacing="4">
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                    Software Development Lead
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      Teaching TypeScript and NextJs technologies
                    </Text>
                  </Box>

                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Classes:
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      Taking 1 online classes in a week.
                    </Text>
                  </Box>
                </Stack>
              </CardBody>
            </Card>
            </GridItem>
            </motion.nav>
            </Grid>
          </Flex>
          
        </Box>

        <Divider />
        <Footer></Footer>
      </ChakraProvider>
    );
}