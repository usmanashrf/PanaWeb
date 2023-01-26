'use client';
import { Box, ChakraProvider, Divider } from "@chakra-ui/react";
import FrontPage from "./components/frontPage";
import NavBar from "./components/navBar";
import Intro from "./components/introduction"
import Programs from "./components/programs";
import theme from "./utils/theme";
import Footer from "./components/Footer";
import Cities from "./components/operationalCities";
import Mission from "./components/mission";

export default function Home() {
  return (
    
      <ChakraProvider cssVarsRoot={undefined} theme={theme}>
       <NavBar></NavBar>
       <FrontPage></FrontPage>
       <Intro></Intro>
       <Divider />
       <Programs></Programs>
       <Cities></Cities>
       <Mission></Mission>
       <Divider/>
       <Footer></Footer>
       
      </ChakraProvider>
     

  )
}
