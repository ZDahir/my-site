import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/Home/Home';
import TidyCalEmbed from './components/TidyCalEmbed';
import Resume from './components/Resume';

function App() {
  return (
    <Router>
      <AppWrapper>
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />

          {/* /book Page with Styled EmbedBackground and EmbedContainer */}
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

          {/* Resume Page */}
          <Route path="/resume" element={<Resume />} />
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
  width: 100%;
  max-width: 800px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border-radius: 8px;
`;
