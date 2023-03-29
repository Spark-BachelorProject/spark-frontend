import { Input } from '@/components/atoms/Input/Input.styles'
import { Label } from '@/components/atoms/Label/Label.styles'
import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  width: 90%;
  display: flex;
  align-items: ${({ isCheckbox }) => (isCheckbox ? 'center' : 'flex-start')};
  justify-content: space-between;
  flex-direction: ${({ isCheckbox }) => (isCheckbox ? 'row' : 'column')};
  margin: 20px 0 0px 0;

  ${Label} {
    margin: 5px 0;
  }
  ${Input} {
    -webkit-appearance: none;
    margin: 0;
    -moz-appearance: textfield;
    text-align: center;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.inputFont};
    font-weight: 430;
    background-color: ${({ theme }) => theme.colors.inputBg};
    max-width: ${({ isCheckbox }) => (isCheckbox ? '20px' : 'auto')};
    padding: ${({ isCheckbox }) => (isCheckbox ? '10px' : 'auto')};
  }
`
