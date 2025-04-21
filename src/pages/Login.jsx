import React, { useState } from "react";
import { LoginRegisterForm } from "../components/forms/LoginRegisterForm";
import { Link } from "react-router-dom";

export const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Iniciar sesión con:", form);
    // Aquí iría la lógica para autenticar
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/confort.jpg')" }}
    >
      <LoginRegisterForm
        title="Iniciar sesión"
        buttonText="Entrar"
        onSubmit={handleSubmit}
        inputs={[
          {
            label: "Correo electrónico:",
            type: "email",
            name: "email",
            value: form.email,
            onChange: handleChange,
            placeholder: "Introduce tu correo electrónico",
          },
          {
            label: "Contraseña:",
            type: "password",
            name: "password",
            value: form.password,
            onChange: handleChange,
            placeholder: "Introduce tu contraseña",
          },
        ]}
        bottomText="¿No tienes cuenta?"
        bottomLinkText="Crea una cuenta"
        bottomLinkHref="/register"
        extra={
          <Link
            to="/forgot-password"
            className="text-center text-sm text-[#5E4F3E] font-averia mb-4 mt-1 block hover:underline"
          >
            ¿Olvidaste tu contraseña?
          </Link>
        }
      />
    </div>
  );
};
