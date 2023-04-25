import { Title } from '@/components/atoms/Title/Title.styles'
import { ReactComponent as MoreInfoIcon } from '@/assets/icons/three-dots.svg'
import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 0 10px;
  width: 340px;
`

export const NotificationsWrapper = styled.div`
  margin-top: 10px;
`

export const HeadingWrapper = styled.div`
  padding: 0 5px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const StyledTitle = styled(Title)`
  display: flex;
  flex-direction: column;

  & > div > span {
    transform: translate(15px, 5px);
  }
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
