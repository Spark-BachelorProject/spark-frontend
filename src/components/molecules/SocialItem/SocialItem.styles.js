import styled from 'styled-components'

import { Text } from '@/components/atoms/Text/Text.styles'

export const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 20px;
  border-radius: 7px;
  width: 115%;
  margin-left: -20px;
  padding: 5px 20px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.iconBgHover};
  }
`

export const GroupIconDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.iconBg};
  padding: 8px;
  border-radius: 30px;
  height: 35px;
  width: 35px;
  border: 1px solid ${({ theme }) => theme.colors.postBorder};

  & > img {
    height: 20px;
    width: 20px;
    /* opacity: 0.8; */
  }
`

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: -30px;
  padding: 8px 20px;
  cursor: pointer;

  & > div {
    display: flex;
    gap: 5px;
    flex-direction: row;
  }
`

export const StyledText = styled(Text)`
  color: ${({ theme }) => theme.colors.grayDetails};
  font-size: ${({ theme }) => theme.fontSize.s};
`
