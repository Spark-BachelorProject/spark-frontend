import styled from 'styled-components'

import { Text } from '../Text/Text.styles'

export const MoreInfoText = styled(Text)`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.sPlus};
  padding: 15px 10px;
  margin-top: -3px;
  margin-left: -7px;
  border-radius: 8px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    color: ${({ theme }) => theme.colors.textHeader};
    background-color: ${({ theme }) => theme.colors.addPostBg};
    /* transition: 200ms linear; */

    & > svg > path {
      stroke: ${({ theme }) => theme.colors.textHeader};
      transition: 200ms linear;
    }
  }

  & > svg {
    margin-right: 7px;
    width: 15px;
    height: 15px;

    & > path {
      stroke: ${({ theme }) => theme.colors.text};
      fill: ${({ theme }) => theme.colors.text};
    }

    & > g {
      & > path {
        stroke: ${({ theme }) => theme.colors.text};
        fill: ${({ theme }) => theme.colors.text};
      }
      & > g > path {
        fill: ${({ theme }) => theme.colors.text};
      }
    }
  }
`
