import styled from 'styled-components'

import { Input } from '@/components/atoms/Input/Input.styles'

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;

  & > svg {
    position: absolute;
    right: 15px;
    pointer-events: none;
    top: 50%;
    transform: translateY(-50%);
    scale: 1.1;
    z-index: 2;
  }

  & > svg > path {
    stroke: ${({ theme }) => theme.colors.iconSecondary};
    fill: ${({ theme, isEmptyIcon }) => (isEmptyIcon ? 'default' : theme.colors.iconSecondary)};
  }

  & > ${Input} {
    background-color: ${({ theme }) => theme.colors.iconBg};
    border-radius: 25px;
    padding-left: 25px;
  }
`
