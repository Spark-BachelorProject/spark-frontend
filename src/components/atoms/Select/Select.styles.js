import styled from 'styled-components'

export const StyledSelect = styled.select`
  -webkit-appearance: none;
  height: 35px;
  width: auto;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.secondaryBg};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.selectFont};
  padding: 5px 15px;
  margin-right: 5px;
  font-size: 13px;
  border: 2px solid ${({ theme }) => theme.colors.buttonBorder};

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
`
