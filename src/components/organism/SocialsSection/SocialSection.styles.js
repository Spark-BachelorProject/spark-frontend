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
    font-weight: 600;
  }

  &::before {
    position: absolute;
    content: '';
    bottom: -30px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.divider};
  }

  & > span {
    margin-top: 15px;
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSize.sPlus};
    color: ${({ theme }) => theme.colors.textHeader};
  }
`
