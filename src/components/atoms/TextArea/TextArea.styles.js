import styled from 'styled-components'

export const TextArea = styled.textarea`
  background-color: ${({ theme }) => theme.colors.inputBg};
  padding: 11px 13px;
  height: 45px;
  border-radius: 7px;
  resize: none;
  outline: none;
  border: 1px solid
    ${({ error, theme }) => (error ? theme.colors.redFont : theme.colors.buttonBorder)};

  color: ${({ theme }) => theme.colors.inputFont};
  ::placeholder {
    color: ${({ theme }) => theme.colors.text};
  }
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.m};

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    width: 80%;
  }
`
