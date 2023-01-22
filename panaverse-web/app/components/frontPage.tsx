import { Box, Flex,Stack,Text } from "@chakra-ui/react";
import { motion } from "framer-motion"
import {navVariants,staggerContainer, textVariant} from "../utils/motions"
import { Canvas } from "@react-three/fiber";
import LogoScene from "./logoScene";
import { Suspense } from "react";
import { Environment } from "@react-three/drei";
import { PanaverseLogo } from "../images/PanaverseLogo";

export default function FrontPage(){
    return (
      <Box justifyContent="flex-end">
        {/* bg="rgba(0, 0, 0, 0.5)" zIndex="1" position="absolute" h={"488px"}  left={0} right={0} */}
        <Flex>
          <motion.div
            variants={staggerContainer(1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <motion.h1 variants={textVariant(1.1)}>
            <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
          <Suspense fallback={null}>
            <PanaverseLogo></PanaverseLogo>
            <Environment preset="city" />
          </Suspense>
        </Canvas>
            </motion.h1>
          </motion.div>
        </Flex>
      </Box>
    );
}