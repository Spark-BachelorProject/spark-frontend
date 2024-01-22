import styled from 'styled-components'

import { PageContent } from '@/components/templates/PageContent/PageContent'

export const StyledPageContent = styled(PageContent)`
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.m}) {
    margin-left: 20px;
    margin-right: 20px;

    & > div {
      display: flex;
      flex-direction: row;
      gap: 20px;
      max-width: fit-content;
    }
  }
`

export const RightWrapper = styled.div`
  @media (min-width: ${({ theme }) => theme.breakPoints.m}) {
    min-width: 684px;
  }
`
