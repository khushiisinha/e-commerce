import { HashRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="">
      <Router >
        <Routes>
          <Route path="/e-commerce" element={<LoginPage />} />
          <Route path="/e-commerce/login" element={<LoginPage />} />
          <Route path="/e-commerce/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
