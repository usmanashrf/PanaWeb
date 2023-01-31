'use client';

import { motion } from 'framer-motion';
import { fadeIn, introVariants, qtr1Variants, slideIn, staggerContainer, textVariant } from "../utils/motions";
import {Box, Flex, Text, Image,  useColorModeValue, Button, Show, Hide, Card, CardBody, VStack, Link} from "@chakra-ui/react";
import Loader from '../utils/modelLoader'
import dynamic from "next/dynamic";

const LazyModel = dynamic(() => import('../utils/panaModel'), {
  ssr: true,
  loading: () => <Loader/>
})

export default function FrontPage(){
    return (
      <Box bg={useColorModeValue("gray.100", "gray.700")}>
        <Flex justify="space-between" backgroundImage={"/blackLines.png"}>
         
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
          <Flex
            mt={["0px", "25px", "35px"]}
            ml={["-20"]}
            w="10%"
            position={"absolute"}
            h={["absolute"]}
          >
            
            <VStack  borderRightRadius="30px" p="30px"  pl={["100px","50vh"]} mx="10px"  boxShadow='dark-lg' >
              <Show above='sm'>
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
              
              <Show below='sm'>
              <Text
                fontSize={["20px", "35px", "45px"]}
                fontWeight="bold"
                ml={"10px"}
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
                fontSize={["15px", "15px", "28px"]}
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
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                style={{ x: 100 }}
              >
                
                <Button
                  ml={["-160px", "-200px", "-200px"]}
                  mt="20px"
                  bg="#2B6CB0"
                  color="white"
                  _hover={{ bg: "gray.500" }}
                >
                  {" "}<Link  style={{ textDecoration: 'none' }} href="https://portal.piaic.org/signup">Apply Now</Link>
                  
                </Button>
              </motion.div>
            </VStack>
          </Flex>
          </motion.div>
          <Flex ml={["-25px", "0", "0"]}  w={["90%","60%"]}>
          
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              style={{ x: 100 }}
            >
              <div>
              <Show above='sm'>
              <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
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

