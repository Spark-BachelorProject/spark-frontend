import styled from 'styled-components'

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.titleFont};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ isBold }) => (isBold ? 500 : 400)};

  span {
    font-weight: 600;
  }
`
