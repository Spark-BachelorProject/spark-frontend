import styled from 'styled-components'

export const Wrapper = styled.div`
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
  transform: translate(-50%, ${(props) => (props.show ? '0' : '100%')});
  opacity: ${(props) => (props.show ? '1' : '0')};
  position: fixed;
  z-index: 9999;
  bottom: 2em;
  left: 50%;
  width: auto;
  min-width: 250px;
  padding: 1.7em 1.7em;
  background-color: ${({ theme }) => theme.colors.accent};
  text-align: center;
  border-radius: 6px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.sPlus};

  & > svg {
    height: 18px;

    & > path {
      fill: ${({ theme }) => theme.colors.white};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.m}) {
    bottom: 6rem;
  }
`
