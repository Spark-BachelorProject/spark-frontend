import { SidebarWrapper } from '@/components/atoms/SidebarWrapper/SidebadWrapper.styles'
import { GroupInfo } from '@/components/molecules/GroupInfo/GroupInfo'
import SimilarGroups from '@/components/molecules/SimilarGroups/SimilarGroups'
import { DekstopNavigationBar } from '@/components/organism/DekstopNavigationBar/DekstopNavigationBar'
import { DekstopRightBar } from '@/components/organism/DekstopRightBar/DekstopRightBar'

import { InnerWrapper, Wrapper } from './PageContent.styles'

export const PageContent = ({ children, hasNavigation, hasRightBar, className, isGroup }) => {
  return (
    <Wrapper className={className}>
      {hasNavigation && !isGroup ? <DekstopNavigationBar /> : null}
      {isGroup ? (
        <SidebarWrapper>
          <SimilarGroups />
        </SidebarWrapper>
      ) : null}
      <InnerWrapper>{children}</InnerWrapper>
      {isGroup ? (
        <SidebarWrapper>
          <GroupInfo />
        </SidebarWrapper>
      ) : null}
      {hasRightBar && !isGroup ? <DekstopRightBar /> : null}
    </Wrapper>
  )
}
