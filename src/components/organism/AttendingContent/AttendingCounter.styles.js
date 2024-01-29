import styled from 'styled-components'

import { Title } from '@/components/atoms/Title/Title.styles'

export const Wrapper = styled.div`
  padding: 0px 25px;
  max-height: 400px;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 5px;
`

export const StyledTitle = styled(Title)`
  /* margin-bottom: 10px; */
  font-size: ${({ theme }) => theme.fontSize.s};

`
