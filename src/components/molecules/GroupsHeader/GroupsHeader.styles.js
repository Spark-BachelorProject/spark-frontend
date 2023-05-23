import styled from 'styled-components'

import { Text } from '@/components/atoms/Text/Text.styles'
import { Title } from '@/components/atoms/Title/Title.styles'

export const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
  //TODO: Add some background image
  background-color: #221402;
  border-radius: 5px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  ${Title} {
    font-size: 20px;
  }

  ${Text} {
    font-size: 14px;
  }
`
