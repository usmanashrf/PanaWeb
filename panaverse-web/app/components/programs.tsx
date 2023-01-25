import {Box, Flex, Text, Image,  useColorModeValue, Button, Show, Hide, VStack, HStack, Card, CardBody, Stack, Heading, Divider, CardFooter, ButtonGroup} from "@chakra-ui/react";
import { qtr1Variants,qtr2Variants, qtr3Variants, qtr4Variants } from "../utils/motions";
import { AnimatePresence, motion } from "framer-motion";

export default function Programs(){
    return (
      <Box margin={"auto"} mt="150px" w="75%">
        <Text fontSize={["40px","35px","45px"]} fontWeight="bold" align="center">Program of Studies</Text>
        <Text  align="center">The first three quarters are shared by all specialties and are dedicated to studying </Text>
        <Text align="center">Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development</Text>
        <Text align="center">The graduates of this program will own products (Full-Stack App Templates, AR and VR Experiences, and APIs) </Text>
        <Text align="center"> that are marketed globally by the Panaverse DAO and, if they like, will also be able to start off</Text>
        <Text align="center"> by offering services at a rate of $50 per hour ($96,000 per year).</Text>
        
       
        <Flex direction={["column", "column", "row"]} bg={useColorModeValue("white.100", "gray.800")}>
        <motion.nav variants={qtr1Variants} initial="hidden" whileInView="show">
         <Card  maxW="sm" mt="30px"
          alignItems="center" ml="25px" mx="10px"  boxShadow='dark-lg'>
            <CardBody>
              <Image
                src="/qtr1.png"
                alt="First Quarter"
                borderRadius="lg"  
              /> 
              <Stack mt="6" spacing="3">
                <Heading size="md" alignItems="center">Quarter I</Heading>
                <Text alignItems="center">
                CS-101: Object-Oriented Programming using TypeScript
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <Button variant="ghost" colorScheme="blue">
                  See more..
                </Button>
              
            </CardFooter>
          </Card>
          </motion.nav>
          <motion.nav variants={qtr2Variants} initial="hidden" whileInView="show">
          <Card mt="30px"
           alignItems="center" ml="25px" mx="10px" maxW="sm" boxShadow='dark-lg'>
            <CardBody>
              <Image
                src="/qt2.png"
                alt="First Quarter"
                borderRadius="lg"
                
              /> 
              <Stack mt="6" spacing="3">
                <Heading size="md" alignItems="center">Quarter II</Heading>
                <Text alignItems="center">
                Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs
                </Text>
                <Text alignItems="center">
                 using Next.js 13
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
             
                <Button variant="ghost" colorScheme="blue">
                  See more..
                </Button>
              
            </CardFooter>
          </Card>
          </motion.nav>
          <motion.nav variants={qtr3Variants} initial="hidden" whileInView="show">
          <Card  mt="30px"
           alignItems="center" ml="25px" mx="10px" maxW="sm" boxShadow='dark-lg'>
            <CardBody >
              <Image
                src="/qtr3.png"
                alt="First Quarter"
              /> 
              <Stack mt="6" spacing="3">
                <Heading size="md" alignItems="center">Quarter III</Heading>
                <Text alignItems="center">
                Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs
                </Text>
                <Text alignItems="center">
                 using Next.js 13
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
             
                <Button variant="ghost" colorScheme="blue">
                  See more..
                </Button>
              
            </CardFooter>
          </Card>
          </motion.nav>
          <motion.nav variants={qtr4Variants} initial="hidden" whileInView="show">
          <Card   mt="30px"
           alignItems="center" ml="25px" mx="10px" maxW="sm" boxShadow='dark-lg'>
            <CardBody>
              <Image
                src="/q4.png"
                alt="First Quarter"
                borderRadius="lg"
              /> 
              <Stack mt="6" spacing="3">
                <Heading size="md" alignItems="center">Quarter IV (Specialized)</Heading>
                <Text alignItems="center" fontWeight="bold">
                
                </Text>
                <Text alignItems="center">
                Web 3.0 & Metaverse Specialization
                </Text>
                <Text alignItems="center">
                AI, Cloud-Native, IoT
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
             
                <Button variant="ghost" colorScheme="blue">
                  See more..
                </Button>
              
            </CardFooter>
          </Card>
          </motion.nav>
        </Flex>
        
      </Box>
    );
}