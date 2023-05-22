import React from 'react'

import PropTypes from 'prop-types'

import InformationSection from '@/components/molecules/InformationSection/InformationSection'
import SimilarGroups from '@/components/molecules/SimilarGroups/SimilarGroups'

import { GroupWrapper, RightSection, Wrapper } from './GroupTemplate.styles'

const GroupTemplate = ({ children }) => {
  return (
    <Wrapper>
      <SimilarGroups />
      <GroupWrapper>{children}</GroupWrapper>
      <RightSection>
        <InformationSection />
      </RightSection>
    </Wrapper>
  )
}

GroupTemplate.propTypes = {
  children: PropTypes.node.isRequired,
}

export default GroupTemplate
