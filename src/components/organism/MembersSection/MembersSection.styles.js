import styled from 'styled-components'

import { Button } from '@/components/atoms/Buttons/Button.styles'
import { Title } from '@/components/atoms/Title/Title.styles'

export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  width: 250px;
  height: fit-content;
  padding: 20px 25px;
  border-radius: 7px;

  ${Title} {
    margin-bottom: 20px;
  }
`

export const StyledButton = styled(Button)`
  display: block;
  margin: 0 auto;
  font-size: ${({ theme }) => theme.fontSize.sPlus};
  opacity: 0.8;
  border: 2px solid ${({ theme }) => theme.colors.checkboxBorder};
  color: ${({ theme }) => theme.colors.text};

  :hover {
    border: 2px solid ${({ theme }) => theme.colors.buttonBg};
  }
`
