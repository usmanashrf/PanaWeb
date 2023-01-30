'use client';
import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/navBar";
import Programs from "@/app/components/programs";
import { Box, ChakraProvider, Divider, theme } from "@chakra-ui/react";

export default function Home() {
  return (
    
      <ChakraProvider cssVarsRoot={undefined} theme={theme}>
       <NavBar></NavBar>
       <Programs></Programs> 
       <Divider/>
       <Footer></Footer>
      </ChakraProvider>
     

  )
}
