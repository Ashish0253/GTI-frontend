import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home';
import ResultPage from '@/pages/ResultPage';
import Trial from '@/pages/Trial';

import ResultTabs from '@/components/ResultTabs';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/result/:uuid" element={<ResultPage />} />
        <Route path="/result" element={<ResultTabs />} />
        <Route path="/trial" element={<Trial />} />
      </Routes>
    </Router>
  );
};

export default App;









