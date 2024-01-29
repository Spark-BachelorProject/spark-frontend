import styled from 'styled-components'

import { Text } from '@/components/atoms/Text/Text.styles'
import { Thumbnail } from '@/components/atoms/Thumbnail/Thumbnail.styles'

export const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 15px;

  ${Text} {
    width: auto;
    color: ${({ theme }) => theme.colors.titleFont};
    font-size: ${({ theme }) => theme.fontSize.sPlus};
  }
`

export const Details = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  flex-direction: row;
  gap: 5px;

  & > div {
    display: flex;
    flex-direction: row;
    gap: 5px;
    margin-bottom: 5px;
  }

  ${Thumbnail} {
    width: 20px;
    height: 20px;
    margin-right: 13px;
  }

  ${Text} {
    color: ${({ theme }) => theme.colors.grayDetails};
    font-size: ${({ theme }) => theme.fontSize.xs};

  }
`
