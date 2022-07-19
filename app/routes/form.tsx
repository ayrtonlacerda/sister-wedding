import React from 'react'
import { Form } from '@remix-run/react'

export const action = async ({ request }) => {
  const formData = await request.formData()

  const email = formData.get('email')
  const password = formData.get('password')

  console.log({
    email,
    password,
  })

  return {}
}

export default function Index() {
  const handleForm = () => {}
  return (
    <div className="bg-blue-500 flex-col" id="containerElement">
      <h1>Form</h1>
      <Form method="post">
        <div className="bg-red-500 flex-col w-48" id="form">
          <input name="email" className="mt-8" type="input" />
          <input name="password" className="mt-8" type="input" />
          <button className="mt-8 bg-green-500"> subit form</button>
        </div>
      </Form>
    </div>
  )
}
