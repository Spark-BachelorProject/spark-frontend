import styled from 'styled-components'

import { ReactComponent as ExpandVectorIcon } from '@/assets/icons/expand-vector.svg'
import { Text } from '@/components/atoms/Text/Text.styles'

export const Wrapper = styled.form`
  width: 100%;
  min-width: 65vw;
  padding: 8px 28px;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    width: 100vw;
    height: 80vh;
    z-index: 9999;
    overflow-y: scroll;
  }
`

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 5px;
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

export const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
`

export const InputsWrapper = styled.div`
  display: grid;
  margin: 16px 0;
  gap: 23px;

  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(7, 1fr);
  grid-template-areas:
    'input1 input1 input1 input1'
    'select1 select1 select2 select2'
    'select3 select3 input2 input3'
    'input4 input4 input4 input4'
    'map map map map'
    'map map map map'
    'map map map map';

  @media (max-width: ${({ theme }) => theme.breakPoints.l}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(9, 1fr);
    grid-template-areas:
      'input1 input1'
      'select1 select2'
      'select3 select3'
      'input2 input3'
      'input4 input4'
      'map map'
      'map map'
      'map map'
      'map map';
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

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 20px;
`
