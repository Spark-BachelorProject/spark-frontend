import styled from 'styled-components'
import { ReactComponent as MoreInfoIcon } from '@/assets/icons/three-dots.svg'

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 10px;
`
export const HeadingWrapper = styled.div`
  padding: 0 5px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const StyledMoreInfoIcon = styled(MoreInfoIcon)`
  margin-left: auto;
  cursor: pointer;
  scale: 1;
  & path {
    stroke: ${({ theme }) => theme.colors.checkboxTick};
  }

  &:hover {
    & > path {
      stroke: ${({ theme }) => theme.colors.textHeader};
      transition: 100ms linear;
    }
  }
`
