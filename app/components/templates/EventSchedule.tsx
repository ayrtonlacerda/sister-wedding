import * as c from '@chakra-ui/react'
import { Chrono } from 'react-chrono'
import theme from '~/theme'

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import { Img } from '~/assets'

// styles is now something like /build/global-AE33KB2.css

const SCHEDULE = [
  {
    time: 'Sexta - 18h',
    description: 'Luau dos noivos',
    icon: 'MOON',
  },
  {
    time: 'Sábado - 17h',
    description: 'Inicio da cerimonia',
    icon: 'ARCH',
  },
  {
    time: 'Sábado - 17:30',
    description: 'Votos',
    icon: 'DOVE',
  },
  {
    time: 'Sábado - 18:15',
    description: 'Troca das alianças',
    icon: 'RINGS',
  },
  {
    time: 'Sábado - 19hs',
    description: 'Festa',
    icon: 'CAKE',
  },
]

export const EventSchedule: React.FC = () => (
  <c.Flex
    bg={theme.colors.greenPalmTree}
    h="100vh"
    w="100vw"
    justifyContent="center"
    alignItems="center"
  >
    <c.Box w="300px">
      <VerticalTimeline layout="1-column-left" animate={false}>
        {SCHEDULE.map((event, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            date={event.time}
            dateClassName="date-timeline-element"
            icon={<c.Image src={Img[event.icon]} />}
            iconStyle={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#fff',
              color: '#fff',
            }}
            contentArrowStyle={{
              background: '#f00',
            }}
            contentStyle={{ color: '#fff' }}
          >
            <c.Heading fontSize="lg" color="#fff">
              {event.description}
            </c.Heading>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </c.Box>
  </c.Flex>
)
