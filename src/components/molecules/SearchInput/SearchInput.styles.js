import styled from 'styled-components'
import { Input } from '@/components/atoms/Input/Input.styles'

export const InputWrapper = styled.div`
  position: relative;

  & > svg {
    position: absolute;
    left: 8px;
    pointer-events: none;
    top: 50%;
    transform: translateY(-50%);
  }

  & > ${Input} {
    padding-left: 30px;
  }
`
