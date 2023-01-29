'use client'
import {Box, Flex, Text, Image,  useColorModeValue, Button, Show, Hide, VStack, HStack, Card, CardBody, Stack, Heading, Divider, CardFooter, ButtonGroup, Link, ChakraProvider, theme} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/navBar";
import { introVariants, qtr1Variants, qtr2Variants, qtr3Variants, qtr4Variants } from "@/app/utils/motions";

export default function Quarter4(){
    return (
      <ChakraProvider cssVarsRoot={undefined} theme={theme}>
        <NavBar></NavBar>
        <Box margin={"auto"} mt="50px" w="75%" mb="80px">
          <motion.nav
            variants={introVariants}
            initial="hidden"
            whileInView="show"
          >
            <Text
              fontSize={["40px", "35px", "45px"]}
              fontWeight="bold"
              textColor={useColorModeValue("blue.600", "blue.300")}
              align="center"
            >
              Specialization
            </Text>
            <Text align="center">
              The software industry is moving at a neck-breaking pace, on the
              other hand, Pakistan is facing a financial crunch that has the
              potential to destroy us. The main focus of this integrated program
              is to increase IT Exports of Pakistan and help the developers earn
              while they learn. We are totally focusing our courses on helping
              our students earn dollars ASAP. Our Web 3, Metaverse, AI,
              Blockchain, Cloud-Native, and IoT courses are merging into a
              single course with specializations
            </Text>
            <Divider></Divider>
          </motion.nav>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Text
              fontSize={["15px", "30px", "30px"]}
              fontWeight="bold"
              ml={"10px"}
              textAlign="center"
              mt={"40px"}
            >
              Web 3 and Metaverse <br /> Specialization
            </Text>
          </motion.div>
          <Flex
            direction={["column", "column", "row"]}
            bg={useColorModeValue("white.100", "gray.800")}
            mx={["0px", "200px"]}
          >
            <motion.nav
              variants={qtr1Variants}
              initial="hidden"
              whileInView="show"
            >
              <Card
                maxW="sm"
                mt="30px"
                alignItems="center"
                ml="25px"
                mx="10px"
                boxShadow="dark-lg"
              >
                <CardBody>
                  <Image
                    src="/web3.png"
                    alt="First Quarter"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md" alignItems="center">
                      Quarter IV
                    </Heading>
                    <Text alignItems="center">
                      Developing Smart Contracts and Planet-Scale Web 3.0 Dapps
                      Duration: 13 Weeks
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <Link href="/specialization/wmd-iv">
                    <Button variant="ghost" colorScheme="blue">
                      See more..
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.nav>

            <motion.nav
              variants={qtr2Variants}
              initial="hidden"
              whileInView="show"
            >
              <Card
                mt="30px"
                alignItems="center"
                ml="25px"
                mx="10px"
                maxW="sm"
                boxShadow="dark-lg"
              >
                <CardBody>
                  <Image
                    src="/web3Q5.png"
                    alt="First Quarter"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md" alignItems="center">
                      Quarter V
                    </Heading>
                    <Text alignItems="center">
                      Developing Planet-Scale Open Virtual and Augmented
                      Metaverse Experiences
                    </Text>
                    <Text alignItems="center">Duration: 13 Weeks</Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <Link href="/specialization/wmd-v">
                    <Button variant="ghost" colorScheme="blue">
                      See more..
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.nav>
          </Flex>
          {/* //==================================================================== */}
          <Divider></Divider>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Text
              fontSize={["15px", "30px", "30px"]}
              fontWeight="bold"
              ml={"10px"}
              textAlign="center"
              mt={"40px"}
            >
              Artificial Intelligence (AI) and <br />
              Deep Learning Specialization
            </Text>
          </motion.div>
          <Flex
            direction={["column", "column", "row"]}
            bg={useColorModeValue("white.100", "gray.800")}
            mx={["0px", "200px"]}
          >
            <motion.nav
              variants={qtr1Variants}
              initial="hidden"
              whileInView="show"
            >
              <Card
                maxW="sm"
                mt="30px"
                alignItems="center"
                ml="25px"
                mx="10px"
                boxShadow="dark-lg"
              >
                <CardBody>
                  <Image
                    src="/AIQ4.png"
                    alt="First Quarter"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md" alignItems="center">
                      Quarter IV
                    </Heading>
                    <Text>
                      {" "}
                      Developing Planet-Scale Intelligent APIs and Python
                      Programming
                    </Text>
                    <Text alignItems="center">Duration: 13 Weeks</Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <Link href="/quarter1">
                    <Button variant="ghost" colorScheme="blue">
                      See more..
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.nav>

            <motion.nav
              variants={qtr2Variants}
              initial="hidden"
              whileInView="show"
            >
              <Card
                mt="30px"
                alignItems="center"
                ml="25px"
                mx="10px"
                maxW="sm"
                boxShadow="dark-lg"
              >
                <CardBody>
                  <Image
                    src="/AIQ5.png"
                    alt="First Quarter"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md" alignItems="center">
                      Quarter V
                    </Heading>

                    <Text alignItems="center">Deep Learning and MLOps</Text>
                    <Text>
                      Deep Learning, Tensorflow with Python, Second Edition 2nd
                      Edition{" "}
                    </Text>
                    <Text alignItems="center">Duration: 13 Weeks</Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <Link href="/quarter2">
                    <Button variant="ghost" colorScheme="blue">
                      See more..
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.nav>
          </Flex>

          {/* Cloud-Native Computing Specialization
============================================================================== */}


          <Divider></Divider>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Text
              fontSize={["15px", "30px", "30px"]}
              fontWeight="bold"
              ml={"10px"}
              textAlign="center"
              mt={"40px"}
            >
                Cloud-Native Computing <br/> Specialization
            </Text>
          </motion.div>
          <Flex
            direction={["column", "column", "row"]}
            bg={useColorModeValue("white.100", "gray.800")}
            mx={["0px", "200px"]}
          >
            <motion.nav
              variants={qtr1Variants}
              initial="hidden"
              whileInView="show"
            >
              <Card
                maxW="sm"
                mt="30px"
                alignItems="center"
                ml="25px"
                mx="10px"
                boxShadow="dark-lg"
              >
                <CardBody>
                  <Image
                    src="/KubQ4.png"
                    alt="First Quarter"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md" alignItems="center">
                      Quarter IV
                    </Heading>
                    <Text>
                      {" "}
                      Certified Kubernetes Application Developer (CKAD)
                    </Text>
                    <Text alignItems="center">Duration: 13 Weeks</Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <Link href="/quarter1">
                    <Button variant="ghost" colorScheme="blue">
                      See more..
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.nav>

            <motion.nav
              variants={qtr2Variants}
              initial="hidden"
              whileInView="show"
            >
              <Card
                mt="30px"
                alignItems="center"
                ml="25px"
                mx="10px"
                maxW="sm"
                boxShadow="dark-lg"
              >
                <CardBody>
                  <Image
                    src="/CldQ5.png"
                    alt="First Quarter"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md" alignItems="center">
                      Quarter V
                    </Heading>

                    <Text alignItems="center"> Developing Multi-Cloud Apps using CDK for Terraform
                    </Text>
                    <Text>CDK for Terraform</Text>
                    <Text alignItems="center">Duration: 13 Weeks</Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <Link href="/quarter2">
                    <Button variant="ghost" colorScheme="blue">
                      See more..
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.nav>
          </Flex>

{/* ============================================================================================================ */}

         <Divider></Divider>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Text
              fontSize={["15px", "30px", "30px"]}
              fontWeight="bold"
              ml={"10px"}
              textAlign="center"
              mt={"40px"}
            >
               Ambient Computing and <br/> IoT Specialization

            </Text>
          </motion.div>
          <Flex
            direction={["column", "column", "row"]}
            bg={useColorModeValue("white.100", "gray.800")}
            mx={["0px", "200px"]}
          >
            <motion.nav
              variants={qtr1Variants}
              initial="hidden"
              whileInView="show"
            >
              <Card
                maxW="sm"
                mt="30px"
                alignItems="center"
                ml="25px"
                mx="10px"
                boxShadow="dark-lg"
              >
                <CardBody>
                  <Image
                    src="/IOTQ4.png"
                    alt="First Quarter"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md" alignItems="center">
                      Quarter IV
                    </Heading>
                    <Text>
                      {" "}
                      Ambient Computing with Voice Assistants and Matter Devices
                    </Text>
                    <Text alignItems="center">Duration: 13 Weeks</Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <Link href="/quarter1">
                    <Button variant="ghost" colorScheme="blue">
                      See more..
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.nav>

            <motion.nav
              variants={qtr2Variants}
              initial="hidden"
              whileInView="show"
            >
              <Card
                mt="30px"
                alignItems="center"
                ml="25px"
                mx="10px"
                maxW="sm"
                boxShadow="dark-lg"
              >
                <CardBody>
                  <Image
                    src="/IOTQ5.png"
                    alt="First Quarter"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md" alignItems="center">
                      Quarter V
                    </Heading>

                    <Text alignItems="center"> Developing Multi-Cloud Apps using CDK for Terraform
                    </Text>
                    <Text>CDK for Terraform</Text>
                    <Text alignItems="center">Duration: 13 Weeks</Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <Link href="/quarter2">
                    <Button variant="ghost" colorScheme="blue">
                      See more..
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.nav>
          </Flex>

        </Box>
        <Footer></Footer>
      </ChakraProvider>
    );
}