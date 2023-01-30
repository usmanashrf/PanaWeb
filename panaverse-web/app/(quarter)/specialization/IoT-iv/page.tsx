'use client'
import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/navBar";
import { cardsVariants, introVariants } from "@/app/utils/motions";
import { Box, ChakraProvider, Flex, theme,Text,useColorModeValue, Grid, GridItem, Link, UnorderedList, ListItem, Divider, OrderedList } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function Quarter4Iot(){
    return (
      <ChakraProvider cssVarsRoot={undefined} theme={theme}>
        <NavBar></NavBar>
        <Box mb="100px">
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
                Ambient Computing and <br></br>IoT Specialization <br></br> Quarter iV
              </Text>
            </motion.nav>
             <motion.nav variants={cardsVariants} initial="hidden" whileInView="show">
            <Flex mx="30px">
              <Grid templateColumns="repeat(10, 1fr)">
                <GridItem colEnd={[3,2]} textAlign="left">
                  {" "}
                  <Text
                    mt="40px"
                    fontSize={"2xl"}
                    fontWeight={"bold"}
                  >
                    {" "}
                    Description:
                  </Text>
                </GridItem>
                <GridItem colStart={[2,3]} colEnd={11}>
                  <Text
                    borderRadius={"12px"}
                    boxShadow="dark-lg"
                    align={["justify"]}
                    my="20px"
                    p="20px"
                  >
                  Ambient computing, also commonly referred to as ubiquitous computing, 
                  is the concept of blending computing power into our everyday lives in a 
                  way that is embedded into our surroundings - invisible but useful. 
                  In a multi-device world, people don't want to spend their life fussing with technology.
                   An ambient approach gets the tech out of your way so you can live your life while
                    getting the help you need. It doesn't matter what device you're using, 
                    what context you're in, whether you're talking, typing, or tapping. 
                    The technology in your life works together seamlessly. Ambient computing uses
                     all aspects of modern-day technology, including voice assistants,
                   artificial intelligence, sensors, connectivity, cloud computing and more.
                   <br/>
                   If you were thinking that the IoT and ambient computing sound a lot alike, 
                   you aren't wrong; the two concepts are intertwined. IoT refers to the vast array 
                   of devices that connect to the internet to optimize their functionality,
                    like smart sensors and smart speakers: ambient computing builds on that.
                    Ambient computing focuses on the interaction between these devices once
                     they are connected.
                    <br></br>
                    Matter, the next-generation smart home standard, 
                    solves many smart home pain points while bringing all our 
                    IoT devices together. Some of the biggest tech companies are
                     working together to make Matter a unified protocol for future smart homes.
                      These companies include Apple, Amazon, and Google. 
                      This means Apple HomeKit, Amazon Alexa, Samsung SmartThings,
                       Google Nest, and Samsung SmartThings will support the Matter 
                       standard by default for all new devices.
                  </Text>
                  
                </GridItem>
              </Grid>
            </Flex>
            </motion.nav>
            <motion.nav variants={cardsVariants} initial="hidden" whileInView="show">
            <Flex mx="30px">
              <Grid templateColumns="repeat(10, 1fr)">
                <GridItem colEnd={[3,2]} textAlign="left">
                  <Text
                    mt="40px"
                    
                    fontSize={"2xl"}
                    fontWeight={"bold"}
                  >
                    {" "}
                    Alexa Skill {" "}
                  </Text>
                </GridItem>
                <GridItem colStart={[2,3]} colEnd={11}>
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
                        Alexa Skill Developement 
                        <Divider/>
                        
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://developer.amazon.com/en-US/alexa"
                    >
                   https://developer.amazon.com/en-US/alexa
                    </Link>
                      </ListItem>
                      <ListItem>
                        {" "}
                        Alexa with Matter Protocol
                        <Divider/>
                        
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://developer.amazon.com/en-US/alexa/matter"
                    >
                  https://developer.amazon.com/en-US/alexa/matter
                    </Link>
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://developer.amazon.com/en-US/blogs/alexa/device-makers/2022/07/alexa-live-2022-ack-sdk-matter.html"
                    >
                 https://developer.amazon.com/en-US/blogs/alexa/device-makers/2022/07/alexa-live-2022-ack-sdk-matter.html
                    </Link>
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