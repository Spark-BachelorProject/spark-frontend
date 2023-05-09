import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '@/assets/styles/GlobalStyle'
import { darkTheme, lightTheme, theme } from '@/assets/styles/theme'
import { HeaderSearchBar } from '@/components/organism/HeaderSearchBar/HeaderSearchBar'
import NavigationBar from '@/components/organism/NavigationBar/NavigationBar'
import Home from '@/components/pages/Home/Home'
import Login from '@/components/pages/Login/Login'
import Profile from '@/components/pages/Profile/Profile'
import Users from '@/components/pages/Users/Users'
import { useToggleColorsTheme } from '@/hooks/useToggleColorsTheme'

function App() {
  const [colorsTheme, toggleColorsTheme] = useToggleColorsTheme()
  const colorsThemeMode = colorsTheme === 'light' ? lightTheme : darkTheme

  return (
    <Router>
      <ThemeProvider theme={{ ...theme, colors: colorsThemeMode }}>
        <GlobalStyle />
        <HeaderSearchBar toggleColorsTheme={toggleColorsTheme} colorsTheme={colorsTheme} />
        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} exact />
          <Route path="/" element={<Home />} exact />
        </Routes>
        <NavigationBar />
      </ThemeProvider>
    </Router>
  )
}

export default App
