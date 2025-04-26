import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../components/layouts/Layout";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { HomeDashboard } from "../pages/HomeDashboard";
import { ChangePassword } from "../pages/ChangePassword";
import { AboutUs } from "../pages/AboutUs";
import { EmotionRegister } from "../pages/EmotionRegister";
import { EmotionHistory } from "../pages/EmotionHistory";
import { NotesProvider } from "../components/NotesContext.jsx";
import { SadnessView } from "../pages/SadnessView.jsx";
import { ConstructionPage } from "../pages/ConstructionPage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <NotesProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ChangePassword />} />

          <Route element={<Layout />}>
            <Route path="/" element={<HomeDashboard />} />
            <Route path="/dashboard" element={<HomeDashboard />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/emotion-register" element={<EmotionRegister />} />
            <Route path="/emotion-history" element={<EmotionHistory />} />
            <Route path="/sadness" element={<SadnessView />} />
            <Route path="/construction" element={<ConstructionPage />} />
          </Route>
        </Routes>
      </NotesProvider>
    </BrowserRouter>
  );
};
