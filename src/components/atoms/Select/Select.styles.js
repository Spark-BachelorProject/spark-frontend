import styled from 'styled-components'

export const StyledSelect = styled.select`
  height: 39px;
  width: auto;
  cursor: ${({ disabled }) => (disabled ? 'disable' : 'pointer')};
  background: ${({ theme }) => theme.colors.secondaryBg};
  border-radius: 9px;
  color: ${({ theme }) => theme.colors.text};
  padding: 5px 15px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 600;
  border: 1px solid ${({ theme }) => theme.colors.postBorder};

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.iconPlusBg};
  }

  & > option {
    color: ${({ theme }) => theme.colors.black};
    background: ${({ theme }) => theme.colors.white};
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px 0px;
  }

  :disabled {
    color: ${({ theme }) => theme.colors.textsecondary};
    font-weight: 300;
  }
`
