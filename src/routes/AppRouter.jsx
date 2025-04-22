import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Login} from "../pages/Login";
import {Register} from "../pages/Register";
import {Dashboard} from "../pages/Dashboard";
import { ChangePassword} from "../pages/ChangePassword";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ChangePassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};


