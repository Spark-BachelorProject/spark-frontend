import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as BellIcon } from '@/assets/icons/bell.svg'
import { ReactComponent as BookmarkIcon } from '@/assets/icons/bookmark.svg'
import { ReactComponent as MoonIcon } from '@/assets/icons/moon.svg'
import { ReactComponent as SunIcon } from '@/assets/icons/sun.svg'
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

export const HeaderSearchBar = ({ toggleColorsTheme, colorsTheme }) => {
  // const handleToggleTheme = () => {
  //   console.log('klikniete', colorsTheme)
  //   toggleColorsTheme()
  // }

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
            <BookmarkIcon tabIndex={1} />
            <Divider />
            <BellIcon tabIndex={1} />
          </IconBorder>
          <IconBorder>
            {colorsTheme === 'light' ? (
              <MoonIcon tabIndex={1} onClick={toggleColorsTheme} />
            ) : (
              <SunIcon tabIndex={1} onClick={toggleColorsTheme} />
            )}
          </IconBorder>
        </InnerIconsWrapperRight>
      </InnerWrapper>
    </Wrapper>
  )
}
