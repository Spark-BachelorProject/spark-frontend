import styled from 'styled-components'

import { ReactComponent as ExpandVectorIcon } from '@/assets/icons/expand-vector.svg'
import Input from '@/components/atoms/Input/Input'
import { Text } from '@/components/atoms/Text/Text.styles'

export const Wrapper = styled.form`
  width: 100%;
  min-width: 65vw;
  padding: 16px 28px;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    width: 100vw;
    height: 80vh;
    z-index: 9999;
    overflow-y: scroll;
  }
`

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 16px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.postBorder};

  & > div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  & > svg {
    cursor: pointer;
    scale: 1.5;
  }
`

export const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
`

export const InputsWrapper = styled.div`
  display: grid;
  margin: 16px 0;
  gap: 16px;

  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(8, 1fr);
  grid-template-areas:
    'input1 input1'
    'select1 select2'
    'input3 input4'
    'input2 input2'
    'map map'
    'map map'
    'map map'
    'map map';

  & > select {
    background-color: ${({ theme }) => theme.colors.inputBg};
    margin: 0;
    border-radius: 7px;
    color: ${({ theme }) => theme.colors.inputFont};
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.l}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(8, 1fr);
    grid-template-areas:
      'input1 input1'
      'select1 select2'
      'input3 input4'
      'input2 input2'
      'map map'
      'map map'
      'map map'
      'map map';
  }
`

export const StyledInput1 = styled(Input)`
  grid-area: input1;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    right: 30px;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.redFont};
    top: 10px;
    z-index: 2;
  }
`

export const StyledText = styled(Text)`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.buttonBg};
`

export const NextArrowIcon = styled(ExpandVectorIcon)`
  transform: rotate(-90deg);
  scale: 1.5;
  margin: 0 0 2px 4px;

  & > path {
    top: -10px;
  }
`
