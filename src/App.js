import './App.css';
import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {
  RecoilRoot
} from 'recoil'

import { Home, LinearIndeterminate } from './components'

function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<LinearIndeterminate />}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Home />} />
          </Routes>
        </Router>
      </Suspense>
    </RecoilRoot>
  );
}

function About() {
  return <h2>About</h2>;
}

export default App;
