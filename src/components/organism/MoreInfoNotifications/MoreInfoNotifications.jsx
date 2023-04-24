import React from 'react'
import { StyledText } from '../MoreInfoPost/MoreInfoPost.styles'
import { ReactComponent as CopyIcon } from '@/assets/icons/clipboard.svg'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 10px;
  margin: -20px 0 -15px 0;
`

export const MoreInfoNotifications = () => {
  return (
    <Wrapper>
      <StyledText>
        <CopyIcon />
        Oznacz wszystkie jako przeczytane
      </StyledText>
    </Wrapper>
  )
}
