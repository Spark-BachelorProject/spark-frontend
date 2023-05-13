import styled from 'styled-components'

import { Label } from '@/components/atoms/Label/Label.styles'

export const Wrapper = styled.div`
  margin-top: 27px;
  display: flex;
  justify-content: space-between;
  width: 90%;

  ${Label} {
    &:hover {
      color: ${({ theme }) => theme.colors.labelFont};
    }
  }
`
