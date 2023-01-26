import { Box, HStack, Link, Stack } from "@chakra-ui/react";
import { FacebookIcon, GithubIcon, InstaIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from "../images/socialIcons";
import { motion } from 'framer-motion';

export default function SocialMediaIcons(){
    return (
      <Box mt="20px">
        <Stack  direction={["column","column","row"]}>
          <Stack direction={['row']}>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={{ x: 100 }}
          >
            <Link href="https://www.facebook.com/groups/panaverse">
            <FacebookIcon></FacebookIcon>
            </Link>
            
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={{ x: 100 }}
          >
            <Link href="https://twitter.com/Panaverse_edu"><TwitterIcon></TwitterIcon></Link>
            
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={{ x: 100 }}
          >
            <Link href="https://www.instagram.com/piaicofficial/?hl=en"><InstaIcon></InstaIcon></Link>
            
          </motion.div>
          </Stack>
         
          
         <Stack  direction={['row']}>
         <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={{ x: 100 }}
          >
            <Link href="https://www.youtube.com/@panaverse/streams"><YoutubeIcon></YoutubeIcon></Link>
            
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={{ x: 100 }}
          >
            <Link href="https://www.linkedin.com/company/panaverse/?original_referer=https%3A%2F%2Fwww.google.com%2F"> <LinkedinIcon></LinkedinIcon></Link>
            
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={{ x: 100 }}
            
          >
            <Link  href="https://github.com/panaverse"><GithubIcon></GithubIcon></Link>
          </motion.div>
         </Stack>
        </Stack>
      </Box>
    );
}