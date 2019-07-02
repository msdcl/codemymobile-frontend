import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import { unprotectedRoutes } from './utility/routes';

const App = () => {

  const routes = unprotectedRoutes;
  return (
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  );
}

export default App;
