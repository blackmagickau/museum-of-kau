import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Lobby from './pages/Lobby';
import Galleries from './pages/Galleries';
import Exhibit from './pages/Exhibit';
import Curator from './pages/Curator';
import { useEffect } from 'react';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Lobby />} />
          <Route path="/galleries" element={<Galleries />} />
          <Route path="/galleries/:id" element={<Exhibit />} />
          <Route path="/curator" element={<Curator />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;