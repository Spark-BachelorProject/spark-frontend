import styled from 'styled-components'

export const Text = styled.span`
  font-weight: ${({ isBold }) => (isBold ? 600 : 400)};
  font-size: ${({ isBig, theme }) => (isBig ? theme.fontSize.m : theme.fontSize.sPlus)};

  /* background-color: ${({ isRed, theme }) =>
    isRed ? theme.colors.redFont : theme.colors.accent}; */

  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  width: max-content;

  & > svg {
    margin: 0 0 1px 3px;
  }
`
