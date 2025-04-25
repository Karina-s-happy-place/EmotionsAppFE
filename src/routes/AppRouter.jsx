import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../components/layouts/Layout"; // Asegúrate de que la ruta y el nombre sean correctos.
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { HomeDashboard } from "../pages/HomeDashboard";
import { ChangePassword } from "../pages/ChangePassword";
import { AboutUs } from "../pages/AboutUs";
import { EmotionRegister } from "../pages/EmotionRegister";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomeDashboard />} />
          <Route path="dashboard" element={<HomeDashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ChangePassword />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="emotion-register" element={<EmotionRegister />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
