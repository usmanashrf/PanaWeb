import { Box,Text,useColorModeValue } from "@chakra-ui/react";
import ElasticCarousel from "../utils/Elastic";

export default function EventsSlider(){
    return(
        <Box boxShadow={"dark-lg"} mb="20px">
             <Text mb="-180px" fontSize={["40px","35px","45px"]} fontWeight="bold" textColor={useColorModeValue("blue.600", "blue.300")} align="center">Recent Events</Text>
            <ElasticCarousel></ElasticCarousel>
        </Box>
    )
}