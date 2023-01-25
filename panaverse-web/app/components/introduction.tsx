import {Box, Flex, Text, Image,  useColorModeValue, Button, Show, Hide, VStack, HStack} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Loader from "../utils/modelLoader";

const LazyModel = dynamic(() => import('../utils/panaModel'), {
    ssr: true,
    loading: () => <Loader/> 
  })

export default function Intro(){
    return(
        <Box mt="100px" h="absolute" bgColor="grey:300">
        <Flex>
            <HStack>
            <Show above="md"> <LazyModel ></LazyModel></Show>
            <VStack  mt={["0","20px","40px"]}>
            <Text  fontSize={["40px","35px","45px"]} fontWeight="bold">
            The Panaverse Community</Text> 
            <Text>
            Web3, 3D Metaverse, AI, IoT, Cloud, and Edge technologies expand the internet as we know it
            </Text>
            <Text>
            by introducing novel features and advancements.In this brand-new type of curriculum.
            </Text>
            <Text>
             In which students will learn how to make money and boost exports
            </Text>
            <Text>
            in the classroom and will begin doing so within six months of the program's beginning.
            </Text>
            <Text>
            It resembles a cross between a corporate venture and an educational project.
            </Text>
            </VStack>
            </HStack>
        </Flex>
        
        </Box>
    );
}