import * as c from '@chakra-ui/react'
import { Chrono } from 'react-chrono'
import theme from '~/theme'

export const EventSchedule: React.FC = () => (
  <c.Flex
    bg={theme.colors.greenPalmTree}
    h="100vh"
    w="100vw"
    justifyContent="center"
    alignItems="center"
  >
    <c.VStack spacing={-1}>
      <c.HStack w="100%" spacing={-1} bg="red">
        <c.Box
          alignItems="center"
          justifyContent="center"
          paddingY={16}
          paddingX={6}
        >
          <c.Text fontSize="4xl" color="white" w="100px">
            17:30
          </c.Text>
        </c.Box>

        <c.Box
          bg="blue"
          alignItems="center"
          justifyContent="center"
          paddingY={16}
          paddingX={6}
          borderLeftWidth={6}
          borderLeftColor="white"
        >
          <c.Text fontSize="4xl" color="white">
            Inicio da cerimonia
          </c.Text>
        </c.Box>
      </c.HStack>
      <c.HStack w="100%" spacing={-1} bg="red">
        <c.Box
          alignItems="center"
          justifyContent="center"
          paddingY={16}
          paddingX={6}
        >
          <c.Text fontSize="4xl" color="white" w="100px">
            18:30
          </c.Text>
        </c.Box>
        <c.Box
          w="100%"
          bg="blue"
          alignItems="center"
          justifyContent="center"
          paddingY={16}
          paddingX={6}
          borderLeftWidth={6}
          borderLeftColor="white"
        >
          <c.Text fontSize="4xl" color="white">
            Fim da cerimonia
          </c.Text>
        </c.Box>
      </c.HStack>
    </c.VStack>
  </c.Flex>
)
