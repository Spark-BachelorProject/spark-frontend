import React from 'react'
import { NavLink } from 'react-router-dom'

import { ReactComponent as LogOutIcon } from '@/assets/icons/log-out.svg'
import { ReactComponent as SettingsIcon } from '@/assets/icons/settings.svg'
import { PersonListItem } from '@/components/molecules/PersonListItem/PersonListItem'
import { useGetUserQuery } from '@/store/api/user'

import { Wrapper, StyledText } from './ProfileContent.styles'

export const ProfileContent = ({ handleClose, handleLogout }) => {
  const {
    data: { firstName, lastName, profilePictureUrl },
  } = useGetUserQuery()
  return (
    <Wrapper>
      <NavLink to="/profile" onClick={handleClose}>
        <PersonListItem
          firstName={firstName || 'Twój'}
          lastName={lastName || 'profil'}
          profilePictureURL={profilePictureUrl}
        />
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
