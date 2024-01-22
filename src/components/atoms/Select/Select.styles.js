import styled from 'styled-components'

export const StyledSelect = styled.select`
  /* -webkit-appearance: none; */
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.02);
  height: 35px;
  width: 100px;
  cursor: ${({ disabled }) => (disabled ? 'disable' : 'pointer')};
  background: ${({ theme }) => theme.colors.secondaryBg};
  border-radius: 7px;
  color: ${({ theme }) => theme.colors.selectFont};
  padding: 5px 15px;
  font-size: ${({ theme }) => theme.fontSize.sPlus};
  font-weight: 400;
  border: 1px solid ${({ theme }) => theme.colors.buttonBorder};
  

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
