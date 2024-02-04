import Slider from 'rc-slider'
import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 20px 20px 40px 20px;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.inputFont};
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.m};
  background-color: ${({ theme }) => theme.colors.inputBg};
  border: 1px solid
    ${({ error, theme }) => (error ? theme.colors.redFont : theme.colors.postBorder)};
`

export const StyledSlider = styled(Slider)`
  .rc-slider-handle {
    background-color: ${({ theme }) => theme.colors.accent};
    opacity: 1;
    border: 2px solid ${({ theme }) => theme.colors.white};
    height: 20px;
    width: 20px;
    top: 50%;
  }

  .rc-slider-rail {
    background-color: #3b82f633;
    height: 15px;
  }

  .rc-slider-track {
    height: 15px;
    background-color: ${({ theme }) => theme.colors.accent};
  }

  .rc-slider {
    display: flex;
    align-items: center;
  }

  .rc-slider-dot {
    display: none;
  }

  .rc-slider-mark-text {
    margin-top: 10px;
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.iconPrimary};
  }

  .rc-slider-mark-text-active {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
  }
`
