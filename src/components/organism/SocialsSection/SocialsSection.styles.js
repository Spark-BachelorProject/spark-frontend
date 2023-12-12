import styled from 'styled-components'

import { Title } from '@/components/atoms/Title/Title.styles'

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0px 15px;

  & > ${Title} {
    margin-bottom: 13px;
    font-size: ${({ theme }) => theme.fontSize.mPlus};
    font-weight: 600;
  }
`
