import {Box, Flex, Text, Image,  useColorModeValue, Button, Show, Hide, Card, CardBody, Link, Divider, HStack, VStack, Grid, GridItem, Stack} from "@chakra-ui/react";
import {FacebookIcon, LinkedinIcon,YoutubeIcon,TwitterIcon, GithubIcon, InstaIcon } from "../images/socialIcons"
import SocialMediaIcons from "./socialMediaIcons";

let year = new Date().getFullYear();
export default function Footer(){
    return(
<Box bg="gray.700" color="white" p="10px">
<Grid
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={4}
> 
  <GridItem rowSpan={2} colSpan={1}>
    <VStack alignItems="left" >
    <Image maxW="180px" h="60px" src="/footerLogoWhite.png"></Image>
<Text  align={["justify"]} maxW={"sm"}>
Reshape Pakistan by cutting-edge technologies.
</Text>
<Text mx="20px" mt="20px">© {year} Usman Ashraf. All rights reserved.</Text>
</VStack></GridItem>
  <GridItem colSpan={2}/>
  
  <GridItem colSpan={2} mt="50px" ml={["-80px","0px","0"]} >
  <Stack direction={['column', 'row','row']} justify="space-between" mx={["0px","50px","100px"]} >
<Flex direction="column" minWidth='max-content' >
<Text fontWeight="bold">Panaverse DAO</Text>
 <Link>About us</Link>
 <Link>Our Mission</Link>
 <Link>Panaverse Community</Link>
</Flex>
<Show above="sm">
<Flex maxW="sm"  direction="column" >
<Text fontWeight="bold"> Faculty</Text>
 <Link>Courses Detial</Link>
 <Link>Class Timing</Link>
 <Link>Locations</Link>
</Flex>

</Show>

</Stack>
  </GridItem>
  <GridItem colSpan={[1,2]} ml={["-50px","0px","0"]}>
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
    
    );
}