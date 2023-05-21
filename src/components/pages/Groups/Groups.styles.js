import styled from 'styled-components'

import { TitleBar } from '@/components/molecules/TitleBar/TitleBar'

export const StyledTitleBar = styled(TitleBar)`
  padding: 0;
  margin-bottom: 20px;
`

export const GroupCardsSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-bottom: 20px;

  @media screen and (min-width: 684px) {
    grid-template-columns: 1fr 1fr;
  }
`
