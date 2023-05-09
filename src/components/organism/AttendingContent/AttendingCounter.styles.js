import styled from 'styled-components'

import { Title } from '@/components/atoms/Title/Title.styles'

export const Wrapper = styled.div`
  padding: 0px 40px 0 20px;
  height: 300px;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 5px;
`

export const StyledTitle = styled(Title)`
  margin-bottom: 10px;
`
