import { Input } from '@/components/atoms/Input/Input.styles'
import styled from 'styled-components'

export const InputWrapper = styled.div`
  position: relative;

  & > svg {
    position: absolute;
    right: 15px;
    pointer-events: none;
    top: 50%;
    transform: translateY(-50%);
  }

  & > svg > path {
    stroke: ${({ theme }) => theme.colors.iconSecondary};
    fill: ${({ theme, isEmptyIcon }) => (isEmptyIcon ? 'default' : theme.colors.iconSecondary)};
  }

  & > ${Input} {
    background-color: ${({ theme }) => theme.colors.iconBg};
  }
`
