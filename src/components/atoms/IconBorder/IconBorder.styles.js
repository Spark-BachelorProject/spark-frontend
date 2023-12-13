import styled from 'styled-components'

export const IconBorder = styled.div`
  border: solid 1px ${({ theme }) => theme.colors.selectBorder};
  background-color: ${({ theme }) => theme.colors.iconBg};
  height: 39px;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 13px;
  border-radius: 7px;
  margin-left: 10px;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.colors.iconBgHover};
    transition: 200ms ease-in-out;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.iconPlusBg};
  }

  & > svg > path {
    stroke: ${({ theme }) => theme.colors.iconSecondary};
  }
`
