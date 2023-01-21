'use client';

import { Box, ChakraProvider } from "@chakra-ui/react";
import FrontPage from "./components/frontPage";
import NavBar from "./components/navBar";

export default function Home() {
  return (
    
      <ChakraProvider>
       <NavBar></NavBar>
       <FrontPage></FrontPage>
      </ChakraProvider>
     

  )
}
