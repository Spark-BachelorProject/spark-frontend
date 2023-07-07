import styled from 'styled-components'

export const DividerLabel = styled.span`
  position: relative;
  color: ${({ theme }) => theme.colors.divider};
  font-size: ${({ theme }) => theme.fontSize.sPlus};
  font-weight: 600;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px 0;

  &::after,
  &::before {
    content: '';
    height: 2px;
    background-color: ${({ theme }) => theme.colors.darkDivider};
    flex: 1;
  }

  &::before {
    margin-right: 15px;
  }

  &::after {
    margin-left: 15px;
  }
`
