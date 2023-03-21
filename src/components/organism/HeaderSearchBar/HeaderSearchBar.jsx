import React from 'react';
import { ReactComponent as BellIcon } from '@/assets/icons/bell.svg';
import { ReactComponent as BookmarkIcon } from '@/assets/icons/bookmark.svg';
import { ReactComponent as MoonIcon } from '@/assets/icons/moon.svg';

import {
  Wrapper,
  IconsWrapper,
  InnerIconsWrapperLeft,
  InnerIconsWrapperRight,
  IconBorder,
  Divider,
  SearchBar,
  StyledLogoIcon,
} from './HeaderSearchBar.styles';

//TODO ADD SEARCH ICON TO SEARCH BAR
export const HeaderSearchBar = () => {
  return (
    <Wrapper>
      <IconsWrapper>
        <InnerIconsWrapperLeft>
          <StyledLogoIcon />
          <SearchBar />
        </InnerIconsWrapperLeft>
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
      </IconsWrapper>
    </Wrapper>
  );
};
