import styled from 'styled-components'

import { Input } from '@/components/atoms/Input/Input.styles'
import { Label } from '@/components/atoms/Label/Label.styles'

export const Wrapper = styled.div`
  position: relative;
  width: 90%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  margin: 20px 0 0px 0;

  ${Label} {
    margin: 5px 0;
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  ${Input} {
    /* -webkit-appearance: none;
    -moz-appearance: textfield; */
    margin: 0;
    text-align: center;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.inputFont};
    background-color: ${({ theme }) => theme.colors.inputBg};
  }

  & > span {
    border: none;
    padding: 0 2px;
    position: absolute;
    top: 54%;
    right: 30%;
    color: ${({ theme }) => theme.colors.iconPrimary};
    width: 25px;
    margin: 0 0 0 -7px;
    background: none;
  }
`
