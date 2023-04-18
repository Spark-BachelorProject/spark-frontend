import styled from 'styled-components'

export const Wrapper = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: relative;
  margin-bottom: 60px;

  & > a {
    font-size: ${({ theme }) => theme.fontSize.l};
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    color: ${({ theme }) => theme.colors.navigationInactive};
    text-decoration: none;
    font-weight: 400;
    padding: 10px 15px;
    border-radius: 7px;
  }
  // TODO: check colors
  & > a.${'active'} {
    color: ${({ theme }) => theme.colors.textHeader};
    font-weight: 600;
  }

  & > a:hover {
    background-color: ${({ theme }) => theme.colors.modalBg};
    transition: 200ms ease-in-out;
  }

  & > a > svg > path {
    stroke: ${({ theme }) => theme.colors.navigationInactive};
  }

  & > a.${'active'} > svg > path {
    stroke: ${({ theme }) => theme.colors.iconPrimaryActive};
  }

  &::before {
    position: absolute;
    content: '';
    bottom: -30px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.divider};
  }
`
