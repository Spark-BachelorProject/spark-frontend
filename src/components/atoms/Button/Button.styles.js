import styled from 'styled-components'

export const Button = styled.button`
  font-size: ${({ theme }) => theme.fontSize.sPlus};

  text-align: center;
  background-color: ${({ theme, isGray }) =>
    isGray ? `${theme.colors.navbarBg}` : theme.colors.accent};
  color: ${({ theme, isGray }) => (isGray ? `${theme.colors.accent}` : `${theme.colors.white}`)};
  padding: ${({ isBig }) => (isBig ? '11px 22px' : '7px 18px')};
  border: ${({ theme, isGray }) =>
    isGray ? `1px solid ${theme.colors.navbarBorder}` : `1px solid ${theme.colors.navbarBorder}`};
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonBg};
    color: ${({ theme }) => theme.colors.white};
    transition: 200ms ease-in-out;
  }
`
