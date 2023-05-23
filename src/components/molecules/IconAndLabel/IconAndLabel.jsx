import React from 'react'

import PropTypes from 'prop-types'

import { ReactComponent as UsersIcon } from '@/assets/icons/users.svg'
import { Text } from '@/components/atoms/Text/Text.styles'
import { Title } from '@/components/atoms/Title/Title.styles'

import { IconBackground, Wrapper } from './IconAndLabel.styles'

const IconAndLabel = ({ title, subTitle }) => {
  return (
    <Wrapper>
      <IconBackground>
        <UsersIcon />
      </IconBackground>
      <div>
        <Title isBold>{title}</Title>
        <Text>{subTitle}</Text>
      </div>
    </Wrapper>
  )
}

IconAndLabel.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
}

export default IconAndLabel
