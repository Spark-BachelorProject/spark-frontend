import styled from 'styled-components'

export const CounterWrapper = styled.div`
  position: relative;
`

export const CounterNumber = styled.span`
  position: absolute;
  top: ${({ hasCounter }) => (hasCounter ? '-24px' : '-13px')};
  right: ${({ hasCounter }) => (hasCounter ? '-15px' : '-4px')};

  display: flex;
  justify-content: center;
  width: ${({ hasCounter }) => (hasCounter ? '17px' : '13px')};
  height: ${({ hasCounter }) => (hasCounter ? '17px' : '13px')};

  font-size: 11px;
  font-weight: 600;
  color: ${({ theme, hasCounter }) => (hasCounter ? theme.colors.white : 'rgba(0, 0, 0, 0)')};
  background-color: ${({ isRed, theme }) => (isRed ? theme.colors.redFont : theme.colors.accent)};

  border: ${({ theme, hasCounter }) =>
    hasCounter ? 'none' : `2px solid ${theme.colors.counterBorder}`};
  border-radius: 50%;
`
