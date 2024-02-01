import styled from 'styled-components'

import { Title } from '@/components/atoms/Title/Title.styles'

export const Wrapper = styled.div`
  padding: 0px 10px;
  max-height: 350px;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 5px;
`

export const StyledTitle = styled(Title)`
  font-size: ${({ theme }) => theme.fontSize.s};
`

export const StyledBigTitle = styled(Title)`
  margin-bottom: 15px;
  margin-left: 15px;
`
