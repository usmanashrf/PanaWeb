'use client'
import NavBar from "@/app/components/navBar";
import { introVariants } from "@/app/utils/motions";
import { Box, ChakraProvider, Flex, theme,Text,useColorModeValue, Grid, GridItem, Link, UnorderedList, ListItem, Divider, OrderedList } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function Quarter1(){
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
                First Quarter
              </Text>
            </motion.nav>
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
                    We will start the program by learning the fundamentals of
                    Object-Oriented programming using JavaScript and TypeScript.
                    We will also understand the latest Web trends i.e. Web 3.0
                    and Metaverse concepts and try to understand their working
                    from the perspective of the users.
                  </Text>
                </GridItem>
              </Grid>
            </Flex>

            <Flex mx="30px">
              <Grid templateColumns="repeat(10, 1fr)">
                <GridItem colEnd={[3,2]} textAlign="left">
                  <Text
                    mt="40px"
                    
                    fontSize={"xl"}
                    fontWeight={"bold"}
                  >
                    {" "}
                    HTML and CSS (Homework){" "}
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
                        Learn HTML by Hira Khan (Watch Recorded Videos)
                        <Divider/>
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"
                    >
                      https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6
                    </Link>
                      </ListItem>

                      <ListItem>  Learn CSS Intro by Hira Khan (Watch Recorded Videos)
                      <Divider/>
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob"
                    >
                      https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob
                    </Link>
                      </ListItem>
                    </UnorderedList>
                  </Text>
                </GridItem>
              </Grid>
            </Flex>

           < Flex mx="30px">
              <Grid templateColumns="repeat(10, 1fr)">
                <GridItem colEnd={[3,2]} textAlign="left">
                  <Text
                    mt="40px"
                    fontSize={"xl"}
                    fontWeight={"bold"}
                  >
                    {" "}
                    Web 3.0 and Metaverse Theory{" "}
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
                    Introduction to Panaverse DAO
                    <Divider/>
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing"
                    >
                      https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing
                    </Link>
                    </ListItem>
                      <ListItem>
                      Web 3.0 User Guide
                      <Divider/>
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit?usp=sharing"
                    >
                      https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit?usp=sharing
                    </Link>
                      </ListItem>
                      <ListItem>
                      Complete Web 3 Assignments included in the Web 3 User Guide
                    Virtual and Augmented Metaverse User Guide
                    <Divider/>
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing"
                    >
                      https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing
                    </Link> 
                      </ListItem>
                    </UnorderedList>
                  </Text>
                </GridItem>
              </Grid>
            </Flex>

            < Flex mx="30px">
              <Grid templateColumns="repeat(10, 1fr)">
                <GridItem colEnd={[3,2]} textAlign="left">
                  <Text
                    mt="40px"
                    fontSize={"xl"}
                    fontWeight={"bold"}
                  >
                    {" "}
                    Fundamentals of JavaScript {" "}
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
                    <Link href="https://262.ecma-international.org/">
                    (ECMAScript 2022 Language Specification)
                    </Link>

                    </ListItem>
                    <Divider/>
                    <ListItem>
                    Learn JavaScript by Zeeshan Hanif (Watch Recorded Videos)
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQdc0NSLknxmxBch5gLOqyo"
                    >
                     https://www.youtube.com/playlist?list=PLKvqnz8z1zWQdc0NSLknxmxBch5gLOqyo 
                    </Link>
                    </ListItem>

                      <ListItem>
                      Chapters 2-6, 13 of JavaScript from Beginner to Professional: Learn JavaScript quickly by building fun, interactive, and dynamic web apps, games, and pages

                      <Divider/>
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://www.amazon.com/JavaScript-Beginner-Professional-building-interactive/dp/1800562527/ref=sr_1_4"
                    >
https://www.amazon.com/JavaScript-Beginner-Professional-building-interactive/dp/1800562527/ref=sr_1_4
                     
                    </Link>
                      </ListItem>
                      <ListItem>
                      JavaScript Book Code
 
                    <Divider/>
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://github.com/PacktPublishing/JavaScript-from-Beginner-to-Professional"
                    >
                      https://github.com/PacktPublishing/JavaScript-from-Beginner-to-Professional
                    </Link> 
                      </ListItem>

                      <ListItem>
                      Getting Started Exercises with JavaScript and Node.js 
                    <Divider/>
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md "
                    >
                      https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md 
                    </Link> 
                      </ListItem>
                    </UnorderedList>
                  </Text>
                </GridItem>
              </Grid>
            </Flex>


            < Flex mx="30px">
              <Grid templateColumns="repeat(10, 1fr)">
                <GridItem colEnd={[3,2]} textAlign="left">
                  <Text
                    mt="40px"
                    fontSize={"xl"}
                    fontWeight={"bold"}
                  >
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
                    Topics Covered in the Quiz
                    </ListItem>
                    <Divider/>
                    <ListItem>
                    Background of JavaScript and How to use JavaScript in Browser
                    </ListItem>
                    <ListItem>
                    Variables, Primitive data types Analyzing and modifying data types, and Operators (Chapter 2 of JavaScript from Beginner to Professional)
                    </ListItem>
                    <ListItem>
                    Intro to Node.js, .mjs files, Modules, NPM, import, export, and using external modules with npm:
                      <Divider/>
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing"
                    > https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing                     
                    </Link>
                      </ListItem>

                      <ListItem>
                      How to accept user input in your Node.js JavaScript programs, this will allow us to create interactive Node.js console programs using prompt-sync library. The last example in this presentation shows you how to use prompt-sync library in your Node.js programs:  
 
                    <Divider/>
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing"
                    >
                      https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing
                    </Link> 

                    Note: After this point, we will do all our class work and exercises using Node.js in .mjs files. We will also be able to develop interactive Node.js console programs which will greatly help the students to learn.
                      </ListItem>

                      <ListItem>
                      Using Arrays and Objects in Node.js Programs (chapter 3 of JavaScript from Beginner to Professional)
                      </ListItem>
                      <ListItem>
                      Using if and if else statements, else if statements, Conditional ternary operators, and switch statements in Node.js programs (chapter 4 of JavaScript from Beginner to Professional)
                      </ListItem>
                      <ListItem>
                      Using while loop, do while loop, for loop, for in, and for of loop in Node.js (chapter 5 of JavaScript from Beginner to Professional)
                      </ListItem>
                      <ListItem>
                      Using Basic functions, Function arguments, Return, Variable scope in functions, Recursive functions, Nested functions, Anonymous functions, and Function callbacks in Node.js (chapter 6 of JavaScript from Beginner to Professional)
                      </ListItem>
                      <ListItem>
                      Using Concurrency, Callbacks, Promises, async / await, and Event loop (chapter 13 of JavaScript from Beginner to Professional)
                      </ListItem>

                      <ListItem>
                      JavaScript promises, mastering the asynchronous
                    <Divider/>
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript"
                    >https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript                     
                    </Link>
                      </ListItem>

                      <ListItem>
                      JavaScript promises, mastering the asynchronous
                    <Divider/>
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript"
                    >https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript                     
                    </Link>
                      </ListItem>

                      <ListItem>
                      New JavaScript Features in ECMAScript 2022 and 2021
 
                    <Divider/>
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2022-with-examples-4nhg"
                    >https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2022-with-examples-4nhg
                    </Link>
                      </ListItem>
                    </OrderedList>
                  </Text>
                </GridItem>
              </Grid>
            </Flex>


            < Flex mx="30px">
              <Grid templateColumns="repeat(10, 1fr)">
                <GridItem colEnd={[3,2]} textAlign="left">
                  <Text
                    mt="40px"
                    fontSize={"xl"}
                    fontWeight={"bold"}
                  >
                    {" "}
                    Object-Oriented Programming with TypeScript {" "}
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
                    Chapters 1-11 of Learning TypeScript: Enhance Your Web Development Skills Using Type-Safe JavaScript
                    <Divider/>
                    <Link href="https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1_1">
                    https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1_1
                    </Link>
                    </ListItem>
                    <Divider/>

                    <ListItem>
                    Learning Repository
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://github.com/panaverse/learn-typescript"
                    >
                    https://github.com/panaverse/learn-typescript
                    </Link>
                    </ListItem>

                      <ListItem>
                      In Class Companion projects and articles for Learning TypeScript
                      <Divider/>
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://www.learningtypescript.com/"
                    >https://www.learningtypescript.com/
                    </Link>
                      </ListItem>
                      <ListItem>
                      Homework Project
                    <Divider/>
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://github.com/panaverse/typescript-node-projects"
                    >
                     https://github.com/panaverse/typescript-node-projects
                    </Link> 
                      </ListItem>

                      <ListItem>
                      Fundamentals of TypeScript Quiz 
                      </ListItem>
                    <Divider/>
                    <ListItem>
                    TypeScript Professional Proficiency Quiz
                      </ListItem>
                    </UnorderedList>
                  </Text>
                </GridItem>
              </Grid>
            </Flex>

          </Flex>
        </Box>
      </ChakraProvider>
    );
}