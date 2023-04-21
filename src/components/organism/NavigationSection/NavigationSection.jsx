import React from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as HomeIcon } from '@/assets/icons/home.svg'
import { ReactComponent as UsersIcon } from '@/assets/icons/users.svg'
import { ReactComponent as MapIcon } from '@/assets/icons/map.svg'
import { Wrapper } from './NavigationSection.styles'

const NavigationSection = () => {
  return (
    <Wrapper>
      <NavLink to="/">
        <HomeIcon />
        Wszystkie
      </NavLink>
      <NavLink to="/map">
        <MapIcon />
        Mapa
      </NavLink>
      <NavLink to="/users">
        <UsersIcon />
        Grupy
      </NavLink>
    </Wrapper>
  )
}

export default NavigationSection
