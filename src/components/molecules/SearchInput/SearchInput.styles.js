import styled from 'styled-components'

export const InputWrapper = styled.div`
  position: relative;

  & > svg {
    position: absolute;
    left: 8px;
    pointer-events: none;
    top: 50%;
    transform: translateY(-50%);
  }
`
