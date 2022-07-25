import type { ActionFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { Form, Outlet, useActionData } from '@remix-run/react'
import * as c from '@chakra-ui/react'
import { GuestsModel } from '~/models'
import {
  Actions,
  ConfirmForm,
  EventSchedule,
  Title,
} from '~/components/templates'

//export const loader: LoaderFunction = async () => {}
type FormType = {
  name: string
  email: string
  celphone: string
  amountChildren: string
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  // @ts-ignore
  const { name, email, celphone, amountChildren }: FormType =
    Object.fromEntries(formData)

  console.log('guest -> ', { name, email, celphone, amountChildren })

  return json({ ok: true })
  try {
    const createGuest = await GuestsModel.create({
      data: {
        name,
        email,
        celphone: parseInt(celphone),
        amountChildren,
      },
    })
    console.log('createGuest -> ', createGuest)
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
  const actionData = useActionData()
  console.log(actionData)
  return (
    <>
      <Title />
      <ConfirmForm />
      <EventSchedule />
      <Actions />
    </>
  )
}
