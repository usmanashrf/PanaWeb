'use client';

import { motion } from 'framer-motion';
import { fadeIn, introVariants, qtr1Variants, slideIn, staggerContainer, textVariant } from "../utils/motions";
import {Box, Flex, Text, Image,  useColorModeValue, Button, Show, Hide, Card, CardBody, VStack, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, HStack} from "@chakra-ui/react";
import Loader from '../utils/modelLoader'
import dynamic from "next/dynamic";

const LazyModel = dynamic(() => import('../utils/panaModel'), {
  ssr: true,
  loading: () => <Loader/>
})

export default function FrontPage(){
    return (
      <Box bg={useColorModeValue("gray.100", "gray.700")}>
        <Flex justify="space-between" backgroundImage={"/blackLines.png"} backgroundRepeat={"no-repeat"}>
         
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
          <Flex
            mt={["0px", "5px", "35px"]}
            ml={["-20"]}
            w="10%"
            position={"absolute"}
            h={["absolute"]}
            backgroundImage={"/blackLines.png"}
          >
            <HStack borderRightRadius="30px" p="30px"   mx="10px"  boxShadow='dark-lg' >
            <VStack pl={["50px","25vh"]} pr={["8px","10vh"]}>
              
              <Show above='md'>
              <Text
                mt="5px"
                fontSize={["20px", "35px", "45px"]}
                fontWeight="bold"
                align={["left"]}
              >
                Web 3.0 Metaverse
              </Text>
              <Text
                mt="5px"
                fontSize={["20px", "35px", "35px"]}
                fontWeight="bold"
                align={["left"]}
                ml={"-10px"}
              >
                
              </Text>
              </Show>
              
              <Show below='md'>
              <Text
                fontSize={["16px", "18px", "25px"]}
                fontWeight="bold"
                ml={["0px","0px","10px"]}
              >
                Web 3.0 Metaverse
              </Text>
              {/* <Text
                mt="5px"
                fontSize={["20px", "35px", "45px"]}
                fontWeight="bold"
                align={"left"}
              >
              3D, AI, IOT
              </Text> */}
              </Show>
              <Text
                fontSize={["10px", "12px", "28px"]}
                pl={["20px","0px"]}
                fontWeight="bold"
                color="#E41B17"
              >
                {" "}
                Earn as you Learn Program{" "}
              </Text>
              {/* <Hide below="md">
                <Text>
                  Getting Ready for the Next Generation of the Internet
                </Text>
              </Hide> */}
              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 0.8 }}
                style={{ x: 110 }}
              >
                
                <Button
                  ml={["-160px", "-160px", "-200px"]}
                  mt={["5px","5px","20px"]}
                  bg="#2B6CB0"
                  color="white"
                  _hover={{ bg: "gray.500" }}
                  
                >
                  {" "}<Link  style={{ textDecoration: 'none' }} href="https://portal.piaic.org/signup">Apply Now</Link>
                  
                </Button>
              </motion.div>
            </VStack>
            <Flex alignSelf={"flex-end"}>  <Stat >
    <StatLabel>Members</StatLabel>
    <StatNumber>3500+</StatNumber>
    <StatHelpText>
      <StatArrow type='increase' />
      53.36%
    </StatHelpText>
  </Stat></Flex>
            </HStack>
          </Flex>
          </motion.div>
          <Flex ml={["-25px", "0", "0"]}  w={["90%","60%"]}>
          
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              style={{ x: 100 }}
            >
              <div>
              <Show above='768px'>
              <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        
      > <Image  src="desktopPic.png"></Image>
      </motion.div>
      </Show>
              <Show below='md'> <Image src="mobilePic.png" ml={"20px"}></Image></Show>
              </div>
            </motion.div>
            
          </Flex>
        </Flex>
        
      </Box>
    );
}

function useState(arg0: number): [any, any] {
  throw new Error('Function not implemented.');
}

