import styled from 'styled-components'

import { Error } from '@/components/atoms/Error/Error.styles'
import { Input } from '@/components/atoms/Input/Input.styles'
import { Label } from '@/components/atoms/Label/Label.styles'

export const Wrapper = styled.form`
  padding: 0 20px 10px 20px;
  width: 450px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 5px;

  ${Error} {
    margin-top: 10px;
  }
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

export const ButtonsWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 10px;
`
