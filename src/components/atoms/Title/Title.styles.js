import styled from 'styled-components'

export const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.colors.textHeader};
  font-size: ${(props) => (props.isBig ? `18px` : `15px`)};

  font-weight: 600;
  span {
    font-weight: 700;
  }
`
