import { GuestsModel } from '~/models'
import { Form, useLoaderData } from '@remix-run/react'
import { json } from '@remix-run/node'
import { isEmpty } from 'lodash'

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Container,
} from '@chakra-ui/react'

export const loader = async () => {
  console.log('loader')
  const users = await GuestsModel.findMany()

  return json(users)
}

export default function Index() {
  const guests = useLoaderData()
  return (
    <Container h="full" w="full" flex={1} p={16}>
      <TableContainer h="full" w="full">
        <Table variant="simple">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>Nome</Th>
              <Th>Email</Th>
              <Th isNumeric>Qtd de crianças</Th>
            </Tr>
          </Thead>
          <Tbody>
            {guests.map((guest) => (
              <Tr>
                <Td>{guest.name}</Td>
                <Td>{guest.email}</Td>
                <Td isNumeric>{guest.amountChildren}</Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Container>
  )
}
