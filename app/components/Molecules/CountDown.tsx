import React from 'react'
import * as c from '@chakra-ui/react'
import Countdown from 'react-countdown'
import theme from '~/theme'
// import { Container } from './styles';

export const CountDown: React.FC = () => {
  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
    total,
    props,
    api,
  }) => {
    if (completed) {
      // Render a completed state
      return <span>Hoje é o grande dia!</span>
    } else {
      // Render a countdown
      return (
        <c.HStack alignItems="end">
          {/* <c.Text>faltam</c.Text> */}
          <c.Text color={theme.colors.greenPalmTree} fontSize="3rem">
            {days} {days > 1 ? 'dias' : 'dia'} e {hours}
            {hours > 1 ? ' horas' : ' hora'}
          </c.Text>
        </c.HStack>
      )
    }
  }

  return <Countdown date={new Date('02/04/2023')} renderer={renderer} />
}
