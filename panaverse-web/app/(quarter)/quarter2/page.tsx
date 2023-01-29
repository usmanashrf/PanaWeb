'use client'
import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/navBar";
import { cardsVariants, introVariants } from "@/app/utils/motions";
import { Box, ChakraProvider, Flex, theme,Text,useColorModeValue, Grid, GridItem, Link, UnorderedList, ListItem, Divider, OrderedList } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function Quarter2(){
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
                Second Quarter
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
                    <Text>
                    Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform  <b>Duration: 13 Weeks</b>
                    </Text>

                    The objective of this course is to teach participants to develop customer-facing planet-scale Websites, 
                    Full-Stack Apps and templates, Dashboards,
                    and Muti-Cloud Serverless APIs. By the end of the quarter, 
                    the participants will be able to develop and deploy web platforms like Facebook,
                    Shopify, etc. The technologies covered in this course will include Next.js 13, Figma, 
                    Tailwind CSS, Chakra UI, tRPC, QraphQL,
                    Prisma, Cockroachdb Serverless (PostgreSQL Compatible), 
                    AWS Serverless Technologies, and Cloud Development Kit for Terraform (CDKTF).
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
                    Next.js 13 Web Development {" "}
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
                        Next 13 Official Documentation

                        <Divider/>
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://beta.nextjs.org/docs"
                    >
                     https://beta.nextjs.org/docs
                    </Link>
                      </ListItem>

                      <ListItem>Latest Learn React Official Website
                      <Divider/>
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://beta.reactjs.org/learn"
                    >
                      https://beta.reactjs.org/learn
                    </Link>
                      </ListItem>
                      <ListItem>Learn Next.js 13 Learning Repo
                      <Divider/>
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://github.com/panaverse/learn-nextjs"
                    >
                      https://github.com/panaverse/learn-nextjs
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
                   Next.js 13 using Chakra UI (Remote Zoom Class){" "}
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
                    CSS Flexbox Explained – Complete Guide to Flexible Containers and Flex Items
                    <Divider/>
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://www.freecodecamp.org/news/css-flexbox-complete-guide/"
                    >
                     https://www.freecodecamp.org/news/css-flexbox-complete-guide/
                    </Link>
                    </ListItem>
                      <ListItem>
                      Chakra UI Docs
                      <Divider/>
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://chakra-ui.com/getting-started"
                    >
                      https://chakra-ui.com/getting-started
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
                    UI/UX Design with Figma, TailwindCSS, and Chakra UI (Remote  Zoom Class){" "}
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
                    
                    <Divider/>
                    <ListItem>
                    Designing and Prototyping Interfaces with Figma: 
                    Learn essential UX/UI design principles by creating 
                    interactive prototypes for mobile, tablet, and desktop by Fabio Staiano

                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://www.amazon.com/Designing-Prototyping-Interfaces-Figma-interactive/dp/180056418X/ref=sr_1_1_sspa"
                    >
                    https://www.amazon.com/Designing-Prototyping-Interfaces-Figma-interactive/dp/180056418X/ref=sr_1_1_sspa 
                    </Link>
                    </ListItem>

                      <ListItem>
                      Figma Design Kit for TailwindCSS
                      <Divider/>
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://www.figma.com/community/file/768809027799962739"
                    >
                        https://www.figma.com/community/file/768809027799962739
                    </Link>
                      </ListItem>
                      <ListItem>
                      Chakra UI Figma Kit
                    <Divider/>
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://www.figma.com/community/file/971408767069651759"
                    >
                     https://www.figma.com/community/file/971408767069651759
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
                    {" "}API Routes with Next.js (Remote Zoom Class)
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
                    API Routes
                    <Divider></Divider>
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://nextjs.org/docs/api-routes/introduction"
                    > https://nextjs.org/docs/api-routes/introduction                    
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
                    APIs with Next.js and tRPC (Remote Zoom Class) {" "}
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
                    Build a tRPC CRUD API Example with Next.js	
                    <Divider/>
                    <Link  textColor={"blue.500"}
                      target="_blank" href="https://codevoweb.com/build-a-trpc-crud-api-example-with-next-js/">
                   https://codevoweb.com/build-a-trpc-crud-api-example-with-next-js/
                    </Link>
                    </ListItem>
                    <Divider/>

                    <ListItem>
                    Stop building REST APIs for your Next.js apps, use tRPC instead
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://brockherion.dev/blog/posts/stop-building-rest-apis-for-your-next-apps/"
                    >
                    https://brockherion.dev/blog/posts/stop-building-rest-apis-for-your-next-apps/
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
                   SQL and Prisma{" "}
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
                    Start from scratch with relational databases
                    <Divider/>
                    <Link  textColor={"blue.500"}
                      target="_blank" href="https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres">
                   https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres
                    </Link>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                    SQL For Beginners Video Tutorial
                    <Divider/>
                    <Link  textColor={"blue.500"}
                      target="_blank" href="https://www.youtube.com/watch?v=5hzZtqCNQKk">
                  https://www.youtube.com/watch?v=5hzZtqCNQKk
                    </Link>
                    </ListItem>
                    <ListItem>
                    Database Management Systems and SQL–Tutorial for Beginners
                    <Divider/>
                    <Link  textColor={"blue.500"}
                      target="_blank" href="https://www.freecodecamp.org/news/dbms-and-sql-basics/">
                 https://www.freecodecamp.org/news/dbms-and-sql-basics/
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
                    Next.js 13 using TailwindCSS
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
                   <Text> (Remote Zoom Class) Modern CSS with Tailwind, Second Edition by Noel Rappin </Text> 
                    <OrderedList>
                    <ListItem>
                    <Link  textColor={"blue.500"}
                      target="_blank" href="https://pragprog.com/titles/tailwind2/modern-css-with-tailwind-second-edition/">
                   https://pragprog.com/titles/tailwind2/modern-css-with-tailwind-second-edition/
                    </Link>
                    </ListItem>
                    <Divider/>
                    </OrderedList>
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
                    AWS Application Composer (Remote Zoom Class){" "}
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
                    What is AWS Application Composer?
                    <Divider/>
                  
                    <Link  textColor={"blue.500"}
                      target="_blank" href="https://www.youtube.com/watch?v=BujE_tik5r8">
                  https://www.youtube.com/watch?v=BujE_tik5r8
                    </Link>
                    </ListItem>
                    <Divider/>

                    <ListItem>
                    Event-driven apps with AWS Application Composer
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://www.youtube.com/watch?v=p411uh363jQ"
                    >
                    https://www.youtube.com/watch?v=p411uh363jQ
                    </Link>
            
                    </ListItem>

                      <ListItem>
                      Visually design and build serverless applications quickly
                      <Divider/>
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://aws.amazon.com/application-composer/"
                    >https://aws.amazon.com/application-composer/
                    </Link>

                      </ListItem>
                      <ListItem>
                      Visually design and build serverless applications quickly
                    <Divider/>
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://aws.amazon.com/application-composer/"
                    >
                    https://aws.amazon.com/application-composer/
                    </Link> 
                      </ListItem>
                      <ListItem>
                      Must Have: Create Free AWS Account
                      </ListItem>
                    <Divider/>
                    <ListItem>
                   <b> AWS Free Tier </b> https://aws.amazon.com/free/
                      </ListItem>
                      
                    <Divider/>
                    <ListItem>
                    Note: For AWS Free Tier you will need a credit or debit card. The easiest way for Pakistani students is to open a bank account with Meezan Bank. Open a Meezan Aasan Account if you have no earning proof. Meezan Bank will charge Rs. 1100 for ATM Debit Card and there is a requirement of Rs. 100 minimum deposit. The card will be delivered in a few weeks. Our students have reported that this Debit card works with AWS. 
                        <Divider>
                        </Divider>
                        Study Material:
                        <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://github.com/panaverse/learn-typescript"
                    >
                    https://github.com/panaverse/learn-typescript
                    </Link>
                      </ListItem>

                      <ListItem>
                      Now you can create a virtual VISA Debit card through the NayaPay app (https://www.nayapay.com/ ) 
                      which can be used to create AWS/GCP/Azure accounts.
                       This is good news for those students who find it difficult to create physical debit 
                       and credit cards from banks.
                        <Divider>
                        </Divider>
                        You can also get a $300 credit
                        <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://pages.awscloud.com/adoptf90d_GLOBAL_POC-credits.html"
                    >
                    https://pages.awscloud.com/adoptf90d_GLOBAL_POC-credits.html
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
                    Multi-Cloud GraphQL
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
                   <Text> Multi-Cloud GraphQL Serverless API Development with Cloud Development Kit for Terraform (CDKTF) (Remote Zoom Class) </Text> 
                    <OrderedList>
                
                    <ListItem>
                    <Text> Learn Multicloud Serverless API Development using CDK Terraform in Baby Steps </Text> 
                    <Divider></Divider>
                    <Link  textColor={"blue.500"}
                      target="_blank" href="https://github.com/panaverse/learn-multicloud-api-development">
                  https://github.com/panaverse/learn-multicloud-api-development
                    </Link>
                    </ListItem>
                    <Divider/>
                    </OrderedList>
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
                    Web 2.0 Projects
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
                   
                    <OrderedList>
                    <ListItem>
                        <Text>Next.js Projects</Text>
                        <Divider/>
                    <Link  textColor={"blue.500"}
                      target="_blank" href="https://github.com/panaverse/nextjs-projects">
                  https://github.com/panaverse/nextjs-projects
                    </Link>
                    </ListItem>

                    <Divider/>
                    <ListItem>
                        <Text>Styling Next.js Projects using TailwindCSS and Chakra UI</Text>
                        <Divider/>
                    <Link  textColor={"blue.500"}
                      target="_blank" href="https://github.com/panaverse/styling-nextjs-projects">
                  https://github.com/panaverse/styling-nextjs-projects
                    </Link>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <Text>Todo Full-Stack App</Text>
                        <Divider/>
                    <Link  textColor={"blue.500"}
                      target="_blank" href="https://github.com/ogzhanolguncu/min-todo">
                 https://github.com/ogzhanolguncu/min-todo
                    </Link>
                    </ListItem>

                    <Divider/>
                    <ListItem>
                        <Text>Build a Twitter Clone</Text>
                        <Divider/>
                    <Link  textColor={"blue.500"}
                      target="_blank" href="https://www.youtube.com/watch?v=nzJsYJPCc80">
                 https://www.youtube.com/watch?v=nzJsYJPCc80
                    </Link>
                    </ListItem>
                    </OrderedList>
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