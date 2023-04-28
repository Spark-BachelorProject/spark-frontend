import styled from 'styled-components'
export const Wrapper = styled.div`
  cursor: pointer;
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  padding: 5px 20px;
  display: flex;
  align-items: center;
  border-radius: 5px;

  @media (max-width: 997px) {
    display: none;
  }
`

export const InputDummy = styled.div`
  background-color: ${({ theme }) => theme.colors.iconBg};
  padding: 7px 15px;
  width: 80%;
  margin-right: 10px;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.placeholder};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 300;
`
