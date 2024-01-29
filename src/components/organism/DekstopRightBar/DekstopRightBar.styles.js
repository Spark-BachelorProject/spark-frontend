import styled from 'styled-components'

import { DividerLabel } from '@/components/atoms/DividerLabel/DividerLabel.styles'
import { Title } from '@/components/atoms/Title/Title.styles'
import { SocialItem } from '@/components/molecules/SocialItem/SocialItem'

export const Wrapper = styled.div`
  flex: 1 0 250px; //inital width
  max-width: 330px;
  height: calc(100vh - 70px);
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  /* position: sticky; */
  top: 35px;

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.l}) {
    display: none;
  }

  ${DividerLabel} {
    width: calc(100% - 40px);
    margin: 0 auto;
  }
`

export const Container = styled.div`
  padding: 0 25px;
  border-radius: 5px;
  width: 100%;
  height: auto;

  &:first-child {
    padding-top: 0;
  }

  & > span {
    cursor: pointer;
    font-weight: 600;
    top: 10px;
    font-size: ${({ theme }) => theme.fontSize.s};
    color: ${({ theme }) => theme.colors.text};
  }

  & > span:hover {
    color: ${({ theme }) => theme.colors.textHeader};
    transition: 100ms ease-in-out;
  }
`

export const StyledTitle = styled(Title)`
  margin: 8px 0;
  margin-bottom: 12px;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 500;
`

export const StyledSocialItem = styled(SocialItem)`
  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    transition: 200ms ease-in-out;
  }
`
