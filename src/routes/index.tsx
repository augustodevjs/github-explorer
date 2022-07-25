import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Repository from "../pages/Repository";

const RoutesApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/repositories/:user/:repository" element={<Repository />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;