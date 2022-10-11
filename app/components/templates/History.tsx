import * as c from '@chakra-ui/react'

export const History: React.FC = () => {
  const [breakpoint] = c.useMediaQuery('(min-height: 700px)')
  console.log({ breakpoint })
  return (
    <c.Flex
      bg="white"
      //  h={breakpoint ? '100vh' : '130vh'}
      w="100vw"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      p="6"
    >
      <c.Heading color="Black" py="8">
        Nossa Historia
      </c.Heading>
      <c.Text mb={2} fontStyle="italic" textAlign="justify">
        Pra quem não sabe como e onde nos conhecemos, vamos contar um pouquinho
        da nossa história pra vocês!
      </c.Text>
      <c.Text mb={2} fontStyle="italic" textAlign="justify">
        Bom, a gente sempre morou perto, Day na 409 norte e Digão na 210 norte e
        provavelmente já nos vimos por ai, porém nos encontramos de fato na
        academia e foi quando começamos a conversar. Um belo dia esbarramos em
        uma festa, finalzinho de agosto de 2019, e lá rolou nosso primeiro
        beijo! A partir dali ficamos juntinhos em off hehe, ninguém sabia, só
        nossa família mesmo. Dai passaram alguns meses de fica e não fica, até
        que a Day sentiu algo diferente pelo Digão, inclusive chegou a comentar
        com algumas amigas dela que achava que ia casar com ele 👀 Porém ele não
        queria nada sério e em fevereiro de 2020 ela decidiu colocar ele na
        parede e é óbvio que ele fugiu kkkkkk
      </c.Text>
      <c.Text mb={2} fontStyle="italic" textAlign="justify">
        Mas não durou 1 mês e nos reencontramos malhando na rua e o bonito
        mandou mensagem cheio de saudade, em março de 2020 voltamos e assumimos.
      </c.Text>
      <c.Text mb={2} fontStyle="italic" textAlign="justify">
        Antes de engravidar ja tínhamos planos juntos, conversávamos sobre o
        futuro, até que dia 28/12/2020 descobrimos a gravidez. Foi um susto! Mas
        cá estamos nós firmes e fortes com nossa bebê perfeita, Luna 🌙
      </c.Text>
      <c.Text mb={2} fontStyle="italic" textAlign="justify">
        Fomos morar juntos em julho de 2021 e casamos no civil em dezembro de
        2021. Mas o sonho do casamento se manteve forte e agora vamos realizar
        da melhor forma possível, no lugar mais lindo e rodeado de pessoas que
        amamos!
      </c.Text>
      <c.Text mb={2} fontStyle="italic" textAlign="justify">
        Muita coisa em pouco tempo e cada vez mais certeza de que tomamos a
        decisão certa e somos o amor da vida um do outro! Ja afirmamos isso
        diante da lei e agora falta afirmar diante de Deus, pois sem Ele não
        somos nada, tudo é dEle e para Ele! 🤍
      </c.Text>
    </c.Flex>
  )
}
