import { Box, Flex,Image, VStack,Text,useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {  introVariants } from "../utils/motions";


export default function Metaverse(){
    return(
      <Box my="100px">
        <Flex direction={["column","column","row"]}>
       
            <Image ml={"-50px"} src="/metaverse.png"></Image>
            <VStack >
            <motion.nav variants={introVariants} initial="hidden" whileInView="show">
            <Text px={"10px"} fontSize={["20px","35px","45px"]} textColor={useColorModeValue("blue.600", "blue.300")} fontWeight="bold">
            What is Metaverse ?</Text>
            <Text px={"30px"} align={["justify"]}>
            A communal environment or virtual world made possible by the fusion of
             physical and virtual reality is referred to as the "metaverse." 
             Users can engage in shared interactions with a wide range of virtual
              objects and environments in this imagined networked virtual world. 
              Various technology businesses are aggressively pursuing the science 
              fiction idea of a metaverse in an effort to give users a seamless and
               immersive experience.
            </Text>
            <Text px={"30px"} align={["justify"]}>
                 Metaverse is a highly-anticipated future version of the internet
                 where users are able to fully immerse themselves in a shared, virtual world. 
                 It is expected to have a significant impact on a variety of industries and 
                 bring people together from all over the world,
                 but also raises important questions about privacy and security.
                 </Text>
                 </motion.nav>
            </VStack>
        </Flex>
      </Box>
    );
}