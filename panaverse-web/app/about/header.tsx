import { Box, Flex, Heading, Text,useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { introVariants } from "../utils/motions";

export default function AboutHeader(){
    return(
        <Box>
            <Flex direction={"column"} >
            <motion.nav variants={introVariants} initial="hidden" whileInView="show">
            <Text align="center" fontSize={["20px","35px","45px"]} textColor={useColorModeValue("blue.600", "blue.300")} fontWeight="bold">
            About
            </Text>
            </motion.nav>
            <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
            <Text borderRadius={"12px"}  boxShadow='dark-lg' align={["justify"]} mx={["10px","300px"]} my="20px" border={"2px"} p="20px">
           The mission of Panaverse is to reshape Pakistan by revolutionizing education, research, and business by adopting latest, cutting-edge technologies. Experts are calling this the 4th industrial revolution. We want Pakistan to become a global hub for AI, data science, cloud native computing, edge computing, blockchain, augmented reality, and internet of things.</Text>
           </motion.div>
            </Flex>
        </Box>
    );
}