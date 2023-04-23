import React from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as HomeIcon } from '@/assets/icons/home.svg'
import { ReactComponent as UsersIcon } from '@/assets/icons/users.svg'
import { ReactComponent as MapIcon } from '@/assets/icons/map.svg'
import { ReactComponent as UserIcon } from '@/assets/icons/user.svg'
import { Wrapper, IconsWrapper, StyledPlusSquareIcon } from './NavigationBar.styles'
import { Thumbnail } from '@/components/atoms/Thumbnail/Thumbnail.styles'

const NavigationBar = () => {
  return (
    <Wrapper>
      <IconsWrapper>
        <NavLink to="/">
          <HomeIcon />
        </NavLink>
        <NavLink to="/users">
          <UsersIcon />
        </NavLink>
        <StyledPlusSquareIcon />
        <NavLink to="/map">
          <MapIcon />
        </NavLink>
        <NavLink to="/profile">
          <Thumbnail />
          {/* <UserIcon /> */}
        </NavLink>
      </IconsWrapper>
    </Wrapper>
  )
}

export default NavigationBar
