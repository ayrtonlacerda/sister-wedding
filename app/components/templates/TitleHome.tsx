import * as c from '@chakra-ui/react'
import { Img } from '~/assets'

export const TitleHome: React.FC = () => (
  <c.Flex
    h="100vh"
    w="100vw"
    bg="#608361"
    justifyContent="flex-start"
    alignItems="center"
    flexDir="column"
  >
    <c.Image src={Img.Home} w="100vw" />
  </c.Flex>
)
