import styled from 'styled-components'

export const Input = styled.input`
  background-color: solid 1px ${({ theme }) => theme.colors.white};
  padding: 11px 13px;
  border-radius: 7px;
  color: ${({ theme }) => theme.colors.inputFont};
  border: 1px solid ${({ theme }) => theme.colors.buttonBorder};
  /* border: ${({ hasBorder }) =>
    hasBorder ? `1px solid ${({ theme }) => theme.colors.buttonBorder}` : 'none'}; */
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.m};

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.iconPlusBg};
  }
`
