import { Form } from '@remix-run/react'
import * as c from '@chakra-ui/react'
import { CountDown } from '../Molecules'

/* levar os inputs para o atoms com validação e fazer o nested route */
export const ConfirmForm: React.FC = () => (
  <c.Flex
    bg="white"
    h="100vh"
    w="100vw"
    justifyContent="center"
    alignItems="center"
    flexDir="column"
  >
    <CountDown />
    <c.VStack spacing={4} align="stretch" mt={16}>
      <c.Heading color="black">Confirmação de presença</c.Heading>
      <Form method="post">
        <c.FormControl mb={4}>
          <c.Text>Nome</c.Text>
          <c.Input placeholder="nome completo" name="name" />
          <c.FormErrorMessage>Nome é obrigatorio</c.FormErrorMessage>
        </c.FormControl>
        <c.FormControl mb={4}>
          <c.Text>Email</c.Text>
          <c.Input placeholder="fulano@email.com" name="email" />
          <c.FormErrorMessage>email é obrigatorio</c.FormErrorMessage>
        </c.FormControl>
        <c.FormControl mb={4}>
          <c.Text>Celular</c.Text>
          <c.Input placeholder="(xx) xxxxx-xxxx" name="celphone" />
          <c.FormErrorMessage>Celular é obrigatorio</c.FormErrorMessage>
        </c.FormControl>
        <c.FormControl mb={4}>
          <c.Text>Quantidade de crianças</c.Text>
          <c.NumberInput min={0} name="amountChildren">
            <c.NumberInputField />
            <c.NumberInputStepper>
              <c.NumberIncrementStepper />
              <c.NumberDecrementStepper />
            </c.NumberInputStepper>
          </c.NumberInput>
        </c.FormControl>

        <c.Button w="100%" type="submit">
          Confirmar
        </c.Button>
      </Form>
    </c.VStack>
  </c.Flex>
)
