import styled from 'styled-components'
import { Title } from '@/components/atoms/Title/Title.styles'

export const Wrapper = styled.div`
  cursor: pointer;
  padding: 10px 0;
  display: flex;
  justify-content: start;
  align-items: center;

  ${Title} {
    color: ${({ theme }) => theme.colors.textHeader};
  }

  ${Title}:hover {
    font-weight: 500;
  }
`
