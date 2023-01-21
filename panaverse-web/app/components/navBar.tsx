'use client';
import { AddIcon, EditIcon, ExternalLinkIcon,InfoIcon, HamburgerIcon, RepeatIcon, PhoneIcon} from "@chakra-ui/icons";
import {Flex, Link,Text, Box, useBreakpointValue, Menu, MenuButton, IconButton, MenuList, MenuItem } from "@chakra-ui/react";
import MenuLogo from "./menuLogo";

export default function NavBar() {
    const breakpoint = useBreakpointValue({ base: "xs", md: "md", lg: "lg", xl: "xl" });
  return (
    <Flex as="nav" align="center" justify="space-between" bg="gray.800" p={4}>
      <Link href="#">
        <Flex> <Box h={'24px'}><MenuLogo></MenuLogo></Box>
        <Text  fontWeight="bold" color="white" mt={[4,4,4]} ml={[-2,-2,-2]}>
          anaverse
        </Text></Flex>
      
      </Link>
      {breakpoint !=="xs" && (
        <Flex align="center">
        <Link href="#" mr={4}>
          <Text color="white">About</Text>
        </Link>
        <Link href="#" mr={4}>
          <Text color="white">Contact</Text>
        </Link>
      </Flex>
      )}
      {breakpoint =="xs" &&(
        <Menu >
        <MenuButton
          as={IconButton}
          aria-label='Options'
          icon={<HamburgerIcon />}
          //variant='outline'
          bg="white" _hover={{ bg: "gray.500" }}
        />
        <MenuList>
        <MenuItem icon={<InfoIcon />} command='⌘O'>
            About
          </MenuItem>
          <MenuItem icon={<PhoneIcon />} command='⌘O'>
            Contact
          </MenuItem>
          
        </MenuList>
      </Menu>
      )}
      
    </Flex>
  );
}
