import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import Login from "../pages/Login/login";
import DashboardLayout from "../pages/userDashboard/dashboardLayout";
import Child1 from "../pages/Category/child1";
import Child2 from "../pages/Category/child2";
import Category from "../pages/Category/category";

// import Category from "../pages/Category/category";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route path="" element={<Child1/>}/>
        <Route path="/dashboard/child2" element={<Child2/>}/>
        <Route path="/dashboard/category" element={<Category/>}/>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
