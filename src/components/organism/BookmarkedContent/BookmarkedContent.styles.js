import styled from 'styled-components'

import { ReactComponent as MoreInfoIcon } from '@/assets/icons/three-dots.svg'

export const Wrapper = styled.div`
  width: 100%;
  min-width: 300px;
  padding: 0 30px;
  margin-bottom: -10px;
`
export const HeadingWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`

export const StyledMoreInfoIcon = styled(MoreInfoIcon)`
  margin-left: auto;
  cursor: pointer;
  scale: 1.1;
  & > path {
    stroke: ${({ theme }) => theme.colors.checkboxTick};
  }

  &:hover {
    & > path {
      stroke: ${({ theme }) => theme.colors.textHeader};
      transition: 100ms linear;
    }
  }
`
