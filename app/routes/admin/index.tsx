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
  Flex,
  VStack,
  Box,
  Text,
  HStack,
} from '@chakra-ui/react'
import type { GuestType } from '~/models'
import { GuestsModel } from '~/models'
import { useMediaQuery } from '@chakra-ui/react'

export const loader = async () => {
  const [err, guests] = await GuestsModel.findAll()

  if (err) return json([])

  return json(guests)
}

export default function Index() {
  const guests = useLoaderData()
  const [isDesktop] = useMediaQuery('(min-width: 650px)')

  console.log({ isDesktop })

  return (
    <Flex h="full" w="full" flex={1} p={16}>
      {isDesktop ? (
        <TableOfGuests guests={guests} />
      ) : (
        <ListOfGuests guests={guests} />
      )}
    </Flex>
  )
}

const ListOfGuests = ({ guests }: { guests: GuestType[] }) => {
  if (!guests?.length) return null
  return (
    <VStack w="full" spacing={6}>
      {guests.map((g) => (
        <Box
          key={g.id}
          shadow="md"
          p={4}
          borderRadius="md"
          w="100%"
          borderColor="gray.300"
          borderWidth="1px"
        >
          <VStack alignItems="flex-start">
            <HStack>
              <Text>Nome: </Text>
              <Text>{g.name}</Text>
            </HStack>
            <HStack>
              <Text>Email: </Text>
              <Text>{g.email}</Text>
            </HStack>
            <HStack>
              <Text>Celular: </Text>
              <Text>{g.celphone}</Text>
            </HStack>
            <HStack>
              <Text>Qtd. criancas: </Text>
              <Text>{g.amount_children}</Text>
            </HStack>
          </VStack>
        </Box>
      ))}
    </VStack>
  )
}

const TableOfGuests = ({ guests }: { guests: GuestType[] }) => (
  <TableContainer h="full" w="full">
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Nome</Th>
          <Th>Email</Th>
          <Th>Celular</Th>
          <Th isNumeric>Qtd de crianças</Th>
        </Tr>
      </Thead>
      <Tbody>
        {guests?.length &&
          guests?.map((guest: GuestType) => (
            <Tr key={guest.id}>
              <Td>{guest.name}</Td>
              <Td>{guest.email}</Td>
              <Td>{guest.celphone}</Td>
              <Td isNumeric>{guest.amount_children}</Td>
            </Tr>
          ))}
      </Tbody>
    </Table>
  </TableContainer>
)
