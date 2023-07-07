import React from 'react'

import PropTypes from 'prop-types'

import { Title } from '@/components/atoms/Title/Title.styles'

import { Wrapper } from './TitleBar.styles'

export const TitleBar = ({ children, className }) => {
  return (
    <Wrapper className={className}>
      <Title isBig>{children}</Title>
    </Wrapper>
  )
}

TitleBar.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  className: PropTypes.string,
}
