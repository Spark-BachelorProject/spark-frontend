import { NavLink } from 'react-router-dom'

import { ReactComponent as LogOutIcon } from '@/assets/icons/log-out.svg'
import { ReactComponent as SettingsIcon } from '@/assets/icons/settings.svg'
import { PersonListItem } from '@/components/molecules/PersonListItem/PersonListItem'

import { StyledLogoutText, StyledText, Wrapper } from './ProfileContent.styles'

export const ProfileContent = ({
  handleClose,
  handleLogout,
  initials,
  firstName,
  lastName,
  isLoadingUser,
  isSuccessUser,
}) => {
  return (
    <Wrapper>
      <NavLink to="/profile" onClick={handleClose}>
        {!isLoadingUser && isSuccessUser && (
          <PersonListItem
            initials={initials || 'TP'}
            firstName={firstName || 'Twój'}
            lastName={lastName || 'profil'}
          />
        )}
      </NavLink>
      <StyledText>
        <SettingsIcon />
        Ustawienia
      </StyledText>
      <StyledLogoutText as={NavLink} to="/login" onClick={handleLogout}>
        <LogOutIcon />
        Wyloguj się
      </StyledLogoutText>
    </Wrapper>
  )
}
