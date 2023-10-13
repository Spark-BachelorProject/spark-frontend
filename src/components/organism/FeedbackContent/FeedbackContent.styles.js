import styled from 'styled-components'

import { Error } from '@/components/atoms/Error/Error.styles'
import { Title } from '@/components/atoms/Title/Title.styles'

export const Wrapper = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  ${Error} {
    font-weight: 700;
    padding: 0;
    display: flex;
    text-align: center;
  }
`

export const StyledTitle = styled(Title)`
  margin: 8px 0;
  font-size: ${({ theme }) => theme.fontSize.mPlus};
  font-weight: 600;
`
