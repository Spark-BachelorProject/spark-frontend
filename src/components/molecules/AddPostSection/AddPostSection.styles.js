import styled from 'styled-components'

export const Wrapper = styled.div`
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.03);
  gap: 10px;
  cursor: pointer;
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  border: 1px solid ${({ theme }) => theme.colors.postBorder};

  padding: 5px 20px;
  display: flex;
  align-items: center;
  border-radius: 8px;

  @media (max-width: 997px) {
    display: none;
  }

  &:hover {
    box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.07);
    border: 1px solid ${({ theme }) => theme.colors.accent};
    transition: 200ms ease-in-out;
  }
`

export const StyledInput = styled.div`
  background-color: ${({ theme }) => theme.colors.addPostBg};
  padding: 8px 15px;
  width: 80%;
  margin-right: 10px;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.labelFont};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 500;
`
