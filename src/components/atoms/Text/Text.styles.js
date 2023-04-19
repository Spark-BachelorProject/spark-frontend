import styled from 'styled-components'

export const Text = styled.span`
  font-weight: ${({ isBold }) => (isBold ? 600 : 400)};
  display: flex;
  align-items: center;
  width: 100%;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.s};
  width: max-content;

  & > svg {
    margin: 0 0 1px 3px;
  }
`
