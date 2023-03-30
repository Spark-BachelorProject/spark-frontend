import styled from 'styled-components'

export const Text = styled.span`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.m};
  width: max-content;

  & > svg {
    margin: 0 0 1px 3px;
  }
`
