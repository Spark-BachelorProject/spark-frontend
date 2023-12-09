import PropTypes from 'prop-types'

import { ReactComponent as UsersIcon } from '@/assets/icons/users.svg'
import { Text } from '@/components/atoms/Text/Text.styles'
import { Title } from '@/components/atoms/Title/Title.styles'

import { Content, Header, IconBackground, Wrapper } from './GroupCard.styles'

// TODO: add tags
const GroupCard = (props) => {
  const { name, members, description } = props
  return (
    <Wrapper>
      <Header>
        <IconBackground>
          <UsersIcon />
        </IconBackground>
        <div>
          <Title isBig>{name}</Title>
          <Text>{members.length} członków</Text>
        </div>
      </Header>
      <Content>
        <Text as="p">{description}</Text>
        {/* <StyledTags>{tags}</StyledTags> */}
      </Content>
    </Wrapper>
  )
}

GroupCard.propTypes = {
  name: PropTypes.string.isRequired,
  numOfPeople: PropTypes.number,
  text: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
}

export default GroupCard
