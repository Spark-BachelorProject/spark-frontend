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

    & > svg > path {
      stroke: ${({ theme }) => theme.colors.textHeader};
    }
  }

  & > svg {
    margin-right: 7px;
    width: 20px;
    height: 20px;

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
