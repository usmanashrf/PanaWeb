'use client'
import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/navBar";
import { cardsVariants, introVariants } from "@/app/utils/motions";
import { Box, ChakraProvider, Flex, theme,Text,useColorModeValue, Grid, GridItem, Link, UnorderedList, ListItem, Divider, OrderedList } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function Quarter4AI(){
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
                textColor={useColorModeValue("blue.600", "blue.300")}
                fontWeight="bold"
              >
                AI and Deep Learning Quarter IV
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
                   Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. The AI and Deep Learning Specialization is a foundational program that will aid in your comprehension of deep learning's potential, difficulties, and effects as well as equip you to take part in the creation of cutting-edge AI technology.
                    <br></br>
                    We will start this course by understanding the fundamentals and use cases for AI and move on to building next-gen intelligent apps using OpenAI’s powerful models and Next.js 13.
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
                    Introduction{" "}
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
                         Machine Learning, Data Science, and AI
                        <Divider/>
                        AI for Everyone
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://www.coursera.org/learn/ai-for-everyone"
                    >
                      https://www.coursera.org/learn/ai-for-everyone
                    </Link>
                    <br></br>
                    AI for Everyone Quiz in Week 3 
                    Total Questions: 60, Total Time: 75 minutes

                      </ListItem>
                    </UnorderedList>
                  </Text>
                </GridItem>
              </Grid>
            </Flex>
            </motion.nav>

          <motion.nav variants={cardsVariants} initial="hidden" whileInView="show">
           < Flex mx="30px">
              <Grid templateColumns="repeat(10, 1fr)">
                <GridItem colEnd={[3,2]} textAlign="left">
                  <Text
                    mt="40px"
                    fontSize={"2xl"}
                    fontWeight={"bold"}
                  >
                    {" "}
                   Next-Gen Intelligent Apps{" "}
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
                    Building Next-Gen Intelligent Apps with OpenAI’s Powerful Models We will cover GPT-4, ChatGPT, etc. and Next.js 13
                    <Divider/>
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://openai.com/api/"
                    >
                      https://openai.com/api/ 
                    </Link>
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://towardsdatascience.com/gpt-4-is-coming-soon-heres-what-we-know-about-it-64db058cfd45"
                    >
                      https://towardsdatascience.com/gpt-4-is-coming-soon-heres-what-we-know-about-it-64db058cfd45 
                    </Link>
                    </ListItem>
                    </UnorderedList>
                  </Text>
                </GridItem>
              </Grid>
            </Flex>
            </motion.nav>

            <motion.nav variants={cardsVariants} initial="hidden" whileInView="show">
            < Flex mx="30px">
              <Grid templateColumns="repeat(10, 1fr)">
                <GridItem colEnd={[3,2]} textAlign="left">
                  <Text
                    mt="40px"
                    fontSize={"2xl"}
                    fontWeight={"bold"}
                  >
                    {" "}
                    Python Crash Course 
                    {" "}
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
                    Python Crash Course, 2nd Edition: A Hands-On, Project-Based Introduction to Programming 2nd Edition
                    <br/>
                    <Link
                    textColor={"blue.500"}
                    target="_blank"
                    href="https://www.amazon.com/Python-Crash-Course-2nd-Edition/dp/1593279280/ref=sr_1_5">
                    https://www.amazon.com/Python-Crash-Course-2nd-Edition/dp/1593279280/ref=sr_1_5
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