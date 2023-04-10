import React from 'react'
import { IconBorder } from '@/components/atoms/IconBorder/IconBorder.styles'
import { Wrapper } from './NotificationBell.styles'
import { ReactComponent as BellIcon } from '@/assets/icons/bell.svg'
import { Counter } from '@/components/atoms/Counter/Counter'

export const NotificationBell = ({ count, isRed, hasCounter }) => {
  return (
    <Wrapper>
      <IconBorder tabIndex="0">
        <BellIcon />
        <Counter count={count} isRed={isRed} hasCounter={hasCounter} />
      </IconBorder>
    </Wrapper>
  )
}
