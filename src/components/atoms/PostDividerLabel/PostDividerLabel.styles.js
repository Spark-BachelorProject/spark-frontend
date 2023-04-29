import styled from 'styled-components'

export const PostDividerLabel = styled.span`
  position: relative;
  color: ${({ theme }) => theme.colors.divider};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px 0;

  &::after,
  &::before {
    content: '';
    height: 2px;
    background-color: ${({ theme }) => theme.colors.divider};
    flex: 1;
  }

  &::before {
    margin-right: 15px;
  }

  &::after {
    margin-left: 15px;
  }
`
