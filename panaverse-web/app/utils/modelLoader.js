import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const ModelSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

export const Container = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="panaModel"
   // m="auto"
     mt={['-180px', '-220px', '-180px']}
    // mr={['-50px', '0', '0px']}
    // mb={['-40px', '-140px', '-200px']}
    // w={[220, 380, 380]}
    // h={[220, 380, 440]}
    //position="relative"
    w={[220, 380, 280]}
    h={[220, 380, 440]}
  >
    {children}
  </Box>
))
 
const Loader = () => {
  return (
    <Container>
      <ModelSpinner />
    </Container>
  )
}

export default Loader
