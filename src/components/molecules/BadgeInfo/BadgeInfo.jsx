import React from 'react'

import PropTypes from 'prop-types'

import { Title } from '@/components/atoms/Title/Title.styles'

import { Content, Header, StyledText1, StyledText2, Wrapper } from './BadgeInfo.styles'

const BadgeInfo = ({ badge: { Icon, text } }) => {
  return (
    <Wrapper>
      <Header>
        <Icon />
        <Title isBold>{text}</Title>
      </Header>
      <Content>
        <StyledText1>Odznaka przyznawana po dołączeniu do 100 aktywności</StyledText1>
        <StyledText2>3% społeczności posiada tę odznakę</StyledText2>
      </Content>
    </Wrapper>
  )
}

BadgeInfo.propTypes = {
  badge: PropTypes.shape({
    text: PropTypes.string.isRequired,
    Icon: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.instanceOf(React.Component),
      PropTypes.elementType,
      PropTypes.string,
    ]).isRequired,
  }),
}

export default BadgeInfo
