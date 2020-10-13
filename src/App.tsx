import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing';

import './styles/global.css';


function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Landing} />
    </BrowserRouter>
  );
}

export default App;
