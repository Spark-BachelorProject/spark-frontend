import React from 'react'
import { PersonListItem } from '@/components/molecules/PersonListItem/PersonListItem'
import { ReactComponent as SettingsIcon } from '@/assets/icons/settings.svg'
import { ReactComponent as LogOutIcon } from '@/assets/icons/log-out.svg'
import { Wrapper, StyledText } from './ProfileContent.styles'

export const ProfileContent = () => {
  return (
    <Wrapper>
      <PersonListItem name="Twój Profil" />
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
