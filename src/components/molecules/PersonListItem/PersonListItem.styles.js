import styled from 'styled-components'

import { Title } from '@/components/atoms/Title/Title.styles'

export const Wrapper = styled.div`
  cursor: pointer;
  padding: 15px 29px 15px 15px;
  border-radius: 5px;
  display: flex;
  width: 100%;
  justify-content: start;
  align-items: center;
  gap: 8px;

  :hover {
    color: ${({ theme }) => theme.colors.textHeader};
    background-color: ${({ theme }) => theme.colors.addPostBg};
    transition: 200ms linear;
  }

  ${Title} {
    color: ${({ theme }) => theme.colors.text};
  }
`
