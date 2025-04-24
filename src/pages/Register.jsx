import React, { useState } from "react";
import { LoginRegisterForm } from "../components/forms/LoginRegisterForm";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    if (error) setError("");
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      setError("Por favor, complete todos los campos");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    navigate("/login");
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/confort.jpg')" }}
    >
      <LoginRegisterForm
        title="Crear cuenta"
        buttonText="Crear cuenta"
        onSubmit={handleSubmit}
        inputs={[
          {
            label: "Nombre completo:",
            type: "text",
            name: "name",
            value: form.name,
            onChange: handleChange,
            placeholder: "Introduce tu nombre y apellidos",
          },
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
          {
            label: "Confirmar contraseña:",
            type: "password",
            name: "confirmPassword",
            value: form.confirmPassword,
            onChange: handleChange,
            placeholder: "Confirma tu contraseña",
          },
        ]}
        bottomText="¿Ya tienes cuenta?"
        bottomLinkText="Inicia sesión"
        bottomLinkHref="/login"
        extra={
          error && (
            <div className="text-center text-sm text-red-500 font-averia mb-2">
              {error}
            </div>
          )
        }
      />
    </div>
  );
};
