'use client'

import { ChakraProvider, Divider, theme } from "@chakra-ui/react"
import Footer from "../components/Footer"
import NavBar from "../components/navBar"
import AboutHeader from "./header"
import Nutshell from "./nutshellPart"

export default function About(){
    return(
        <ChakraProvider cssVarsRoot={undefined} theme={theme}>
        <NavBar></NavBar>
        <AboutHeader></AboutHeader>
        <Nutshell></Nutshell>
        <Divider/>
       <Footer></Footer>
        </ChakraProvider>
    )
}