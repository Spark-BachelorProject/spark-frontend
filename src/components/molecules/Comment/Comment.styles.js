import { Text } from '@/components/atoms/Text/Text.styles'
import { Thumbnail } from '@/components/atoms/Thumbnail/Thumbnail.styles'
import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 15px;

  ${Text} {
    width: auto;
    color: ${({ theme }) => theme.colors.titleFont};
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`

export const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  & > div {
    display: flex;
    flex-direction: row;
    gap: 7px;
    margin-bottom: 5px;
  }

  ${Thumbnail} {
    width: 20px;
    height: 20px;
    margin-right: 13px;
  }

  ${Text} {
    color: ${({ theme }) => theme.colors.commentDetails};
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`
