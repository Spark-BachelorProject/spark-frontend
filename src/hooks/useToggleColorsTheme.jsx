import { useState, useEffect } from 'react'

export const useToggleColorsTheme = () => {
  const [theme, setTheme] = useState('light')

  const setMode = (mode) => {
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  }

  const toggleColorsTheme = () => {
    theme === 'dark' ? setMode('light') : setMode('dark')
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
    localTheme ? setTheme(localTheme) : setMode('light')
  }, [])

  return [theme, toggleColorsTheme]
}
