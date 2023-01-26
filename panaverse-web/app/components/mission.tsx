import { Box, Flex,Text,useColorModeValue } from "@chakra-ui/react";


export default function Mission(){
    return(
        <Box my="40px">
            <Flex direction={"column"}>
            <Text fontSize={["40px","35px","45px"]} textColor={useColorModeValue("blue.600", "blue.300")} fontWeight="bold" align="center">Our Mission</Text>
            <Flex direction={["column","row","row"]} justify="space-between" mx={["0","80px","100px"]} >
            <Box  my="20px" w="1/2">
            <iframe width="460" height="280" src="https://www.youtube.com/embed/_OVnXw2ldog" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </Box>
            <Text align={["justify"]} ml={['10px']} my="30" mx={["10px","120px"]}>
            This curriculum is intended for beginners who want to learn software development from the ground up. 
            The first three quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming
             and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long hybrid program that includes 
             both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by 
             educating students to produce projects. To accommodate everyone, courses will be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on weekdays.
              It employs a hybrid teaching format, with core onsite classes complemented by online Zoom laboratories and recorded videos.
                </Text>
            </Flex>
            
            </Flex>
        </Box>
    );
}