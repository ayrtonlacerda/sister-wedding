import { Form, useActionData, useTransition } from '@remix-run/react'
import * as c from '@chakra-ui/react'
import { CountDown } from '../Molecules'
import { useMemo } from 'react'
import InputMask from 'react-input-mask'

/* levar os inputs para o atoms com validação e fazer o nested route */
export const ConfirmForm: React.FC = () => {
  const [breakpoint] = c.useMediaQuery('(min-height: 700px)')
  const actionData = useActionData()
  const transition = useTransition()

  const errors = useMemo(() => {
    let err: any = {}
    actionData?.error?.inner?.forEach((element: any) => {
      err = {
        ...err,
        [element.path]: element.message,
      }
    })
    return err
  }, [actionData])

  console.log({ actionData })

  return (
    <c.Flex
      bg="white"
      h={breakpoint ? '100vh' : '120vh'}
      w="100vw"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
    >
      <CountDown />
      {actionData?.ok ? (
        <>
          {' '}
          <c.Text>Confirmação realizada, obrigado!</c.Text>
        </>
      ) : (
        <c.VStack spacing={4} align="stretch" mt={16} p={breakpoint ? 4 : 8}>
          <c.Heading color="black">Confirmação de presença</c.Heading>
          <Form method="post">
            <c.FormControl mb={4} isInvalid={errors?.name}>
              <c.Text>Nome</c.Text>
              <c.Input
                placeholder="nome completo"
                name="name"
                //  {...register('name')}
              />
              <c.FormErrorMessage>Nome é obrigatorio</c.FormErrorMessage>
            </c.FormControl>

            <c.FormControl mb={4} isInvalid={errors?.email}>
              <c.Text>Email</c.Text>
              <c.Input placeholder="fulano@email.com" name="email" />
              <c.FormErrorMessage>
                {errors?.email || 'Email é obrigatorio'}
              </c.FormErrorMessage>
            </c.FormControl>

            <c.FormControl mb={4} isInvalid={errors?.celphone}>
              <c.Text>Celular</c.Text>
              <c.Input
                //as={InputMask}
                //mask="(**) *****-****"
                placeholder="(xx) xxxxx-xxxx"
                name="celphone"
                // {...register('celphone')}
              />
              <c.FormErrorMessage>Celular é obrigatorio</c.FormErrorMessage>
            </c.FormControl>

            <c.FormControl mb={4}>
              <c.Text>Quantidade de crianças</c.Text>
              <c.NumberInput
                min={0}
                defaultValue={0}
                name="amount_children"
                //{...register('amount_children')}
              >
                <c.NumberInputField />
                <c.NumberInputStepper>
                  <c.NumberIncrementStepper />
                  <c.NumberDecrementStepper />
                </c.NumberInputStepper>
              </c.NumberInput>
            </c.FormControl>

            <c.Button
              w="100%"
              type="submit"
              loadingText="confirmando..."
              isLoading={transition.state === 'submitting'}
            >
              Confirmar
            </c.Button>
          </Form>
        </c.VStack>
      )}
    </c.Flex>
  )
}
