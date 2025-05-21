import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Overview from "../pages/Overview";
import Login from "../pages/Login";
import SidebarLayout from "../components/SidebarLayout";
import Profile from "../pages/Profile";
import Employees from "../pages/Employee";
import Clients from "../pages/Client";

const AppRouter = () => {
  return <BrowserRouter>
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<SidebarLayout />}>
          <Route index element={<Overview />} />
          <Route path="profile" element={<Profile />} />
          <Route path="employees" element={<Employees />} />
          <Route path="clients" element={<Clients />} />
        </Route>
    </Routes>

  </BrowserRouter>;
};

export default AppRouter;
