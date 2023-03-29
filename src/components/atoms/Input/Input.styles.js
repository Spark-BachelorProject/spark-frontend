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
  position: relative;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.iconPlusBg};
  }
  &[type='time']::-webkit-calendar-picker-indicator {
    display: none;
  }

  /* ${({ isCheckbox }) =>
    isCheckbox &&
    `&::before {
    content: '';
    position: absolute;
    top: 50%;
    right: 50%;
    width: 50%;
    height: 50%;
    transform: translate(50%, -50%);
    background-color: black;


    transform-origin: bottom left;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  }`} */
`
