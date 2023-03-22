import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '@/assets/styles/GlobalStyle'
import { darkTheme, lightTheme, theme } from '@/assets/styles/theme'
import NavigationBar from '@/components/organism/NavigationBar/NavigationBar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '@/components/pages/Home/Home'
import Users from '@/components/pages/Users/Users'
import { HeaderSearchBar } from '@/components/organism/HeaderSearchBar/HeaderSearchBar'
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
          <Route path="/" element={<Home />} exact />
        </Routes>
        <NavigationBar />
      </ThemeProvider>
    </Router>
  )
}

export default App
