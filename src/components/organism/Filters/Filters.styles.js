import { Input } from '@/components/atoms/Input/Input.styles'
import { Label } from '@/components/atoms/Label/Label.styles'
import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 0 20px 10px 20px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & span {
    color: ${({ theme }) => theme.colors.labelFont};
  }

  ${Input} {
    max-width: 45%;
  }
`

export const TimeFromToWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 90%;

  ${Label} {
    margin: 5px 0;
    display: flex;
  }
`
