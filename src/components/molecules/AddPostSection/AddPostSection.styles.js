import styled from 'styled-components'

export const Wrapper = styled.div`
  /* box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.03); */
  gap: 10px;
  cursor: pointer;
  width: 100%;
  height: 75px;
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  border: 1px solid ${({ theme }) => theme.colors.postBorder};

  padding: 0px 20px;
  display: flex;
  align-items: center;
  border-radius: 12px;

  @media (max-width: 997px) {
    display: none;
  }

  &:hover {
    box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.04);
    border: 1px solid ${({ theme }) => theme.colors.accent};
    transition: 200ms ease-in-out;
  }
`

export const StyledInput = styled.div`
  background-color: ${({ theme }) => theme.colors.inputBg};
  /* box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.02); */

  border: 1px solid
    ${({ error, theme }) => (error ? theme.colors.redFont : theme.colors.buttonBorder)};
  padding: 8px 20px;
  width: 97%;
  border-radius: 25px;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 400;
`
