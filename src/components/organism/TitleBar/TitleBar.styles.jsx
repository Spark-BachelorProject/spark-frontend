import styled from 'styled-components'

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 20px;
`

export const TitleBarWrapper = styled.div`
  display: flex;
  justify-content: start;
  width: ${({ theme }) => theme.breakPoints.mobile};
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.textHeader};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 500;
  padding: 20px 0;

  span {
    font-weight: 600;
  }
`
