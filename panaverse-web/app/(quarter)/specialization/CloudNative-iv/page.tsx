'use client'
import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/navBar";
import { cardsVariants, introVariants } from "@/app/utils/motions";
import { Box, ChakraProvider, Flex, theme,Text,useColorModeValue, Grid, GridItem, Link, UnorderedList, ListItem, Divider, OrderedList } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function Quarter4CC(){
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
                Cloud-Native Computing <br></br> Quarter V
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
                  Cloud-native architecture and technologies are an approach to designing, 
                  constructing, and operating workloads that are built in the cloud and take 
                  full advantage of the cloud computing model. Cloud-native technologies empower
                   organizations to build and run scalable applications in modern, 
                   dynamic environments such as public, private, and hybrid clouds. 
                   Containers, service meshes, microservices, immutable infrastructure,
                   and declarative APIs exemplify this approach.
                   <br/>
                   These techniques enable loosely coupled systems that are resilient,
                    manageable, and observable. Combined with robust automation, 
                    they allow engineers to make high-impact changes frequently and 
                    predictably with minimal toil.
                    <br></br>
                    Kubernetes is an open-source system for automating the deployment,
                     scaling, and management of containerized applications. 
                     In this course, you will learn how to develop cloud applications 
                     using cloud-native technologies like Containers, Kubernetes,
                      and CDK for Kubernetes.
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
                    Kubernetes{" "}
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
                        <Divider/>
                        Kubernetes: Up and Running: Dive into the Future of Infrastructure 3rd Edition
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://www.amazon.com/Kubernetes-Running-Dive-Future-Infrastructure/dp/109811020X/ref=sr_1_3"
                    >
                     https://www.amazon.com/Kubernetes-Running-Dive-Future-Infrastructure/dp/109811020X/ref=sr_1_3
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
                    Cloud Development{" "}
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
                    Cloud Development Kit for Kubernetes
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://cdk8s.io/"
                    >
                     https://cdk8s.io/
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