import styled from 'styled-components'

export const Button = styled.button`
  width: ${({ isBig }) => (isBig ? '150px' : 'auto')};
  text-align: center;
  background-color: ${({ theme }) => theme.colors.buttonBg};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ isBig }) => (isBig ? '16px 32px' : '8px 18px')};
  border: none;
  border-radius: 5px;
  cursor: pointer;
`
