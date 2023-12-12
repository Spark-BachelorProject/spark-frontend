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
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
    padding: 14px 15px;
    border-radius: 7px;
  }

  & > a.${'active'} {
    color: ${({ theme }) => theme.colors.textHeader};
    font-weight: 700;
  }

  & > a:hover {
    background-color: ${({ theme }) => theme.colors.modalBg};
    transition: 200ms ease-in-out;
  }

  & > a > svg > path {
    stroke: ${({ theme }) => theme.colors.text};
  }

  & > a.${'active'} > svg > path {
    stroke: ${({ theme }) => theme.colors.iconPrimaryActive};
  }
`
