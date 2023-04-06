import styled from 'styled-components'

export const Wrapper = styled.div``

export const CounterWrapper = styled.div`
  position: relative;
`

export const CounterNumber = styled.span`
  position: absolute;
  top: -15px;
  right: -3px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 15px;
  font-size: 7px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.redFont};
  border: 2px solid ${({ theme }) => theme.colors.counterBorder};
  border-radius: 50%;
  box-shadow: none;
`
