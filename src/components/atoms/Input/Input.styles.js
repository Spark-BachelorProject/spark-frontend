import styled from 'styled-components'

export const Input = styled.input`
  background-color: solid 1px ${({ theme }) => theme.colors.white};
  padding: 11px 13px;
  border-radius: 7px;
  border: 1px solid ${({ theme }) => theme.colors.buttonBorder};
  width: clamp(40px, 100%, 400px);
  font-size: ${({ theme }) => theme.fontSize.m};
`
