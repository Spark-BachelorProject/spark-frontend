import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`

export const OverlayRight = styled.div`
  box-shadow: 0px 7px 20px rgba(0, 0, 0, 0.05);

  position: absolute;
  top: calc(70px + 20px);
  right: 60px;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  border-radius: 12px;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    right: 20px;
  }
`

export const Filters = styled.div`
  display: flex;
  gap: 10px;
`

export const containerStyle = {
  width: '100%',
  height: 'calc(100vh - 70px)',
}

export const MapLegend = styled.div`
  max-height: 200px;
  overflow-y: scroll;
  position: absolute;
  bottom: calc(70px + 20px);
  right: 60px;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.primaryBg};
  padding: 10px 15px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.navbarBorder};
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.02);
  @media (max-width: 768px) {
    top: calc(70px + 20px);
    bottom: unset;
    left: 20px;
    right: unset;
  }
`

export const MapLegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 5px 0;
`
