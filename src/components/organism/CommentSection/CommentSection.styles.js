import styled from 'styled-components'

import { Text } from '@/components/atoms/Text/Text.styles'

export const CommentForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  gap: 10px;

  & > button > svg > path {
    transform: translateY(1px);
  }
`

export const StyledText = styled(Text)`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 500;

  & > svg {
    transition: transform 0.2s ease-in-out;
    transform: translate(2px, 1px)
      ${({ commentSectionIsOpen }) => (commentSectionIsOpen ? 'rotate(180deg)' : '')};
  }

  & > svg > path {
    color: ${({ theme }) => theme.colors.white};
  }
`

export const Comments = styled.section`
  margin-top: 15px;
`
