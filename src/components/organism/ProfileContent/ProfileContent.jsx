import React from 'react'
import { NavLink } from 'react-router-dom'

import { ReactComponent as LogOutIcon } from '@/assets/icons/log-out.svg'
import { ReactComponent as SettingsIcon } from '@/assets/icons/settings.svg'
import { PersonListItem } from '@/components/molecules/PersonListItem/PersonListItem'

import { Wrapper, StyledText } from './ProfileContent.styles'

export const ProfileContent = ({ handleClose, handleLogout }) => {
  return (
    <Wrapper>
      <NavLink to="/profile" onClick={handleClose}>
        <PersonListItem name="Twój Profil" />
      </NavLink>
      <StyledText>
        <SettingsIcon />
        Ustawienia
      </StyledText>
      <StyledText as={NavLink} to="/login" onClick={handleLogout}>
        <LogOutIcon />
        Wyloguj się
      </StyledText>
    </Wrapper>
  )
}
