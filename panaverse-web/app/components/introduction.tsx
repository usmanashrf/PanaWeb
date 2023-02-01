import {Box, Flex, Text, Image,  useColorModeValue, Button, Show, Hide, VStack, HStack} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Loader from "../utils/modelLoader";
import { AnimatePresence, motion } from "framer-motion";
import { introVariants, planetVariants } from "../utils/motions";

const LazyModel = dynamic(() => import('../utils/panaModel'), {
    ssr: true,
    loading: () => <Loader/> 
  })
export default function Intro(){
    return(
        <Box mt="100px"  h="absolute" bgColor="grey:300" mb="100px">
        <Flex justify="space-between"  mx={["0px","0px","150px"]}  direction={["column","column", "row"]}>
            {/* <HStack > */}
            
            {/* <Show above="md"> <LazyModel position="relative"></LazyModel> 
            <Image position="relative" src="/community.png"></Image></Show> */}
            {/* <Show below="md"> */}
        
            <VStack mt={["30px","-100px","-120px"]} ml={["0px","150px","150px"]} >
            <LazyModel/> 
            <Image  mt="-15px" position="relative" src="/community.png"></Image>
            </VStack>
           
            {/* </Show> */}
            
            <motion.nav variants={introVariants} initial="hidden" whileInView="show">
            <VStack borderLeftRadius="30px" borderRightRadius={"30px"} boxShadow='dark-lg' h="relative" p="30px"  mt={["0","20px","40px"]} mr={["50px","150px"]}>
            <Flex direction={["column","column","row"]} >
            <Text  fontSize={["20px","25px","45px"]} textColor={useColorModeValue("blue.600", "blue.300")} fontWeight="bold">
            The Panaverse Community</Text>
            <VStack direction={["column","row"]}width={["250px","250px","450px"]} mx="10px">
            <Text  align={["justify","left"]} >
            Web3, 3D Metaverse, AI, IoT, Cloud, and Edge technologies expand the internet as we know it
            by introducing novel features and advancements.In this brand-new type of curriculum.
            In which students will learn how to make money and boost exports</Text>
            <Text  align={["left"]}>
            in the classroom and will begin doing so within six months of the program's beginning.
            It resembles a cross between a corporate venture and an educational project.
            </Text>
            </VStack> 
            
            </Flex>
            {/* <Text align="right">
            
            </Text>
            <Text align="right">
             
            </Text>
            <Text align="center">
            </Text>
            <Text align="center">
            </Text> */}
            </VStack>
            </motion.nav>
            {/* </HStack> */}
        </Flex>
        
        </Box>
    );
}