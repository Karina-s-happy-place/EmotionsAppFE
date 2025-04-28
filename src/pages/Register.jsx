import React, { useState } from "react";
import { LoginRegisterForm } from "../components/forms/LoginRegisterForm";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    if (error) setError("");
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.fullName || !form.email || !form.password || !form.confirmPassword) {
      setError("Por favor, completa todos los campos");
      return;
    }
    try {
      const response = await fetch("http://localhost:8080/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          password: form.password,
          confirmPassword: form.confirmPassword,
        }),
      });
      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(errorData || "Error en el registro");
      }
      navigate("/login");
    } catch (error) {
      console.error("Error:", error.message);
      setError("Error al registrar: " + error.message);
    }
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
            name: "fullName",
            value: form.fullName,
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
