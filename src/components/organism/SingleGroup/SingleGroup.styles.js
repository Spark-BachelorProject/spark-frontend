import styled from 'styled-components'

import { Title } from '@/components/atoms/Title/Title.styles'

export const StyledTitle = styled(Title)`
  display: flex;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 700;
`
