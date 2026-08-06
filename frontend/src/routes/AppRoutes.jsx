import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../views/login/Login";
import Dashboard from "../views/dashboard/Dashboard";
import ProtectedRoutes from "./ProtectedRoutes";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
