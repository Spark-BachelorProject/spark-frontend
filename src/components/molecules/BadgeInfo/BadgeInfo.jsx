import React from 'react'

import PropTypes from 'prop-types'

import { Content, Header, StyledText1, StyledText2, StyledTitle, Wrapper } from './BadgeInfo.styles'

const BadgeInfo = ({ badge: { Icon, text, description } }) => {
  return (
    <Wrapper>
      <Header>
        <Icon />
        <StyledTitle isBig isBold>
          {text}
        </StyledTitle>
      </Header>
      <Content>
        <StyledText1>{description}</StyledText1>
        <StyledText2>Otrzymana 24 stycznia 2024</StyledText2>
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
