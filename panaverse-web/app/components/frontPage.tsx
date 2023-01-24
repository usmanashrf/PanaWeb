'use client';

import { motion } from 'framer-motion';
import { slideIn, staggerContainer, textVariant } from "../utils/motions";
import {Box, Flex, Text, Image,  useColorModeValue} from "@chakra-ui/react";
import Loader from '../utils/modelLoader'
import dynamic from "next/dynamic";
const LazyModel = dynamic(() => import('../utils/panaModel'), {
  ssr: true,
  loading: () => <Loader/>
})

export default function FrontPage(){
    return(
      <Box>
      <Flex > 
        <Flex mt={["25px","25px","115px"]} ml={["25px","25px","115px"]}>
      <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
        <Text mt="5px" ml="20px" fontSize={["20px","35px","50px"]} fontWeight="bold">Certified Web 3.0 
       </Text>
        <Text  ml="-10px" color="red" fontSize={["20px","35px","50px"]} fontWeight="bold" align="center"> 
        &
        </Text>
        <Text ml="20px" fontSize={["20px","35px","50px"]}fontWeight="bold">
        Metaverse Developer</Text>
        </motion.div>
        </Flex>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <Image
          src={useColorModeValue("/lightModeHead.png","/fithead.png")}
          alt="front_cover"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
        />
      </motion.div>
        </Flex>
        {/* <LazyModel/> */}
        </Box>
    )
}

