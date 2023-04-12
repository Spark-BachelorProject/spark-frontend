import React from 'react'
import { NavigationSection, Wrapper } from './DesktopNavigationBar.styles'
import { NavLink } from 'react-router-dom'
import { ReactComponent as HomeIcon } from '@/assets/icons/home.svg'
import { ReactComponent as UsersIcon } from '@/assets/icons/users.svg'
import { ReactComponent as MapIcon } from '@/assets/icons/map.svg'

export const DekstopNavigationBar = () => {
  return (
    <Wrapper>
      <NavigationSection>
        <NavLink to="/">
          <HomeIcon />
          Wszystkie
        </NavLink>
        <NavLink to="/users">
          <UsersIcon />
          Społeczności
        </NavLink>
        <NavLink to="/map">
          <MapIcon />
          Mapa Aktywności
        </NavLink>
      </NavigationSection>
    </Wrapper>
  )
}
