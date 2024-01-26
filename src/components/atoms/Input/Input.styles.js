import styled from 'styled-components'

export const Input = styled.input`
  /* box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.02); */

  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.inputBg};
  padding: 9px 13px;
  border-radius: 7px;
  color: ${({ theme }) => theme.colors.inputFont};
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.m};

  border: 1px solid
    ${({ error, theme }) => (error ? theme.colors.redFont : theme.colors.postBorder)};

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.iconPlusBg};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }

  &[type='time'],
  &[type='date'] {
    max-height: 39px;
  }
`
