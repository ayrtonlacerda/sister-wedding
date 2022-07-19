import type { ActionFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { Form, useActionData } from '@remix-run/react'
import * as c from '@chakra-ui/react'

//export const loader: LoaderFunction = async () => {}

export const action: ActionFunction = async ({ request }) => {
  console.log('action')

  return json({ ok: true })
}

export default function Index() {
  const actionData = useActionData()
  return (
    <>
      <c.Flex
        bg="blue.300"
        h="100vh"
        w="100vw"
        justifyContent="center"
        alignItems="center"
      >
        <c.Heading color="white">Day & DIgo</c.Heading>
      </c.Flex>
      <c.Flex
        bg="white"
        h="100vh"
        w="100vw"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
      >
        <c.VStack spacing={4} align="stretch">
          <c.Heading color="black">Confirmação de presença</c.Heading>
          <Form method="post">
            <c.FormControl mb={4}>
              <c.Text>Nome</c.Text>
              <c.Input placeholder="nome completo" />
              <c.FormErrorMessage>Nome é obrigatorio</c.FormErrorMessage>
            </c.FormControl>
            <c.FormControl mb={4}>
              <c.Text>Email</c.Text>
              <c.Input placeholder="fulano@email.com" />
              <c.FormErrorMessage>email é obrigatorio</c.FormErrorMessage>
            </c.FormControl>
            <c.FormControl mb={4}>
              <c.Text>Celular</c.Text>
              <c.Input placeholder="(xx) xxxxx-xxxx" />
              <c.FormErrorMessage>Celular é obrigatorio</c.FormErrorMessage>
            </c.FormControl>
            <c.FormControl mb={4}>
              <c.Text>Quantidade de crianças</c.Text>
              <c.NumberInput min={0}>
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
    </>
  )
}
