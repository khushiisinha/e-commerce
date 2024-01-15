import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="">
      <Switch>
          <Route path="/e-commerce" element={<LoginPage />} />
          <Route path="/e-commerce/login" element={<LoginPage />} />
          <Route path="/e-commerce/dashboard" element={<Dashboard />} />
          </Switch>
    </div>
  );
}

export default App;
