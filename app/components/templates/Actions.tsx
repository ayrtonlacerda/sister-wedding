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

const IMAGE =
  'https://www.voali.com.br/wp-content/uploads/2020/07/O-que-fazer-em-Barra-Grande-5.jpg'

const IMAGE2 =
  'https://blog.wedy.com/wp-content/uploads/2019/06/ekaterina-shevchenko-ZLTlHeKbh04-unsplash.jpg'

const Card = ({ title, uri, comingsoon }) => {
  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}
      >
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
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
            height={230}
            width={282}
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
            fontSize={'2xl'}
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

export const Actions: React.FC = () => (
  <c.Flex
    bg="white"
    h="100vh"
    w="100vw"
    justifyContent="center"
    alignItems="center"
    flexDir="column"
    p="6"
  >
    <Card title="Barra Grande, O Paraiso na terra" uri={IMAGE} />
    <Card title="Lista de presentes" uri={IMAGE2} comingsoon />
  </c.Flex>
)
