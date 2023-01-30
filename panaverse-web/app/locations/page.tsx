'use client';
import { Box, ChakraProvider, Divider, theme } from "@chakra-ui/react";
import Footer from "../components/Footer";
import NavBar from "../components/navBar";
import Cities from "../components/operationalCities";

export default function Home() {
  return (
    
      <ChakraProvider cssVarsRoot={undefined} theme={theme}>
       <NavBar></NavBar>
       <Cities></Cities>
       <Footer></Footer>
      </ChakraProvider>
  )
}
