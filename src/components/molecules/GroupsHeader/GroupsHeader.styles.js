import styled from 'styled-components'

import { Text } from '@/components/atoms/Text/Text.styles'
import { Title } from '@/components/atoms/Title/Title.styles'

const image = Object.values(
  import.meta.glob('@assets/images/banner.png', { eager: true, as: 'url' })
)

export const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
  background-image: url(${image[0]});
  border-radius: 5px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  ${Title} {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.white};
    text-shadow: 0px 0px 10px rgba(59, 130, 246, 1);
  }

  ${Text} {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.white};
    text-shadow: 0px 0px 10px rgba(59, 130, 246, 1);
  }
`
