import { HashRouter , Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";

function App() {
  return <div className="">
    <HashRouter>
    <Routes>
        <Route path="/e-commerce" element={<LoginPage />} />
        <Route path="/e-commerce/login" element={<LoginPage/>} />
        <Route path="/e-commerce/dashboard" element={<Dashboard/>} />
    </Routes>
</HashRouter>
  </div>;
}

export default App;
