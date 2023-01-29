'use client'
import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/navBar";
import { cardsVariants, introVariants } from "@/app/utils/motions";
import { Box, ChakraProvider, Flex, theme,Text,useColorModeValue, Grid, GridItem, Link, UnorderedList, ListItem, Divider, OrderedList } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function Quarter5WMD(){
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
                textColor={useColorModeValue("blue.600", "blue.300")}
                fontWeight="bold"
              >
                Web 3 and Metaverse Quarter V
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
                   The Web is the Metaverse. The metaverse requires an infrastructure that 
                   connects all of the metaverses so that we can travel between them. 
                   This is only achievable with open web-based metaverses. The internet and 
                   its browsers are magical. Federated but linked experiences connect pages, 
                   people, technology, businesses, standards, and nations. It's unlike anything
                    else. The metaverse should replicate the best qualities of the web - 
                    it should just be the web. We just have to extend online responsive design
                     from mobile to desktop to 3D, Augmented Reality, and Virtual Reality. 
                     This course will teach you how to build the Open Social Spatial Web with
                      WebXR and WebGPU technologies.
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
                    
                    fontSize={"xl"}
                    fontWeight={"bold"}
                  >
                    {" "}
                    Open Metaverse Web Development {" "}
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
                        Open Metaverse Learning Repo
                        <Divider/>
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://github.com/panaverse/metaverse-web"
                    >
                     https://github.com/panaverse/metaverse-web
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
                    fontSize={"xl"}
                    fontWeight={"bold"}
                  >
                    {" "}
                   Blender 3D asset Creation for the Metaverse (Remote Zoom Class){" "}
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
                    Blender development is being funded by heavyweights in the real-time 3D (RT3D) 
                    space such as Apple, Unity, AMD, Intel, Meta, NVIDIA, AWS, Epic Games, Adobe,
                     Microsoft, and Decentraland. It is expected to become the standard asset creation 
                     tool for metaverse.
                    <Divider/>
                    Blender 3.3+ Download
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://www.blender.org/download/"
                    >
                     https://www.blender.org/download/
                    </Link>
                    </ListItem>

                      <ListItem>
                      Blender 3.0 Beginner Tutorial 
                      <Divider/>
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://docs.google.com/document/d/1zPBgZAdftWa6WVa7UIFUqW_7EcqOYE0X743RqFuJL3o/edit"
                    >
                     https://docs.google.com/document/d/1zPBgZAdftWa6WVa7UIFUqW_7EcqOYE0X743RqFuJL3o/edit
                    </Link>
                      </ListItem>

                      <ListItem>
                      Blender 3.0 Hotkey
                      <Divider/>
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://docs.google.com/document/d/1zPBgZAdftWa6WVa7UIFUqW_7EcqOYE0X743RqFuJL3o/edit"
                    >
                     https://docs.google.com/document/d/1zPBgZAdftWa6WVa7UIFUqW_7EcqOYE0X743RqFuJL3o/edit 
                    </Link>
                      </ListItem>

                      <ListItem>
                      Blender Projects Textbook: Blender by Example 2nd Edition 
                      <Divider/>
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561"
                    >
                    https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561
                    </Link>
                      </ListItem>

                      <ListItem>
                      Blender Textbook: The Complete Guide to Blender Graphics: Computer Modeling & Animation 7th Edition by John M. Blain  
                      <Divider/>
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://www.amazon.com/Complete-Guide-Blender-Graphics-Animation/dp/103212167X/ref=sr_1_5"
                    >
                   https://www.amazon.com/Complete-Guide-Blender-Graphics-Animation/dp/103212167X/ref=sr_1_5
                    </Link>
                      </ListItem>
                      <ListItem>
                      Best Hardware Performance for Blender Rendering
                      <Divider/>
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://www.youtube.com/watch?v=H7T0SzdFHwg"
                    >
                  https://www.youtube.com/watch?v=H7T0SzdFHwg 
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
                    fontSize={"xl"}
                    fontWeight={"bold"}
                  >
                    {" "}
                    Assignment 1
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
                    Build a 3D Donut using Blender 3 as shown in these video tutorials 
                    <Link
                    textColor={"blue.500"}
                    target="_blank"
                    href="https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD">
                   https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD
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
                    fontSize={"xl"}
                    fontWeight={"bold"}
                  >
                    {" "}
                    Assignment 2
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
                    Build a Viking Scene using Blender 3 as shown in chapter 2 of the Book [Blender by Example 2nd Edition]
                    <Link
                    textColor={"blue.500"}
                    target="_blank"
                    href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561">
                        https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561</Link>
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
                    fontSize={"xl"}
                    fontWeight={"bold"}
                  >
                    {" "}
                    Assignment 3
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
                Modeling a Time Machine using Blender 3 as shown in chapters 3 and 4 of the Book Blender by Example 2nd Edition 
                    <Divider/>
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561"
                    >https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561    
                    </Link>
                </ListItem>
                  </UnorderedList>
                  </Text>
                </GridItem>
              </Grid>
            </Flex>
            </motion.nav>


          <motion.nav variants={cardsVariants} initial="hidden" whileInView="show">
            <Flex mx="30px">
              <Grid templateColumns="repeat(10, 1fr)">
                <GridItem colEnd={[3,2]} textAlign="left">
                  {" "}
                  <Text
                    mt="40px"
                    fontSize={"xl"}
                    fontWeight={"bold"}
                  >
                    {" "}
                    Assignment 4
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
                Build a Modern Kitchen using Blender 3 as shown in chapters 5, 6, and 7 of the Book Blender by Example 2nd Edition
                    <Divider/>
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561"
                    >https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561
                    </Link>
                      </ListItem>
                      </UnorderedList>
                      </Text>
                </GridItem>
              </Grid>
            </Flex>
            </motion.nav>
           
             <motion.nav variants={cardsVariants} initial="hidden" whileInView="show">
            <Flex mx="30px">
              <Grid templateColumns="repeat(10, 1fr)">
                <GridItem colEnd={[3,2]} textAlign="left">
                  {" "}
                  <Text
                   mt="40px"
                   fontSize={"xl"}
                   fontWeight={"bold"}  
                  >
                    {" "}
                    Assignment 5
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
                      Illustrating an Alien Hero with Grease Pencil as shown in chapter 8 of the Book Blender by Example 2nd Edition
                      <Divider/>
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561"
                    >https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561 
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
                    fontSize={"xl"}
                    fontWeight={"bold"}
                  >
                    {" "}
                    Assignment 6{" "}
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
                    Build a 3D Sword in the Stone using Blender 3 as shown in these video tutorials 
                    <Divider/>
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://www.youtube.com/watch?v=bpvh-9H8S1g"
                    >
                   https://www.youtube.com/watch?v=bpvh-9H8S1g
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