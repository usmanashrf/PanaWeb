'use client';
import { Box, ChakraProvider } from "@chakra-ui/react";
import FrontPage from "./components/frontPage";
import NavBar from "./components/navBar";

export default function Home() {
  return (
    
      <ChakraProvider cssVarsRoot={undefined}>
       <NavBar></NavBar>
       <FrontPage></FrontPage>
      </ChakraProvider>
     

  )
}
