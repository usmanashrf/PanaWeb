'use client'
import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/navBar";
import { cardsVariants, introVariants } from "@/app/utils/motions";
import { Box, ChakraProvider, Flex, theme,Text,useColorModeValue, Grid, GridItem, Link, UnorderedList, ListItem, Divider, OrderedList } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function Quarter5CC(){
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
                Developing Multi-Cloud Apps <br/>using CDK for Terraform <br></br> Quarter V
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
                    Description
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
                  Terraform lets you use the same workflow to manage multiple providers and handle cross-cloud dependencies.
                   This simplifies management and orchestration for large-scale, 
                   multi-cloud infrastructures.
                   <br/>
                   Cloud Development Kit for Terraform (CDKTF) allows you to use familiar 
                   programming languages to define and provision infrastructure. 
                   This gives you access to the entire Terraform ecosystem without 
                   learning HashiCorp Configuration Language (HCL) and lets 
                   you leverage the power of your existing toolchain for testing,
                    dependency management, etc.
                
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
                    Terraform{" "}
                  </Text>
                </GridItem>
                <GridItem colStart={[2,3]} colEnd={11}>
                  <Text
                    borderRadius={"12px"}
                    boxShadow="dark-lg"
                    align={["justify"]}
                    my="20px"
                    p="20px"
                    ml="20px"
                  >
                        {" "}
                        CDK for Terraform
                        <Divider/>
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://developer.hashicorp.com/terraform/cdktf"
                    >
                    https://developer.hashicorp.com/terraform/cdktf
                    </Link>
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