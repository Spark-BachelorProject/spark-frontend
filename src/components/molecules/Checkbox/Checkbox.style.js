import styled from 'styled-components'

export const Wrapper = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 30px 0 0 0;
`

export const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
`

export const CheckboxBackground = styled.div`
  display: inline-block;
  position: relative;
  width: 20px;
  height: 20px;
  cursor: pointer;
  background-color: ${({ checked, theme }) => (checked ? '#2196f3' : theme.colors.checkboxBg)};

  border: 1.5px solid ${({ theme }) => theme.colors.checkboxBorder};
  border-radius: 4px;
  transition: 100ms linear;
`

export const CheckboxCheckmark = styled.span`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(+45deg);
  width: 6px;
  height: 11px;

  border-bottom: ${({ checked, theme }) =>
    checked ? '2px solid white' : `1px solid ${theme.colors.inputBg}`};

  border-right: ${({ checked, theme }) =>
    checked ? '2px solid white' : `1px solid ${theme.colors.inputBg}`};
`
