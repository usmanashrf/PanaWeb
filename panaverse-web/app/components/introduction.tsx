import {Box, Flex, Text, Image,  useColorModeValue, Button, Show, Hide, VStack, HStack} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Loader from "../utils/modelLoader";
import { AnimatePresence, motion } from "framer-motion";
import { introVariants } from "../utils/motions";

const LazyModel = dynamic(() => import('../utils/panaModel'), {
    ssr: true,
    loading: () => <Loader/> 
  })
export default function Intro(){
    return(
        <Box mt="100px" h="absolute" bgColor="grey:300" mb="60px">
        <Flex>
            <HStack>
            <Show above="md"> <LazyModel ></LazyModel></Show>
            <motion.nav variants={introVariants} initial="hidden" whileInView="show">
            <VStack  mt={["0","20px","40px"]}>
            <Text  fontSize={["40px","35px","45px"]} fontWeight="bold"  align="center">
            The Panaverse Community</Text> 
            <Text align="center">
            Web3, 3D Metaverse, AI, IoT, Cloud, and Edge technologies expand the internet as we know it
            </Text>
            <Text align="center">
            by introducing novel features and advancements.In this brand-new type of curriculum.
            </Text>
            <Text align="center">
             In which students will learn how to make money and boost exports
            </Text>
            <Text align="center">
            in the classroom and will begin doing so within six months of the program's beginning.
            </Text>
            <Text align="center">
            It resembles a cross between a corporate venture and an educational project.
            </Text>
            </VStack>
            </motion.nav>
            </HStack>
        </Flex>
        
        </Box>
    );
}