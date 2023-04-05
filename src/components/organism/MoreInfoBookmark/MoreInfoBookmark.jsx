import React from 'react'
import styled from 'styled-components'
import { Text } from '@/components/atoms/Text/Text.style'
import { ReactComponent as CheckmarkIcon } from '@/assets/icons/check.svg'
import { ReactComponent as ScissorsIcon } from '@/assets/icons/scissors.svg'
import { IconText } from '@/components/molecules/IconText/IconText'

export const Wrapper = styled.div`
  width: 100%;
`

export const StyledText = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize.m};
`

export const MoreInfoBookmark = () => {
  return (
    <Wrapper>
      <Text>
        <CheckmarkIcon />
        Oznacz wszystkie jako przeczytane
      </Text>
    </Wrapper>
  )
}
