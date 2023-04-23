import styled from 'styled-components'
import { Title } from '@/components/atoms/Title/Title.styles'

export const Wrapper = styled.div`
  cursor: pointer;
  padding: 7px 0;
  display: flex;
  justify-content: start;
  align-items: center;

  ${Title} {
    color: ${({ theme }) => theme.colors.text};
  }

  ${Title}:hover {
    color: ${({ theme }) => theme.colors.textHeader};
  }
`
