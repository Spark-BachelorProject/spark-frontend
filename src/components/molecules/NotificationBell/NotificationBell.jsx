import React from 'react'
import { IconBorder } from '@/components/atoms/IconBorder/IconBorder.styles'
import { Wrapper, CounterWrapper, CounterNumber } from './NotificationBell.style'
import { ReactComponent as BellIcon } from '@/assets/icons/bell.svg'

export const NotificationBell = ({ count }) => {
  return (
    <Wrapper>
      <IconBorder tabIndex="0">
        <BellIcon />
        <CounterWrapper>{count > 0 && <CounterNumber>{count}</CounterNumber>}</CounterWrapper>
      </IconBorder>
    </Wrapper>
  )
}
