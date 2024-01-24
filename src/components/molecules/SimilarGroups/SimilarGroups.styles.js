import styled from 'styled-components'

export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  width: 250px;
  height: fit-content;
  padding: 20px 25px;
  border-radius: 7px;
  border: 1px solid ${({ theme }) => theme.colors.postBorder};
  margin-left: 30px;

  & > * {
    margin-bottom: 25px;
  }

  & > *:last-child {
    margin-bottom: 0;
  }
  //this is done so its able to be displayed with 270px width ->  width of the post (684px) + gap (44px) + min navbar width (270px)
  @media screen and (max-width: 997px) {
    display: none;
  }
`
