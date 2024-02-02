import styled from 'styled-components'

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.textHeader};
  font-size: ${({ isBig }) => (isBig ? `19px` : `16px`)};
  font-weight: ${({ isBold }) => (isBold ? 600 : 400)};
  cursor: ${({ isClickable }) => (isClickable ? 'pointer' : 'default')};

  & > span {
    margin-left: 5px;
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.colors.accent};
    cursor: pointer;
    /* background-color: ${({ theme }) => theme.colors.modalBg}; */
    border: 1px solid ${({ theme }) => theme.colors.modalBorder};
    padding: 2px 10px;
    border-radius: 20px;

    :hover {
      background-color: ${({ theme }) => theme.colors.selectBorder};
      transition: 0.1s ease-in-out;
    }
  }
`
