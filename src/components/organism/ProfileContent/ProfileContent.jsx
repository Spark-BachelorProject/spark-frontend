import React from 'react'
import { PersonListItem } from '@/components/molecules/PersonListItem/PersonListItem'
import { ReactComponent as SettingsIcon } from '@/assets/icons/settings.svg'
import { ReactComponent as LogOutIcon } from '@/assets/icons/log-out.svg'
import { Wrapper, StyledText } from './ProfileContent.styles'
import { NavLink } from 'react-router-dom'

export const ProfileContent = ({ handleClose }) => {
  return (
    <Wrapper>
      <NavLink to="/profile" onClick={handleClose}>
        <PersonListItem name="Twój Profil" />
      </NavLink>
      <StyledText>
        <SettingsIcon />
        Ustawienia
      </StyledText>
      <StyledText>
        <LogOutIcon />
        Wyloguj się
      </StyledText>
    </Wrapper>
  )
}
