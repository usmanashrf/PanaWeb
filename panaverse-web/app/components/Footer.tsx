import {Box, Flex, Text, Image,  useColorModeValue, Button, Show, Hide, Card, CardBody, Link, Divider, HStack, VStack, Grid, GridItem, Stack} from "@chakra-ui/react";
import {FacebookIcon, LinkedinIcon,YoutubeIcon,TwitterIcon, GithubIcon, InstaIcon } from "../images/socialIcons"
import SocialMediaIcons from "./socialMediaIcons";

let year = new Date().getFullYear();
export default function Footer(){
    return (
      <Box>
        <Box bg="gray.700" color="white" p="10px" mt={"20px"}>
          <Grid
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(5, 1fr)"
            gap={4}
          >
            <GridItem rowSpan={2} colSpan={1}>
              <VStack alignItems="left">
                <Image
                  maxW="180px"
                  h={["60px", "100px"]}
                  src="/footerLogoWhite.png"
                ></Image>
                <Text align={["justify"]} maxW={"sm"}>
                  Reshape Pakistan by cutting-edge technologies.
                </Text>
                <Text mx="20px" mt="20px">
                  
                </Text>
              </VStack>
            </GridItem>
            <GridItem colSpan={2}></GridItem>

            <GridItem colSpan={2} mt="50px" ml={["-80px", "0px", "0"]}>
              <Stack
                direction={["column", "row", "row"]}
                justify="space-between"
                mx={["0px", "50px", "100px"]}
              >
                <Flex direction="column" minWidth="max-content">
                  <Text fontWeight="bold">Panaverse DAO</Text>
                  <Link href="/about">About us</Link>
                  <Link>Panaverse Community</Link>
                </Flex>
                <Show above="sm">
                  <Flex maxW="sm" direction="column">
                    <Text fontWeight="bold"> <Link href="/Team"> Faculty</Link></Text>
                    <Link href="/programs">Courses Detial</Link>
                    <Link href="/locations">Locations</Link>
                  </Flex>
                </Show>
              </Stack>
            </GridItem>
            <GridItem colSpan={[1, 2]} ml={["-50px", "0px", "0"]}>
              <Show below="md">
                <SocialMediaIcons></SocialMediaIcons>
              </Show>
            </GridItem>
            <GridItem>
              <Show above="sm">
                <SocialMediaIcons></SocialMediaIcons>
              </Show>
            </GridItem>
          </Grid>
        </Box>
        <Box borderTopRadius={"20px"} bg={"gray.600"} mx={["", "200px"]} mt="-50px">
          <Flex px="20px" justify="space-between">
            <Image src="/panacloud.png"></Image>
            
            <Text mt="10px" color={"white"}  fontSize={["10px","15px"]}> © {year} Usman Ashraf. All rights reserved.</Text>
          </Flex>
        </Box>
      </Box>
    );
}