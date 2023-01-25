'use client';
import { Box, ChakraProvider } from "@chakra-ui/react";
import FrontPage from "./components/frontPage";
import NavBar from "./components/navBar";
import Intro from "./components/introduction"
export default function Home() {
  return (
    
      <ChakraProvider cssVarsRoot={undefined}>
       <NavBar></NavBar>
       <FrontPage></FrontPage>
       <Intro></Intro>
      </ChakraProvider>
     

  )
}
