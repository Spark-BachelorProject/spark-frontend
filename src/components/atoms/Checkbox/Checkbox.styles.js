import styled from 'styled-components'

export const Checkbox = styled.input`
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none;
  /* creating a custom design */
  width: 17px;
  height: 17px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.checkboxBorder};
  background-color: ${({ theme }) => theme.colors.checkboxBg};
  outline: none;
  cursor: pointer;
  position: relative;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.accent};
  }

  &:checked {
    background-color: ${({ theme }) => theme.colors.checkboxBg};
    position: relative;
    transition: 0.1s linear;
  }

  &:checked::before {
    content: '\\2713'; //unicode for checkmark
    font-size: 10px;
    width: 17px;
    height: 17px;
    color: ${({ theme }) => theme.colors.checkboxTick};
    position: absolute;
    left: 80%;
    top: 64%;
    transform: translate(-50%, -50%);
    transition: 0.1s linear;
  }
`
