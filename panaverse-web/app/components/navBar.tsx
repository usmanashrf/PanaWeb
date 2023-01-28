"use client";
import {
  AddIcon,
  EditIcon,
  ExternalLinkIcon,
  InfoIcon,
  HamburgerIcon,
  RepeatIcon,
  PhoneIcon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons";
import {
  Flex,
  Link,
  Text,
  Box,
  useBreakpointValue,
  Menu,
  MenuButton,
  useColorMode,
  useColorModeValue,
  IconButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import MenuLogo from "./menuLogo";
import { Show, Hide } from '@chakra-ui/react'
import { AnimatePresence, motion } from "framer-motion";
import { navVariants } from "../utils/motions";
import HamburgerMenu from "../images/hamburger";
import dynamic from "next/dynamic";
import Loader from "../utils/modelLoader";
import Intro from "./introduction";

const LazyModel = dynamic(() => import('../utils/panaModel'), {
  ssr: true,
  loading: () => <Loader/>
})
export default function NavBar() {
  const breakpoint = useBreakpointValue({
    base: "xs",
    md: "md",
    lg: "lg",
    xl: "xl",
  });
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <motion.nav variants={navVariants} initial="hidden" whileInView="show">
      <Flex
        as="nav"
        
        justify="space-between"
        bg={useColorModeValue("white.100", "gray.800")}
        overflow="hidden"
        p={4}
        px={[16, 6, 6]}
      >
        <Link href="#">
          <Flex>
            {" "}
            <Box  mx={['-10','0','0']} h={["40px","50px","60px"]} width={["70px","50px","60px"]}>
              <MenuLogo></MenuLogo>

              {/* <LazyModel /> */}
            </Box>
            <Text
              fontWeight="bold"
              color={useColorModeValue("gray.800", "white")}
              mt={[4, 4, 4]}
              ml={[0, -4, -6]}
            >
              anaverse
            </Text>
          </Flex>
        </Link>
        <Flex>
          {/* <Show above="sm">
          <Text
            fontWeight="bold"
            fontSize="xl"
            as="i"
            color="white"
            ml={[6, 0, 0]}
          >
            Panaverse
          </Text>
          </Show> */}
          {/* <Show breakpoint='(max-width: 400px)'>
          <Text
            fontWeight="bold"
            fontSize="xl"
            as="i"
            color="white"
            pl={[6, 0, 0]}
            mt={[-2,0,0]}
          >
            anaverse
          </Text>
          </Show> */}
        </Flex>
        {breakpoint !== "xs" && (
          <Flex align="center">
            <Link href="/about" mr={4}>
              <Text  color={useColorModeValue("gray.800", "white")}>About</Text>
            </Link>
            <Link href="#" mr={4}>
              <Text color={useColorModeValue("gray.800", "white")}>Contact</Text>
            </Link>
            <AnimatePresence exitBeforeEnter initial={false}>
              <motion.div
                style={{ display: "inline-block" }}
                key={useColorModeValue("light", "dark")}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <IconButton
                  onClick={toggleColorMode}
                  h={"6"}
                  mt="1"
                  aria-label={"Toggle theme"}
                  icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
                ></IconButton>
              </motion.div>
            </AnimatePresence>
          </Flex>
        )}
        {breakpoint === "xs" && (
          <Flex ml="30px">
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerMenu></HamburgerMenu>}
              bg={useColorModeValue("gray.500", "greu.500")}
              _hover={{ bg: "gray.500" }}
            />
            <MenuList>
              <MenuItem icon={<InfoIcon />}>
                About
              </MenuItem>
              <MenuItem icon={<PhoneIcon />} command="⌘O">
                Contact
              </MenuItem>
              <MenuItem onClick={toggleColorMode} icon={useColorModeValue(<MoonIcon />, <SunIcon />)} command="⌘O">
              {useColorModeValue("Dark", "Light")}
              </MenuItem>
            </MenuList>
          </Menu>
          </Flex>
        )}
      </Flex>
    </motion.nav>
  );
}
