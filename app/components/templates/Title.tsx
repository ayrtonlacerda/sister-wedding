import * as c from '@chakra-ui/react'
import { Img } from '~/assets'

export const Title: React.FC = () => (
  <c.Flex
    // h="100vh"
    w="100vw"
    justifyContent="flex-start"
    alignItems="center"
    flexDir="column"
  >
    <c.Image src={Img.BG} w="100vw" />
  </c.Flex>
)
