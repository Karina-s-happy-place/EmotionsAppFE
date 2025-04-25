import React, { useState } from "react";
import { LoginRegisterButton } from "./buttons/LoginRegisterButton";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full bg-[#8A734F] px-4 md:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="text-[#392F24] text-xl md:text-2xl font-bold italic font-averia">
        <Link to="/" className="text-[#392F24] text-2xl font-averia italic font-bold">
          EmotionsApp
        </Link>
        </div>
       
        <div className="hidden md:flex items-center gap-8">
          <div
            className="text-[#392F24] text-base font-bold font-averia cursor-pointer"
            onClick={() => navigate("/about")}
          >
            Sobre nosotros
          </div>
          <div className="flex gap-4">
            <LoginRegisterButton
              text="Iniciar sesión"
              onClick={handleLoginClick}
            />
            <LoginRegisterButton
              text="Crear cuenta"
              onClick={handleRegisterClick}
            />
          </div>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-[#392F24] focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <div
            className="text-[#392F24] text-base font-bold font-averia cursor-pointer"
            onClick={() => {
              setIsOpen(false);
              navigate("/about");
            }}
          >
            Sobre nosotros
          </div>
          <div className="flex flex-col gap-2">
            <LoginRegisterButton
              text="Iniciar sesión"
              onClick={() => {
                setIsOpen(false);
                handleLoginClick();
              }}
            />
            <LoginRegisterButton
              text="Crear cuenta"
              onClick={() => {
                setIsOpen(false);
                handleRegisterClick();
              }}
            />
          </div>
        </div>
      )}
    </header>
  );
};
