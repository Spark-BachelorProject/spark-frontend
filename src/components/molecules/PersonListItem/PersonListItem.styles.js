import styled from 'styled-components'

import { Title } from '@/components/atoms/Title/Title.styles'

export const Wrapper = styled.div`
  cursor: pointer;
  margin-left: -20px;
  padding: 8px 20px;
  border-radius: 5px;

  display: flex;
  justify-content: start;
  align-items: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.modalBg};
    transition: 200ms ease-in-out;
  }

  ${Title} {
    color: ${({ theme }) => theme.colors.text};
  }
`
