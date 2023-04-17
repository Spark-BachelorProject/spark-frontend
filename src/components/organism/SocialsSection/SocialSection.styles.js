import { Title } from '@/components/atoms/Title/Title.styles'
import styled from 'styled-components'

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 10px 15px;

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
