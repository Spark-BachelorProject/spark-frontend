import styled from 'styled-components'

import { Text } from '@/components/atoms/Text/Text.styles'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border: 1px solid ${({ theme }) => theme.colors.postBorder};
  background-color: ${({ theme }) => theme.colors.navbarBg};
  padding: 15px 30px;
  width: auto;
  border-radius: 10px;
  margin: 8px;

  & > img {
    width: 27px;
    height: 27px;
  }
`

export const StyledText = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.titleFont};
`
