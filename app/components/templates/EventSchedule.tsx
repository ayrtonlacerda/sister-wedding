import * as c from '@chakra-ui/react'
import theme from '~/theme'
export const EventSchedule: React.FC = () => (
  <c.Flex
    bg={theme.colors.greenPalmTree}
    h="100vh"
    w="100vw"
    justifyContent="center"
    alignItems="center"
  >
    <c.Heading color="white">Linha do tempo</c.Heading>
  </c.Flex>
)
