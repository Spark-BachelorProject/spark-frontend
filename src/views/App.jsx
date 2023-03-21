import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "@/assets/styles/GlobalStyle";
import { theme } from "@/assets/styles/theme";
import NavigationBar from "@/components/organism/NavigationBar/NavigationBar.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "@/components/pages/Home/Home";
import Users from "@/components/pages/Users/Users";
import { TopNavigationBar } from "@/components/organism/TopNavigationBar/TopNavigationBar";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/" element={<Home />} exact />
        </Routes>
        <TopNavigationBar />
        <NavigationBar />
      </ThemeProvider>
    </Router>
  );
}

export default App;
