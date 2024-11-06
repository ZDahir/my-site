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

          {/* TidyCal Embed Page */}
          <Route
            path="/book"
            element={
              <EmbedFullScreen>
                <TidyCalEmbed />
              </EmbedFullScreen>
            }
          />

          {/* Resume Page */}
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </AppWrapper>
    </Router>
  );
}

export default App;

// Global App Wrapper
const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

// Fullscreen Embed Styling for TidyCal
const EmbedFullScreen = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff; /* Optional background color */
`;
