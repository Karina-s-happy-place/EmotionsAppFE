import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";

export const Layout = () => {
  const location = useLocation();

  const normalizedPath =
    location.pathname.length > 1 && location.pathname.endsWith("/")
      ? location.pathname.slice(0, -1)
      : location.pathname;

  const publicRoutes = [
    "/",
    "/login",
    "/register",
    "/forgot-password",
    "/change-password",
  ];
  const isPublicPage = publicRoutes.includes(normalizedPath);

  const headerProps = isPublicPage
    ? {
        title: "EmotionsApp",
        links: [
          { href: "/dashboard", text: "Dashboard" },
          { href: "/login", text: "Iniciar sesión" },
          { href: "/register", text: "Crear cuenta" },
        ],
        buttons: [],
        isLoggedIn: false,
        hideAbout: normalizedPath === "/",
      }
    : {
        title: "EmotionsApp",
        links: [
          { href: "/dashboard", text: "Dashboard" },
          { href: "/profile", text: "Perfil" },
        ],
        buttons: [],
        isLoggedIn: true,
        hideAbout: false,
      };

  const footerProps = {
    text: "©2025 EmotionsApp. Todos los derechos reservados.",
    icons: [
      {
        href: "https://www.instagram.com/__mrs.reyes/",
        icon: "/Instagram.png",
      },
      {
        href: "https://www.linkedin.com/in/karina-lorenzo/",
        icon: "/Linkedin-logo.png",
      },
    ],
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-shrink-0">
        <Header {...headerProps} />
      </div>

      <div className="flex-grow overflow-hidden">
        <Outlet />
      </div>

      <div className="flex-shrink-0">
        <Footer {...footerProps} />
      </div>
    </div>
  );
};
