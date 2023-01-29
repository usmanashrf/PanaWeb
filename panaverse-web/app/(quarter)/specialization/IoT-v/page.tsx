'use client'
import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/navBar";
import { cardsVariants, introVariants } from "@/app/utils/motions";
import { Box, ChakraProvider, Flex, theme,Text,useColorModeValue, Grid, GridItem, Link, UnorderedList, ListItem, Divider, OrderedList } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function Quarter5IoT(){
    return (
      <ChakraProvider cssVarsRoot={undefined} theme={theme}>
        <NavBar></NavBar>
        <Box>
          <Flex direction={"column"}>
            <motion.nav
              variants={introVariants}
              initial="hidden"
              whileInView="show"
            >
              <Text
                align="center"
                fontSize={["20px", "25px", "25px"]}
                textColor={useColorModeValue("blue.600", "blue.200")}
                fontWeight="bold"
              >
                Embedded Programming using C and Rust <br></br> Quarter V
              </Text>
            </motion.nav>
            <motion.nav
              variants={cardsVariants}
              initial="hidden"
              whileInView="show"
            >
              <Flex mx="30px">
                <Grid templateColumns="repeat(10, 1fr)">
                  <GridItem colEnd={[3, 2]} textAlign="left">
                    {" "}
                    <Text mt="40px" fontSize={"2xl"} fontWeight={"bold"}>
                      {" "}
                      Description:
                    </Text>
                  </GridItem>
                  <GridItem colStart={[2, 3]} colEnd={11}>
                    <Text
                      borderRadius={"12px"}
                      boxShadow="dark-lg"
                      align={["justify"]}
                      my="20px"
                      p="20px"
                    >
                      This is an introductory course about using the C and Rust
                      Programming Languages on "Bare Metal" embedded systems,
                      such as Microcontrollers. We will start by introducing
                      embedded systems and move on to learn the C++ and Rust
                      programming languages. We'll learn about basic programming
                      concepts using C and Rust, then we will explore key
                      concepts in electronics, microcontrollers, and embedded
                      programming. It is a fast-paced, thorough introduction to
                      programming with C and Rust that will have you writing
                      programs, solving problems, burning your code on
                      microcontrollers, playing with GPIOs, and making things
                      that work in no time.
                    </Text>
                  </GridItem>
                </Grid>
              </Flex>
            </motion.nav>
            <motion.nav
              variants={cardsVariants}
              initial="hidden"
              whileInView="show"
            >
              <Flex mx="30px">
                <Grid templateColumns="repeat(10, 1fr)">
                  <GridItem colEnd={[3, 2]} textAlign="left">
                    <Text mt="40px" fontSize={"2xl"} fontWeight={"bold"}>
                      {" "}
                      Introduction{" "}
                    </Text>
                  </GridItem>
                  <GridItem colStart={[2, 3]} colEnd={11}>
                    <Text
                      borderRadius={"12px"}
                      boxShadow="dark-lg"
                      align={["justify"]}
                      my="20px"
                      p="20px"
                    >
                      <UnorderedList>
                        <ListItem>
                          {" "}
                          <Divider />
                          Introduction to the Internet of Things and Embedded
                          Systems (Weeks 1 and 2)
                          <Link
                            textColor={"blue.500"}
                            target="_blank"
                            href="https://docs.google.com/presentation/d/14OcW4HfS2i1Db1uKOU6SrckFEFjhSLMgfnHYB3XlEZo/edit?usp=shar"
                          >
                            https://docs.google.com/presentation/d/14OcW4HfS2i1Db1uKOU6SrckFEFjhSLMgfnHYB3XlEZo/edit?usp=shar
                          </Link>
                          <br></br>
                          What is the Fourth Industrial Revolution? <br />
                          What is IoT? <br />
                          Embedded Systems <br />
                          Hardware and Software for IoT <br />
                          Edge and Cloud Computing <br />
                          The future of IoT is AI <br />
                          Blockchain in the Internet of Things?
                          <br />
                          IoT + AI + Blockchain: The Fourth Industrial
                          Revolution has begun
                          <br />
                          How will Matter change the IoT Infrastructure and
                          address issues
                          <br />
                          Metaverse and IoT
                          <br />
                          <b>
                            Mid-Term I: Introduction to the Internet of Things
                            (IoT) Quiz in Week 3{" "}
                          </b>
                          <br />
                          Total Questions: 46, Total Time: 60 minutes
                        </ListItem>
                      </UnorderedList>
                    </Text>
                  </GridItem>
                </Grid>
              </Flex>
            </motion.nav>

            <motion.nav
              variants={cardsVariants}
              initial="hidden"
              whileInView="show"
            >
              <Flex mx="30px">
                <Grid templateColumns="repeat(10, 1fr)">
                  <GridItem colEnd={[3, 2]} textAlign="left">
                    <Text mt="40px" fontSize={"2xl"} fontWeight={"bold"}>
                      {" "}
                      C language{" "}
                    </Text>
                  </GridItem>
                  <GridItem colStart={[2, 3]} colEnd={11}>
                    <Text
                      borderRadius={"12px"}
                      boxShadow="dark-lg"
                      align={["justify"]}
                      my="20px"
                      p="20px"
                    >
                      <UnorderedList>
                        <ListItem>
                          The C Reference Book: The C programming language
                          Embedded Programming book: Internet of things with
                          ESP8266
                          <br />
                          <Link
                            textColor={"blue.500"}
                            target="_blank"
                            href="https://drive.google.com/drive/folders/1CZFxLSFoo9rl3le7KRuhUwLEV6h4xLXN?usp=sharing"
                          >
                            https://drive.google.com/drive/folders/1CZFxLSFoo9rl3le7KRuhUwLEV6h4xLXN?usp=sharing
                          </Link>
                        </ListItem>
                      </UnorderedList>
                    </Text>
                  </GridItem>
                </Grid>
              </Flex>
            </motion.nav>

            <motion.nav
              variants={cardsVariants}
              initial="hidden"
              whileInView="show"
            >
              <Flex mx="30px">
                <Grid templateColumns="repeat(10, 1fr)">
                  <GridItem colEnd={[3, 2]} textAlign="left">
                    <Text mt="40px" fontSize={"2xl"} fontWeight={"bold"}>
                      {" "}
                      Introduction to C Part 1 (Weeks 3B, 4, and 5){" "}
                    </Text>
                  </GridItem>
                  <GridItem colStart={[2, 3]} colEnd={11}>
                    <Text
                      borderRadius={"12px"}
                      boxShadow="dark-lg"
                      align={["justify"]}
                      my="20px"
                      p="20px"
                    >
                      <Text>
                        C environment Setup for (Windows, Linux, and Mac OS
                        systems) Chapters 1-2 of “The C programming language
                      </Text>
                      <UnorderedList>
                        <ListItem>Variable names types</ListItem>
                        <ListItem>Data types and sizes</ListItem>
                        <ListItem>Constants</ListItem>
                        <ListItem>Arithmetic operations</ListItem>
                        <ListItem>Logical and relational operators</ListItem>
                        <ListItem>Type conversions</ListItem>
                        <ListItem>Bitwise operators</ListItem>
                        <ListItem>Conditional expressions</ListItem>
                      </UnorderedList>
                    </Text>
                  </GridItem>
                </Grid>
              </Flex>
            </motion.nav>

            <motion.nav
              variants={cardsVariants}
              initial="hidden"
              whileInView="show"
            >
              <Flex mx="30px">
                <Grid templateColumns="repeat(10, 1fr)">
                  <GridItem colEnd={[3, 2]} textAlign="left">
                    <Text mt="40px" fontSize={"2xl"} fontWeight={"bold"}>
                      {" "}
                      Introduction to C Part 2 (Weeks 6 and 7){" "}
                    </Text>
                  </GridItem>
                  <GridItem colStart={[2, 3]} colEnd={11}>
                    <Text
                      borderRadius={"12px"}
                      boxShadow="dark-lg"
                      align={["justify"]}
                      my="20px"
                      p="20px"
                    >
                      <Text>
                        Topics 3 and 4 of “The C programming language”
                      </Text>
                      <UnorderedList>
                        <ListItem>
                          Control flow statements (else if, loops, switch, break
                          continue)
                        </ListItem>
                        <ListItem>
                          Function and Program structure(Returning and
                          non-returning, scope rules, Recursion)
                        </ListItem>
                      </UnorderedList>
                    </Text>
                  </GridItem>
                </Grid>
              </Flex>
            </motion.nav>

            <motion.nav
              variants={cardsVariants}
              initial="hidden"
              whileInView="show"
            >
              <Flex mx="30px">
                <Grid templateColumns="repeat(10, 1fr)">
                  <GridItem colEnd={[3, 2]} textAlign="left">
                    <Text mt="40px" fontSize={"2xl"} fontWeight={"bold"}>
                      {" "}
                      Introduction to Embedded Part 1 (Weeks 8){" "}
                    </Text>
                  </GridItem>
                  <GridItem colStart={[2, 3]} colEnd={11}>
                    <Text
                      borderRadius={"12px"}
                      boxShadow="dark-lg"
                      align={["justify"]}
                      my="20px"
                      p="20px"
                    >
                      <Text>
                        Basic Electronics and Introduction to microcontrollers
                        Chapter 1 of “Internet of things with ESP8266”
                      </Text>
                      <UnorderedList>
                        <ListItem>
                          Arduino IDE installation and env setup for ESP8266
                        </ListItem>
                        <ListItem>Burning your first code on ESP8266</ListItem>
                        <br />
                        Project-based Assignments will also be given.
                        <br />
                        <b> Mid-Term II: C Programming Quiz 1 in Week 9 </b>
                        <br />
                        Total Questions: 62, Total Time: 75 minutes
                      </UnorderedList>
                    </Text>
                  </GridItem>
                </Grid>
              </Flex>
            </motion.nav>

            <motion.nav
              variants={cardsVariants}
              initial="hidden"
              whileInView="show"
            >
              <Flex mx="30px">
                <Grid templateColumns="repeat(10, 1fr)">
                  <GridItem colEnd={[3, 2]} textAlign="left">
                    <Text mt="40px" fontSize={"2xl"} fontWeight={"bold"}>
                      {" "}
                      Introduction to Embedded Part 2 (Weeks 9-12){" "}
                    </Text>
                  </GridItem>
                  <GridItem colStart={[2, 3]} colEnd={11}>
                    <Text
                      borderRadius={"12px"}
                      boxShadow="dark-lg"
                      align={["justify"]}
                      my="20px"
                      p="20px"
                    >
                      <Text>
                        Chapters 2-5 of “Internet of things with ESP8266”{" "}
                      </Text>
                      <UnorderedList>
                        <ListItem>
                          Connecting your hardware to wifi.
                          <br />
                          <Link
                            textColor={"blue.500"}
                            target="_blank"
                            href="https://randomnerdtutorials.com/wifimanager-with-esp8266-autoconnect-custom-parameter-and-manage-your-ssid-and-password/"
                          >
                            https://randomnerdtutorials.com/wifimanager-with-esp8266-autoconnect-custom-parameter-and-manage-your-ssid-and-password/
                          </Link>
                        </ListItem>
                        <ListItem>
                          Reading data from GPIOs.
                          <br />
                          <Link
                            textColor={"blue.500"}
                            target="_blank"
                            href="https://randomnerdtutorials.com/esp8266-nodemcu-digital-inputs-outputs-arduino/#:~:text=ESP8266%20NodeMCU%20Read%20Digital%20Inputs,number)%20you%20are%20referring%20to."
                          >
                            https://randomnerdtutorials.com/esp8266-nodemcu-digital-inputs-outputs-arduino/#:~:text=ESP8266%20NodeMCU%20Read%20Digital%20Inputs,number
                          </Link>
                        </ListItem>

                        <ListItem>
                          Controlling LEDs
                          <br />
                        </ListItem>

                        <ListItem>
                          Reading data from digital sensors.
                          <br />
                          <Link
                            textColor={"blue.500"}
                            target="_blank"
                            href="https://randomnerdtutorials.com/esp32-dht11-dht22-temperature-humidity-sensor-arduino-ide/"
                          >
                            https://randomnerdtutorials.com/esp32-dht11-dht22-temperature-humidity-sensor-arduino-ide/
                          </Link>
                        </ListItem>

                        <ListItem>
                          Cloud data logging.
                          <br />
                          <Link
                            textColor={"blue.500"}
                            target="_blank"
                            href="https://tttapa.github.io/ESP8266/Chap16%20-%20Data%20Logging.html"
                          >
                            https://tttapa.github.io/ESP8266/Chap16%20-%20Data%20Logging.html
                          </Link>
                          <br />
                          <Link
                            textColor={"blue.500"}
                            target="_blank"
                            href="https://circuitdigest.com/microcontroller-projects/nodemcu-datalogger-to-save-temperature-and-pressure-data-on-thinger-io-cloud-platform"
                          >
                            https://circuitdigest.com/microcontroller-projects/nodemcu-datalogger-to-save-temperature-and-pressure-data-on-thinger-io-cloud-platform
                          </Link>
                          <br />
                          <Link
                            textColor={"blue.500"}
                            target="_blank"
                            href="https://iotdesignpro.com/projects/nodemcu-data-logger-to-upload-data-on-webserver"
                          >
                            https://iotdesignpro.com/projects/nodemcu-data-logger-to-upload-data-on-webserver
                          </Link>
                        </ListItem>
                        <ListItem>
                          Displaying data on the cloud
                          <br />
                          <Link
                            textColor={"blue.500"}
                            target="_blank"
                            href="https://github.com/adesolasamuel/NodeMCU-DHT-Data-to-Arduino-IoT-Cloud"
                          >
                            https://github.com/adesolasamuel/NodeMCU-DHT-Data-to-Arduino-IoT-Cloud
                          </Link>
                        </ListItem>

                        <ListItem>
                          Controlling controller remotely.
                          <br />
                          <Link
                            textColor={"blue.500"}
                            target="_blank"
                            href="https://www.instructables.com/Control-ESP8266-Over-the-Internet-from-Anywhere/"
                          >
                            https://www.instructables.com/Control-ESP8266-Over-the-Internet-from-Anywhere/
                          </Link>
                        </ListItem>

                        <ListItem>
                          Controlling a lamp anywhere in the world
                        </ListItem>
                        <ListItem>
                          Interacting with different web services
                        </ListItem>
                      </UnorderedList>
                    </Text>
                  </GridItem>
                </Grid>
              </Flex>
            </motion.nav>

            <motion.nav
              variants={cardsVariants}
              initial="hidden"
              whileInView="show"
            >
              <Flex mx="30px">
                <Grid templateColumns="repeat(10, 1fr)">
                  <GridItem colEnd={[3, 2]} textAlign="left">
                    <Text mt="40px" fontSize={"2xl"} fontWeight={"bold"}>
                      {" "}
                      Extra Weeks in the Course{" "}
                    </Text>
                  </GridItem>
                  <GridItem colStart={[2, 3]} colEnd={11}>
                    <Text
                      borderRadius={"12px"}
                      boxShadow="dark-lg"
                      align={["justify"]}
                      my="20px"
                      p="20px"
                    >
                      <Text>
                        Embedded Programming using Rust (Extra Weeks in the
                        Course)
                      </Text>
                      <UnorderedList>
                        <ListItem>
                          <Link
                            textColor={"blue.500"}
                            target="_blank"
                            href="https://www.rust-lang.org/what/embedded "
                          >
                            https://www.rust-lang.org/what/embedded
                          </Link>
                        </ListItem>
                        <ListItem>
                          <Link
                            textColor={"blue.500"}
                            target="_blank"
                            href="https://crates.io/crates/esp8266"
                          >
                            https://crates.io/crates/esp8266{" "}
                          </Link>
                        </ListItem>
                      </UnorderedList>
                    </Text>
                  </GridItem>
                </Grid>
              </Flex>
            </motion.nav>

            <motion.nav
              variants={cardsVariants}
              initial="hidden"
              whileInView="show"
            >
              <Flex mx="30px">
                <Grid templateColumns="repeat(10, 1fr)">
                  <GridItem colEnd={[3, 2]} textAlign="left">
                    <Text mt="40px" fontSize={"2xl"} fontWeight={"bold"}>
                      {" "}
                      Hardware Requirements{" "}
                    </Text>
                  </GridItem>
                  <GridItem colStart={[2, 3]} colEnd={11}>
                    <Text
                      borderRadius={"12px"}
                      boxShadow="dark-lg"
                      align={["justify"]}
                      my="20px"
                      p="20px"
                    >
                      <Text>
                        Embedded Programming using Rust (Extra Weeks in the
                        Course)
                      </Text>
                      <UnorderedList>
                        <ListItem>Esp8266 (Node MCU)</ListItem>
                        <ListItem>Jumper Wires</ListItem>
                        <ListItem>Bread Board</ListItem>
                        <ListItem>LEDs</ListItem>
                        <ListItem>
                          Sensors: (Dht11, ultrasonic sensor, IR sensor)
                        </ListItem>
                      </UnorderedList>
                    </Text>
                  </GridItem>
                </Grid>
              </Flex>
            </motion.nav>
          </Flex>
        </Box>
        <Footer></Footer>
      </ChakraProvider>
    );
}