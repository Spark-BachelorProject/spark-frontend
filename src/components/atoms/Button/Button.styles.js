import styled from 'styled-components'

export const Button = styled.button`
  width: ${({ isBig }) => (isBig ? '150px' : 'auto')};
  text-align: center;
  background-color: ${({ theme }) => theme.colors.buttonBg};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ isBig }) => (isBig ? '14px 25px' : '10px 18px')};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
`
