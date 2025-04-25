import React, { useState } from "react";
import { LoginRegisterForm } from "../components/forms/LoginRegisterForm";
import { useNavigate, Link } from "react-router-dom";

export const ChangePassword = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
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

    if (!form.email || !form.password || !form.confirmPassword) {
      setError("Por favor, completa todos los campos");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    alert("Contraseña actualizada correctamente.");
    navigate("/login");
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/confort.jpg')" }}
    >
      <LoginRegisterForm
        title="Cambiar contraseña"
        buttonText="Actualizar"
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
            label: "Nueva contraseña:",
            type: "password",
            name: "password",
            value: form.password,
            onChange: handleChange,
            placeholder: "Introduce nueva contraseña",
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
        bottomText="¿Recuerdas tu contraseña?"
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
