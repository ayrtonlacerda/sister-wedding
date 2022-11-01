import type { ActionFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { Form, Outlet, useActionData } from '@remix-run/react'
import * as c from '@chakra-ui/react'
import { GuestsModel } from '~/models'
import {
  Actions,
  ConfirmForm,
  EventSchedule,
  History,
  Title,
  TitleHome,
} from '~/components/templates'
import { Img } from '~/assets'

import styles from '~/styles/timeline.css'
import * as yup from 'yup'
import { toast } from '~/root'

const schema = yup.object({
  name: yup.string().required('Nome é obrigatorio'),
  email: yup
    .string()
    .email('E-mail tem que ser valido')
    .required('E-mail é obrigatorio'),
  celphone: yup.number().required('Celular é obrigatorio'),
})

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}

//export const loader: LoaderFunction = async () => {}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  // @ts-ignore
  const data: FormType = Object.fromEntries(formData)

  try {
    await schema.validate(data, {
      abortEarly: false,
    })

    await GuestsModel.create({
      ...data,
      celphone: Number(data.celphone),
      //  amount_children: data.amount_children?Number():,
    })

    toast({
      title: 'Evento confirmado.',
      status: 'success',
      duration: 5000,
      isClosable: true,
    })

    return json(
      { ok: true },
      { status: 201, statusText: 'guest create success' }
    )
  } catch (error) {
    return json(
      { ok: false, error },
      { status: 400, statusText: 'error create guest' }
    )
  }
}

export default function Index() {
  return (
    <>
      <TitleHome />
      <Title />
      <ConfirmForm />
      <EventSchedule />
      <History />
      <Actions />
    </>
  )
}
