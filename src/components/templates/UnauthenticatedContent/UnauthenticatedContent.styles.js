import styled from 'styled-components'

import { Title } from '@/components/atoms/Title/Title.styles'

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 30px;
`

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 998px) {
    flex-direction: row;
  }
`

export const LogoTitlesWrapper = styled.div`
  max-width: 440px;
  margin: 50px 0 70px 0;

  @media (min-width: 998px) {
    margin: 30px 150px 0 0;
  }
`
export const LogoTitle = styled(Title)`
  font-size: 50px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accent};
`

export const LogoSubtitle = styled(Title)`
  font-size: 30px;
  font-weight: 400;
  max-width: 550px;
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.text};
`
