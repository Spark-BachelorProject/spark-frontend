import styled from 'styled-components'

export const Button = styled.button`
  font-size: ${({ theme }) => theme.fontSize.m};

  text-align: center;
  background-color: ${({ theme, borderOnly }) =>
    borderOnly ? 'transparent' : theme.colors.buttonOffColor};
  color: ${({ theme, borderOnly }) =>
    borderOnly ? `${theme.colors.text}` : `${theme.colors.white}`};
  padding: ${({ isBig }) => (isBig ? '11px 22px' : '8px 18px')};
  border: ${({ theme, borderOnly }) => (borderOnly ? `2px solid ${theme.colors.divider}` : 'none')};
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonBg};
    color: ${({ theme }) => theme.colors.white};
    transition: 200ms ease-in-out;
  }
`
