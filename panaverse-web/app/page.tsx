'use client';

import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./components/navBar";

export default function Home() {
  return (
    
      <ChakraProvider>
       <NavBar></NavBar>
       Hello world
      </ChakraProvider>
     

  )
}
