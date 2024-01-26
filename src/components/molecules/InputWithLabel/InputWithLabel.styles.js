import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;

  & > svg {
    position: absolute;
    right: 15px;
    pointer-events: none;
    top: 50%;
    transform: translateY(-50%);
    scale: 0.9;
  }

  & > svg > path {
    scale: 0.9;
    stroke: ${({ theme }) => theme.colors.fontRed};
    fill: ${({ theme }) => theme.colors.fontRed};
  }
`
