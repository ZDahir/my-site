// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/Home/Home'; // Import the Home component
import TidyCalEmbed from './components/TidyCalEmbed'; // Import the TidyCalEmbed component
import Resume from './components/Resume';

function App() {
  return (
    <Router>
      <AppWrapper>
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />

          {/* /book Page */}
          <Route path="/book" element={<TidyCalEmbed />} />
        
        {/* Resume Page */}
        <Route path="/resume" element={<Resume />} />

        <Route
  path="/book"
  element={
    <EmbedBackground>
      <EmbedContainer>
        <TidyCalEmbed />
      </EmbedContainer>
    </EmbedBackground>
  }
/>

        </Routes>
      </AppWrapper>
    </Router>
  );
}

export default App;

// Common Wrapper
const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;


// /book Page Styling
const EmbedBackground = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const EmbedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* No additional styles that might interfere */
`;



