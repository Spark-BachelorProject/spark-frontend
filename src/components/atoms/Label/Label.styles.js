import styled from 'styled-components'

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.labelFont};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 500;
`
