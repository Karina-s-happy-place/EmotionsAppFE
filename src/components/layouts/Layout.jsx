import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";

export const Layout = () => {
  const headerProps = {
    title: "EmotionsApp",
    links: [
      { href: "/dashboard", text: "Dashboard" },
      { href: "/login", text: "Iniciar sesión" },
      { href: "/register", text: "Crear cuenta" },
    ],
    buttons: [],
  };

  const footerProps = {
    text: "© 2025 Mi App. Todos los derechos reservados",
    icons: [
      { href: "https://www.instagram.com/__mrs.reyes/", icon: "/Instagram.png" },
      { href: "https://www.linkedin.com/in/karina-lorenzo/", icon: "/Linkedin-logo.png" },
    ],
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header se mantendrá en su tamaño natural */}
      <div className="flex-shrink-0">
        <Header {...headerProps} />
      </div>
      {/* Área principal que ocupa el espacio restante sin scroll global */}
      <div className="flex-grow overflow-hidden">
        <Outlet />
      </div>
      {/* Footer fijo en la parte inferior */}
      <div className="flex-shrink-0">
        <Footer {...footerProps} />
      </div>
    </div>
  );
};
