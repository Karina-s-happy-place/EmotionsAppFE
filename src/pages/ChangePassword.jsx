import React, { useState } from "react";
import { LoginRegisterForm } from "../components/forms/LoginRegisterForm";
import { useNavigate } from "react-router-dom";

export const ChangePassword = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (form.password !== form.confirmPassword) {
      alert("Las contraseñas no coinciden");
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
      />
    </div>
  );
};
