import styled from 'styled-components'

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;

  & > svg {
    position: absolute;
    right: 15px;
    pointer-events: none;
    top: 50%;
    transform: translateY(-80%);
    scale: 1;
  }

  & > svg > path {
    stroke: ${({ theme }) => theme.colors.fontRed};
    fill: ${({ theme }) => theme.colors.fontRed};
  }
`
