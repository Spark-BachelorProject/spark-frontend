import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as BellIcon } from '@/assets/icons/bell.svg'
import { ReactComponent as BookmarkIcon } from '@/assets/icons/bookmark.svg'
import { ReactComponent as MoonIcon } from '@/assets/icons/moon.svg'
import {
  Wrapper,
  InnerWrapper,
  LogoAndInputWrapper,
  InnerIconsWrapperRight,
  IconBorder,
  Divider,
} from './HeaderSearchBar.styles'
import { StyledLogoIcon } from '@/components/atoms/Logo/Logo.styles'
import SearchInput from '@/components/molecules/SearchInput/SearchInput'

// TODO:
// Add to BellIcon circle counter in the corner

export const HeaderSearchBar = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <LogoAndInputWrapper>
          <Link to="/">
            <StyledLogoIcon />
          </Link>
          <SearchInput />
        </LogoAndInputWrapper>
        <InnerIconsWrapperRight>
          <IconBorder>
            <BookmarkIcon />
            <Divider />
            <BellIcon />
          </IconBorder>
          <IconBorder>
            <MoonIcon />
          </IconBorder>
        </InnerIconsWrapperRight>
      </InnerWrapper>
    </Wrapper>
  )
}
