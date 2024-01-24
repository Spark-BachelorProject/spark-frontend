import styled from 'styled-components'

import { Button } from '@/components/atoms/Buttons/Button.styles'
import Tags from '@/components/atoms/Tags/Tags'
import { Text } from '@/components/atoms/Text/Text.styles'

export const Wrapper = styled.section`
  border: 1px solid ${({ theme }) => theme.colors.postBorder};
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  width: 250px;
  height: fit-content;
  padding: 20px 25px;
  border-radius: 7px;

  ${Text} {
    width: 100%;
  }

  & > * {
    margin-bottom: 10px;
  }

  & > *:last-child {
    margin-bottom: 0;
  }
  //this is done so its able to be displayed with 270px width ->  width of the post (684px) + gap (44px) + min navbar width (270px)
  @media screen and (max-width: 997px) {
    display: none;
  }
`

export const StyledTags = styled(Tags)`
  ${Button} {
    width: 100%;
    border-radius: 10px;
  }
`
