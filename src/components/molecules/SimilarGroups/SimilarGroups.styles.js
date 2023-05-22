import styled from 'styled-components'

import { Text } from '@/components/atoms/Text/Text.styles'

export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  width: 250px;
  height: fit-content;
  padding: 25px 20px;
  border-radius: 7px;

  & > * {
    margin-bottom: 25px;
  }

  & > *:last-child {
    margin-bottom: 0;
  }
  //this is done so its able to be displayed with 270px width ->  width of the post (684px) + gap (44px) + min navbar width (270px)
  @media screen and (max-width: 997px) {
    display: none;
  }
`

export const IconAndLabel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  & > div {
    display: flex;
    flex-direction: column;
    text-align: left;
  }

  ${Text} {
    font-size: ${({ theme }) => theme.fontSize.s};
    color: ${({ theme }) => theme.colors.placeholder};
  }
`

export const IconBackground = styled.div`
  background-color: ${({ theme }) => theme.colors.navbarBorder};
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  & > svg > path {
    stroke: ${({ theme }) => theme.colors.buttonBg};
  }
`
