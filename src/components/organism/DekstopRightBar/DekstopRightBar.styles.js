import styled from 'styled-components'
import { Title } from '@/components/atoms/Title/Title.styles'

export const Wrapper = styled.div`
  flex: 1 0 250px; //inital width
  max-width: 330px;
  height: calc(100vh - 70px);
  padding: 20px 20px;

  /* position: sticky; */
  top: 70px;

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.l}) {
    display: none;
  }
`
export const Container = styled.div`
  padding: 10px 25px 15px 25px;
  border-radius: 5px;
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  margin-bottom: 20px;
  border: 1px solid ${({ theme }) => theme.colors.postBorder};

  & > span {
    cursor: pointer;
    font-weight: 600;
    position: relative;
    top: 10px;
    font-size: ${({ theme }) => theme.fontSize.s};
    color: ${({ theme }) => theme.colors.text};
  }

  & > span:hover {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.textHeader};
    transition: 100ms ease-in-out;
  }
`

export const StyledContainer = styled(Container)`
  padding: 10px 25px 30px 25px;
`

export const StyledTitle = styled(Title)`
  margin: 8px 0;
  font-size: ${({ theme }) => theme.fontSize.mPlus};
  font-weight: 600;
`
