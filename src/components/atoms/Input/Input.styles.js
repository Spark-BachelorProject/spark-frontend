import styled from 'styled-components'

export const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.inputBg};
  padding: 11px 13px;
  border-radius: 7px;
  color: ${({ theme }) => theme.colors.inputFont};
  border: 1px solid ${({ theme }) => theme.colors.buttonBorder};
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.m};

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.iconPlusBg};
  }
  &[type='time']::-webkit-calendar-picker-indicator {
    display: none;
  }
  &[type='time'] {
    padding: 11px 19px;
  }
`
