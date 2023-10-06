import styled from 'styled-components'

import { ReactComponent as ExpandVectorIcon } from '@/assets/icons/expand-vector.svg'
import Input from '@/components/atoms/Input/Input'
import { Text } from '@/components/atoms/Text/Text.styles'

export const NextArrowIcon = styled(ExpandVectorIcon)`
  transform: rotate(-90deg);
  scale: 1.5;
  margin: 0 0 2px 4px;

  & > path {
    top: -10px;
  }
`

export const Wrapper = styled.div`
  width: 100%;
  min-width: 50vw;
  /* min-height: 40vh; */
  padding: 16px 28px;
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
  /* justify-content: space-between; */
  align-items: center;
  // the same line
  justify-content: space-between;
  padding-top: 16px;
`

export const ProgressSpan = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xs};
  background-color: ${({ theme }) => theme.colors.buttonBg};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
`

export const InputsWrapper = styled.div`
  display: grid;
  margin-top: 16px;

  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 16px;
  grid-template-areas:
    'input1 input1'
    'select1 map'
    'select2 map'
    'select3 map'
    'input5 map'
    'input6 input6';

  & > select {
    background-color: ${({ theme }) => theme.colors.inputBg};
    margin: 0;
    border-radius: 7px;
    color: ${({ theme }) => theme.colors.inputFont};
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
