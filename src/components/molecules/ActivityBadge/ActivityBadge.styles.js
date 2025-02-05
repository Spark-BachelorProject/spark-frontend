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
  padding: 10px 20px;
  width: 75px;
  height: 55px;
  border-radius: 10px;
  margin: 4px;

  :hover {
    & > img {
      width: 35px;
      height: 35px;
      transition: 0.2s ease-in-out;
    }
  }

  & > img {
    width: 31px;
    height: 31px;
  }
`

export const StyledText = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.titleFont};
`
