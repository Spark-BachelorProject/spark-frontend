import styled from 'styled-components'
import { ReactComponent as PlusSquareIcon } from '@/assets/icons/plus-square.svg'

export const Wrapper = styled.nav`
  width: 100vw;
  height: 70px;
  position: fixed;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  padding: 0 20px;

  //hide when desktop navbar is able to show
  @media screen and (min-width: 998px) {
    display: none;
  }
`

export const IconsWrapper = styled.div`
  max-width: 650px;
  display: flex;
  margin: 16px auto;
  height: 38px;
  align-items: center;
  justify-content: space-between;

  & > a > svg > path {
    stroke: ${({ theme }) => theme.colors.iconPrimary};
  }

  & > a.${'active'} > svg > path {
    stroke: ${({ theme }) => theme.colors.iconPrimaryActive};
  }

  & > a.${'active'} > svg {
    transition: scale 0.1s ease-in-out;
    scale: 1.2;
  }
`

export const StyledPlusSquareIcon = styled(PlusSquareIcon)`
  background-color: ${({ theme }) => theme.colors.iconPlusBg};
  border-radius: 50%;
  width: 42px;
  height: 42px;
  cursor: pointer;

  & > path {
    stroke: ${({ theme }) => theme.colors.white} !important;
  }
`
