import styled from 'styled-components'

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.textHeader};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ isBold }) => (isBold ? 700 : 500)};

  span {
    font-weight: 600;
  }
`
