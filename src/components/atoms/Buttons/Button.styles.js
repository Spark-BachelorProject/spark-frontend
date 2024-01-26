import styled from 'styled-components'

export const Button = styled.button`
  font-size: ${({ theme }) => theme.fontSize.s};

  text-align: center;
  background-color: ${({ theme, isGray }) =>
    isGray ? `${theme.colors.navbarBg}` : theme.colors.accent};
  color: ${({ theme, isGray }) => (isGray ? `${theme.colors.text}` : `${theme.colors.white}`)};
  padding: ${({ isBig }) => (isBig ? '11px 20px' : '10px 16px')};
  border: ${({ theme, isGray }) =>
    isGray ? `1px solid ${theme.colors.navbarBorder}` : `1px solid ${theme.colors.postBorder}`};
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonBg};
    color: ${({ theme }) => theme.colors.white};
    transition:  200ms ease-in-out;
  }
`
