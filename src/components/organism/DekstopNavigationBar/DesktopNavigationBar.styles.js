import styled from 'styled-components'
import { Title } from '@/components/atoms/Title/Title.styles'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1 0 270px; //inital width
  max-width: 330px;
  height: calc(100vh - 70px);
  padding: 20px;

  //this is done so its able to be displayed with 270px width ->  width of the post (684px) + gap (44px) + min navbar width (270px)
  @media screen and (max-width: 998px) {
    display: none;
  }
`

export const NavigationSection = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  margin-bottom: 60px;

  & > a {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    color: ${({ theme }) => theme.colors.iconPrimary};
    text-decoration: none;
  }
  // TODO: check colors
  & > a.${'active'} {
    color: ${({ theme }) => theme.colors.black};
  }

  & > a > svg > path {
    stroke: ${({ theme }) => theme.colors.iconPrimary};
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
    height: 1px;
    background-color: ${({ theme }) => theme.colors.divider};
  }
`

export const Socials = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  & > ${Title} {
    margin-bottom: 25px;
    font-size: ${({ theme }) => theme.fontSize.mPlus};
  }

  &::before {
    position: absolute;
    content: '';
    bottom: -30px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.divider};
  }
`

export const SocialItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  & > div {
    display: flex;
    gap: 10px;
    flex-direction: row;
  }
`
