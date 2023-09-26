import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import './css/Fonts.css';
import Main from './pages/Main';
import About from './pages/About'
import NotFound from './pages/NotFound'
import Faq from './pages/Faq'

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Home() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="/goldStar"
          element={<Main />}
        />
        <Route
          path="/About"
          element={<About />}
        />



        <Route
          path="/Faq"
          element={<Faq />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </Router>
  );
}

export default Home;

