import styled from 'styled-components'

export const Input = styled.input`
  background-color: solid 1px ${({ theme }) => theme.colors.white};
  padding: 11px 13px;
  border-radius: 7px;
  color: ${({ theme }) => theme.colors.inputFont};
  border: 1px solid ${({ theme }) => theme.colors.selectBorder};
  width: clamp(40px, 100%, 400px);
  font-size: ${({ theme }) => theme.fontSize.m};
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.iconPlusBg};
  }
`
