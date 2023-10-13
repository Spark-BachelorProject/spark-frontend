import styled from 'styled-components'

import Tags from '@/components/atoms/Tags/Tags'
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
`

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.selectFont};
`

export const Wrapper = styled.div`
  position: absolute;
  top: calc(70px + 20px);
  left: 60px;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.primaryBg};
  border-radius: 10px;
  padding: 15px 20px;
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
