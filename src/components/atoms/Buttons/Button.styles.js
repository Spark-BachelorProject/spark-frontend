import styled from 'styled-components'

export const Button = styled.button`
  text-align: center;
  background-color: ${({ theme, isGray }) =>
    isGray ? `${theme.colors.navbarBg}` : theme.colors.accent};
  color: ${({ theme, isGray }) => (isGray ? `${theme.colors.text}` : `${theme.colors.white}`)};
  padding: ${({ isBig }) => (isBig ? '10px 20px' : '6px 16px')};
  border: ${({ theme, isGray }) =>
    isGray ? `1px solid ${theme.colors.navbarBorder}` : `1px solid ${theme.colors.postBorder}`};
  border-radius: 8px;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.xs};
  letter-spacing: 0.15px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonBg};
    color: ${({ theme }) => theme.colors.white};
    transition: 200ms ease-in-out;

    & > svg > path {
      stroke: ${({ theme }) => theme.colors.white};
    }
  }

  :disabled {
    color: ${({ theme }) => theme.colors.white};
    opacity: background-color 0.5;
    cursor: not-allowed;

    &:hover {
      background-color: ${({ theme }) => theme.colors.navbarBg};
      color: ${({ theme }) => theme.colors.text};
    }
  }
`
