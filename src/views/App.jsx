import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '@/assets/styles/GlobalStyle'
import { theme } from '@/assets/styles/theme'
import NavigationBar from '@/components/organism/NavigationBar/NavigationBar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '@/components/pages/Home/Home'
import Users from '@/components/pages/Users/Users'
import { HeaderSearchBar } from '@/components/organism/HeaderSearchBar/HeaderSearchBar'

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <NavigationBar />
        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/" element={<Home />} exact />
        </Routes>
        <HeaderSearchBar />
      </ThemeProvider>
    </Router>
  )
}

export default App
