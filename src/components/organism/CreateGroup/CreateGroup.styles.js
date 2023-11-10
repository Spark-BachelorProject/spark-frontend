import styled from 'styled-components'

import { ReactComponent as ExpandVectorIcon } from '@/assets/icons/expand-vector.svg'
import { Button } from '@/components/atoms/Button/Button.styles'
import Input from '@/components/atoms/Input/Input'
import { Text } from '@/components/atoms/Text/Text.styles'

export const Wrapper = styled.form`
  width: 100%;
  min-width: 60vw;
  /* max-width: 65vw; */
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

  & > svg {
    cursor: pointer;
    scale: 1.5;
  }
`

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  & > span {
    /* display: block; */
    width: auto;
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

  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 16px;
  grid-template-areas:
    'input1 select1'
    'input2 input2'
    'select2 select3';

  select {
    background-color: ${({ theme }) => theme.colors.inputBg};
    margin: 0;
    border-radius: 7px;
    color: ${({ theme }) => theme.colors.inputFont};
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    grid-template-areas:
      'input1'
      'select1'
      'select2'
      'input2'
      'select3';
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  & > button {
    padding: 8px 28px;
  }
`

export const CancelButton = styled(Button)`
  //TODO: change color (especially in light mode)
  background-color: ${({ theme }) => theme.colors.checkboxBorder};
`

export const StyledText = styled(Text)`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.buttonBg};
`
