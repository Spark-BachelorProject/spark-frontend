import React from 'react'
import { NavigationSection, Socials, Wrapper, SocialItem } from './DesktopNavigationBar.styles'
import { NavLink } from 'react-router-dom'
import { ReactComponent as HomeIcon } from '@/assets/icons/home.svg'
import { ReactComponent as UsersIcon } from '@/assets/icons/users.svg'
import { ReactComponent as MapIcon } from '@/assets/icons/map.svg'
import { Title } from '@/components/atoms/Title/Title.styles'
import { Text } from '@/components/atoms/Text/Text.styles'
import Dot from '@/components/atoms/Dot/Dot'

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
      <Socials>
        <Title isBig isBold>
          Twoje Społeczności
        </Title>
        <SocialItem>
          <Title isBold>UMCS Futsal</Title>
          <div>
            <Text>Piłka halowa</Text>
            <Dot />
            <Text>13 członków</Text>
          </div>
        </SocialItem>
        <SocialItem>
          <Title isBold>UMCS Futsal</Title>
          <div>
            <Text>Piłka halowa</Text>
            <Dot />
            <Text>13 członków</Text>
          </div>
        </SocialItem>
        <SocialItem>
          <Title isBold>UMCS Futsal</Title>
          <div>
            <Text>Piłka halowa</Text>
            <Dot />
            <Text>13 członków</Text>
          </div>
        </SocialItem>
        <span isBold>Wszystkie</span>
      </Socials>
    </Wrapper>
  )
}
