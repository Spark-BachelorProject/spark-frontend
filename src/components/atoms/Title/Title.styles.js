import styled from 'styled-components'

export const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.colors.textHeader};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 500;
  span {
    font-weight: 600;
  }
`
