import styled from 'styled-components'

import Tags from '@/components/atoms/Tags/Tags'
import { Title } from '@/components/atoms/Title/Title.styles'
import { Header } from '@/components/organism/Post/Post.styles'

export const StyledTags = styled(Tags)`
  flex-wrap: wrap;
  width: 350px;
`

export const Time = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  & > svg {
    width: 18px;
    height: 18px;
    min-height: 18px;
    min-width: 18px;
  }

  & > svg > path {
    stroke: ${({ theme }) => theme.colors.accent};
  }
`

export const Wrapper = styled.div`
  box-shadow: 0px 7px 30px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: calc(70px + 20px);
  left: 60px;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  border-radius: 15px;
  padding: 25px 25px;
  height: auto;
  max-width: 500px;
  width: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: left;
  align-items: left;
  @media (max-width: 768px) {
    position: fixed;
    bottom: 60px;
    top: auto;
    left: 0;
    right: 0;
    height: auto;
    width: 100%;
    padding: 20px;
  }
`

export const StyledHeader = styled(Header)`
  margin-bottom: 10px;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: -50px;
`

export const StyledTitle = styled(Title)`
  margin-top: 10px;
`
