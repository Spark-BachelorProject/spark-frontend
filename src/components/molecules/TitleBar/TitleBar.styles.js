import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 20px;

  @media (max-width: ${({ theme }) => theme.breakPoints.m}) {
    width: 650px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.m}) {
    width: 2000px;
  }
`
