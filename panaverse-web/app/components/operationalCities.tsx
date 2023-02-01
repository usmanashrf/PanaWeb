import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Stack,
  Image,
  Text,
  Divider,
  VStack,
  Grid,
  GridItem,
  Show,
  useColorModeValue
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { cardsVariants, navVariants } from "../utils/motions";

export default function Cities() {
  return (
    <Box position={"relative"} mb="400px" bg={useColorModeValue("gray.100", "gray.700")}>
        <Divider></Divider>
        <motion.nav variants={navVariants} initial="hidden" whileInView="show">
        <Text my="40px" align={"center"} fontSize={["40px","35px","45px"]} fontWeight="bold" textColor={useColorModeValue("blue.600", "blue.300")} >Operational Cities</Text>
        </motion.nav>
    
      <VStack alignItems="left"  direction={"row"}>
      <Grid  templateColumns='repeat(2, 1fr)' gap={[2,4,6]}>
  <GridItem w='100%'>
  <motion.nav variants={cardsVariants} initial="hidden" whileInView="show">
<Card
          direction={{ base: "column",md:"row", sm: "row" }}
          overflow="hidden"
          variant="outline"
          boxShadow='dark-lg'
          borderRadius={"2xl"}
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%",sm: "200px" }}
            src="/KHR.png"
            alt="Khr"
          />
          <Stack>
            <CardBody>
              <Heading size="md">Karachi</Heading>

              <Text py="2">
                2 Class in a Week. 
              </Text>
              <Text>
              Tue and Wed 6:00 pm to 10:00 pm
              </Text>
            </CardBody>

            <CardFooter>
                Location: Bharia Auditorium
            </CardFooter>
          </Stack>
        </Card>
</motion.nav>
  
  </GridItem>

  <GridItem w='100%' h='10' >
  <motion.nav variants={cardsVariants} initial="hidden" whileInView="show">
  <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          boxShadow='dark-lg'
          borderRadius={"2xl"}
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            src="/peshawar.png"
            alt="Pesh"
          />
          <Stack>
            <CardBody>
              <Heading size="md">Peshawar</Heading>

              <Text py="2">
              1 Class in a Week.  
              </Text>
              <Text>
              on Fri  3:00 pm to 7:00 pm
              </Text>
            </CardBody>

            <CardFooter>
               <Text> Location:Peshawar CECOS</Text>
            </CardFooter>
          </Stack>
        </Card>
        </motion.nav>
  </GridItem>

  <GridItem w='100%' h='10' >
  <motion.nav variants={cardsVariants} initial="hidden" whileInView="show">
  <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          boxShadow='dark-lg'
          borderRadius={"2xl"}
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            src="/ISB.png"
            alt="ISB"
          />
          <Stack>
            <CardBody>
              <Heading size="md">Islamabad</Heading>

              <Text py="2">
                2 Classes in a Week. 
              </Text>
              <Text>
              on Sat 9:00 am to 6:00 pm
              </Text>
            </CardBody>

            <CardFooter>
                Location: Air University
              
            </CardFooter>
          </Stack>
        </Card>
        </motion.nav>
  </GridItem>
  <GridItem w='100%' h='10'>
  <motion.nav variants={cardsVariants} initial="hidden" whileInView="show">
  <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          boxShadow='dark-lg'
          borderRadius={"2xl"}
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            src="/LHR.png"
            alt="Lhr"
          />
          <Stack>
            <CardBody>
              <Heading size="md">Lahore</Heading>

              <Text py="2">
                2 Classes in a Week. 
              </Text>
              <Text>
              on Sun 9:00 am to 6:00 pm
              </Text>
            </CardBody>

            <CardFooter>
                Location: UMT Lahore
            </CardFooter>
          </Stack>
        </Card>
        </motion.nav>
  </GridItem>
</Grid>
      
      
      
     
        
      
        
      </VStack>
    </Box>
  );
}
