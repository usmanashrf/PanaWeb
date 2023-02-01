import { Box,Text,useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import ElasticCarousel from "../utils/Elastic";
import { qtr1Variants } from "../utils/motions";

export default function EventsSlider(){
    return(
        <motion.nav variants={qtr1Variants} initial="hidden" whileInView="show">
        <Box mb="20px">
             <Text mb="-180px" fontSize={["40px","35px","45px"]} fontWeight="bold" textColor={useColorModeValue("blue.600", "blue.300")} align="center">Recent Events</Text>
            <ElasticCarousel></ElasticCarousel>
        </Box>
        </motion.nav>
    )
}