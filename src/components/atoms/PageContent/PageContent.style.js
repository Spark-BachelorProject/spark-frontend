import styled from 'styled-components'

export const PageContent = styled.div`
  max-width: 650px;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.m}) {
    margin-left: 250px; //same as right navbar
    width: auto;
    max-width: 684px;
    position: relative;
    float: left;
    left: 40px;
  }
`
