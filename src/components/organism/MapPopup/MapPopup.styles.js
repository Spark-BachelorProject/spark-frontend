import styled from 'styled-components'

import Tags from '@/components/atoms/Tags/Tags'
import { Text } from '@/components/atoms/Text/Text.styles'
import { Header } from '@/components/organism/Post/Post.styles'

export const StyledTags = styled(Tags)`
  flex-wrap: wrap;
  margin: 0;
  width: 300px;
`

export const Time = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  & > svg > path {
    stroke: ${({ theme }) => theme.colors.accent};
  }
`

export const Wrapper = styled.div`
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.1);

  position: absolute;
  top: calc(70px + 20px);
  left: 60px;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  border-radius: 15px;
  padding: 25px 25px;
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
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
  margin: 0;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: -50px;
`

export const StyledText = styled(Text)`
  margin: 10px 0 10px 0;
`
