import styled from 'styled-components'

export const Wrapper = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: relative;

  & > a {
    font-size: ${({ theme }) => theme.fontSize.mPlus};
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    color: ${({ theme }) => theme.colors.titleFont};
    font-weight: 500;
    padding: 17px 15px;
    width: 110%;
    margin: -2px 0 -2px -10px;
    border-radius: 7px;
    letter-spacing: -0.01em;

    :hover {
      background-color: ${({ theme }) => theme.colors.iconBgHover};
      /* transition: 200ms ease-in-out; */

      & > svg {
        scale: 1.1;
        transition: 100ms ease-in-out;
      }
    }
  }

  & > a.${'active'} {
    color: ${({ theme }) => theme.colors.titleFont};
    font-weight: 700;
  }

  & > a > svg > path {
    stroke: ${({ theme }) => theme.colors.text};
  }

  & > a.${'active'} > svg > path {
    stroke: ${({ theme }) => theme.colors.titleFont};
  }
`
