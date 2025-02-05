import styled from 'styled-components'

export const DividerLabel = styled.span`
  position: relative;
  color: ${({ theme }) => theme.colors.iconPrimary};
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
    height: 1px;
    background-color: ${({ theme }) => theme.colors.postBorder};
    flex: 1;
  }

  &::before {
    margin-right: ${({ isSolid }) => (isSolid ? '0' : '15px')};
  }

  &::after {
    margin-left: ${({ isSolid }) => (isSolid ? '0' : '15px')};
  }
`
