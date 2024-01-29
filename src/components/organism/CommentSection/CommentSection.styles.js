import styled from 'styled-components'

import { Text } from '@/components/atoms/Text/Text.styles'

export const CommentForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  gap: 10px;

  & > button > svg > path {
    transform: translateY(1px);
  }
`

export const StyledText = styled(Text)`
  cursor: ${({ isComments }) => (isComments ? 'pointer' : 'default')};
  color: ${({ theme }) => theme.colors.grayDetails};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 400;

  :hover {
    color: ${({ theme }) => theme.colors.text};
    transition: 100ms ease-in-out;

    & > svg > path {
      stroke: ${({ theme }) => theme.colors.text};
      transition: 100ms ease-in-out;
    }
  }

  & > svg {
    transition: transform 0.2s ease-in-out;
    transform: translate(2px, 1px)
      ${({ commentSectionIsOpen }) => (commentSectionIsOpen ? 'rotate(180deg)' : '')};

    & > path {
      stroke: ${({ theme }) => theme.colors.placeholder};
    }
  }
`

export const Comments = styled.section`
  margin-top: 15px;
`
