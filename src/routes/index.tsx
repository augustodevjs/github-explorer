import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Repository from "../pages/Repository";

interface RoutesAppProps {
  toogleTheme: () => void;
}

const RoutesApp: React.FC<RoutesAppProps> = ({ toogleTheme } ) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard toogleTheme={toogleTheme}/>}/>
        <Route path="/repositories/:user/:repository" element={<Repository />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;