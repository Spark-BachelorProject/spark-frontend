import styled from 'styled-components'

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.textHeader};
  font-size: ${({ isBig }) => (isBig ? `17px` : `15px`)};
  font-weight: ${({ isBold }) => (isBold ? 500 : 400)};
`
