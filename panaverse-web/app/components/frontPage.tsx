
import {Box, Flex, Text} from "@chakra-ui/react";
import Loader from '../utils/modelLoader'
import dynamic from "next/dynamic";

const LazyModel = dynamic(() => import('../utils/panaModel'), {
  ssr: true,
  loading: () => <Loader/>
})

export default function FrontPage(){
    return(
      <Box>
      <Flex > 
        </Flex>
        <LazyModel/>
        </Box>
    )
}


// const images = [
//   "image1.jpg",
//   "image2.jpg",
//   "image3.jpg"
// ];

// function ImageSlider() {
//   return (
//     <Carousel>
//       {/* {images.map((image, index) => (<img key={index} src={image} alt="slider image" />))} */}
//     </Carousel>
//   );
// }
