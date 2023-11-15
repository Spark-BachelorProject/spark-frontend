import styled from 'styled-components'

import Dot from '@/components/atoms/Dot/Dot'
import { Text } from '@/components/atoms/Text/Text.styles'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;

  gap: 0.3rem;
  padding: 8px 20px;
  margin-left: -20px;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.modalBg};
    transition: 200ms ease-in-out;
  }
`

export const RecomendedActivity = (props) => {
  const { name, average } = props
  return (
    <Wrapper>
      <Text isBig isBold>
        {name}
      </Text>
      <Dot />
      {average === 1 ? <Text>{average} post tyg.</Text> : <Text>{average} postów tyg.</Text>}
    </Wrapper>
  )
}
