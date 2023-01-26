'use client';

import { motion } from 'framer-motion';
import { fadeIn, slideIn, staggerContainer, textVariant } from "../utils/motions";
import {Box, Flex, Text, Image,  useColorModeValue, Button, Show, Hide, Card, CardBody} from "@chakra-ui/react";
import Loader from '../utils/modelLoader'
import dynamic from "next/dynamic";

const LazyModel = dynamic(() => import('../utils/panaModel'), {
  ssr: true,
  loading: () => <Loader/>
})

export default function FrontPage(){
    return (
      <Box bg={useColorModeValue("gray.100", "gray.700")}>
        <Flex>
          {/* <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
      ml="-20px"
    >
      <Image src="plntball.png"></Image>
    </motion.div> */}
          <Flex
            mt={["25px", "25px", "115px"]}
            ml={["-20", "25px", "50px"]}
            w="30%"
          >
            <motion.div style={{ x: 50 }} animate={{ x: 100 }}>
              <Text
                mt="5px"
                fontSize={["20px", "35px", "45px"]}
                fontWeight="bold"
              >
                Web3, Metaverse 3D, AI, IoT
              </Text>
              <Text
                fontSize={["15px", "15px", "28px"]}
                fontWeight="bold"
                color="#E41B17"
              >
                {" "}
                Earn as you Learn Program{" "}
              </Text>
              <Hide below="md">
                <Text>
                  Getting Ready for the Next Generation of the Internet
                </Text>
              </Hide>
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                style={{ x: 100 }}
              >
                <Button
                  ml={["-100px", "-100px", "-100px"]}
                  mt="20px"
                  bg="#2B6CB0"
                  color="white"
                  _hover={{ bg: "gray.500" }}
                >
                  {" "}
                  Apply Now
                </Button>
              </motion.div>
            </motion.div>
          </Flex>
          <Flex ml={["-25px", "0", "0"]}>
          
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
              <Show below='md'> <Image src="mobilePic.png"></Image></Show>
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

