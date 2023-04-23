import styled from 'styled-components'

export const Thumbnail = styled.img`
  cursor: pointer;
  padding: 2px;
  width: ${({ isBig }) => (isBig ? '32px' : '30px')};
  height: ${({ isBig }) => (isBig ? '32px' : '30px')};
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${({ theme }) => theme.colors.accent};
  opacity: 1;
  box-shadow: inset 0px 0px 1px #d2e2fd;
`
