import styled from 'styled-components'

import { Error } from '@/components/atoms/Error/Error.styles'
import { Title } from '@/components/atoms/Title/Title.styles'

export const RatingWrapper = styled.div`
  padding: 20px 0;
  display: flex;
  gap: 15px;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    gap: 5px;
  }
`

export const Wrapper = styled.div`
  padding: 0 20px;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  ${Error} {
    font-weight: 600;
    padding: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    width: 90vw;
  }
`

export const StyledTitle = styled(Title)`
  margin: 8px 0;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 700;
`

export const HeaderWrapper = styled.div`
  width: 80%;
  padding: 0 10px;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > svg {
    cursor: pointer;
    scale: 1.7;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`
