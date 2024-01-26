import styled from 'styled-components'

import { Text } from '@/components/atoms/Text/Text.styles'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;

  gap: 0.5rem;
  width: 115%;
  margin-left: -20px;
  padding: 3px 20px;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.iconBgHover};
    /* transition: 200ms ease-in-out; */
  }
`

export const StyledText = styled(Text)`
  color: ${({ theme }) => theme.colors.grayDetails};
`

export const GroupIconDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: ${({ theme }) => theme.colors.iconBg}; */
  padding: 3px;
  border-radius: 30px;
  height: 40px;
  width: 40px;
  margin-right: -6px;
  opacity: 0.7;

  /* border: 1px solid ${({ theme }) => theme.colors.postBorder}; */

  & > img {
    height: 20px;
    width: 20px;
  }
`