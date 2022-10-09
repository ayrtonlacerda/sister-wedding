import * as c from '@chakra-ui/react'
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from '@chakra-ui/react'
import { Link } from '@remix-run/react'

const IMAGE =
  'https://www.voali.com.br/wp-content/uploads/2020/07/O-que-fazer-em-Barra-Grande-5.jpg'

const IMAGE2 =
  'https://blog.wedy.com/wp-content/uploads/2019/06/ekaterina-shevchenko-ZLTlHeKbh04-unsplash.jpg'

const Card = ({ to, title, uri, comingsoon }) => {
  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={4}
        maxW="18rem"
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}
        alignContent="center"
      >
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height="10rem"
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${uri})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}
        >
          <Image
            rounded={'lg'}
            height="10rem"
            width="16rem"
            objectFit={'cover'}
            src={uri}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          {comingsoon && (
            <Text
              color={'gray.500'}
              fontSize={'sm'}
              textTransform={'uppercase'}
            >
              EM BREVE
            </Text>
          )}

          <Heading
            textAlign="center"
            fontSize={'lg'}
            fontFamily={'body'}
            fontWeight={500}
          >
            {title}
          </Heading>
        </Stack>
      </Box>
    </Center>
  )
}

export const Actions: React.FC = () => {
  return (
    <c.Flex
      bg="white"
      h="100vh"
      w="100vw"
      justifyContent="center"
      alignItems="center"
      flexDir={'column'}
      p="6"
    >
      <Card
        to="/"
        to="/home"
        title="Barra Grande, O Paraiso na terra"
        uri={IMAGE}
        comingsoon
      />
      <Card to="/gifts" title="Lista de presentes" uri={IMAGE2} comingsoon />
    </c.Flex>
  )
}
