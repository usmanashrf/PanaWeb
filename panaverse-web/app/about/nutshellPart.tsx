import { Box, Flex, Heading, Text,useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { introVariants } from "../utils/motions";

export default function Nutshell(){
    return(
        <Box>
        <Flex direction={"column"} >
        <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
        <Text boxShadow='dark-lg' align={["justify"]}  mx={["10px","300px"]}  my="20px" border={"2px"} p="20px">
            The internet is without a doubt the most important technological development in human history. Web3, 3D Metaverse, AI, IoT, Cloud, and Edge technologies expand the internet as we know it by introducing novel features and advancements. Metaverse will make use of all aspects of modern technology, including 3D, VR, AR, AI, blockchain, cloud and edge computing, voice computing, ambient computing, and more.

Citi is the latest Wall Street business to give a positive prognosis for Web 3.0 and the Metaverse, terms used to depict a future internet vision centered on decentralized technologies and virtual worlds. Citi stated in a March 2022 research paper that the metaverse economy might have a total addressable market of up to $13 trillion and five billion people by 2030.

            </Text>
            </motion.div>
            <motion.nav variants={introVariants} initial="hidden" whileInView="show">
        <Text align="center" fontSize={["20px","25px","25px"]} textColor={useColorModeValue("blue.600", "blue.300")} fontWeight="bold">
        Program in a Nutshell</Text>
        <Text boxShadow='dark-lg' align={["justify"]}  mx={["10px","300px"]}  my="20px" border={"2px"} p="20px">
        In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program's beginning. It resembles a cross between a corporate venture and an educational project.

        </Text>
        </motion.nav>
        </Flex>
    </Box>
    );
}