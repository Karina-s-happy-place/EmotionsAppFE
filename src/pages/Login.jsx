import React, { useState } from "react";
import { LoginRegisterForm } from "../components/forms/LoginRegisterForm";
import { useNavigate, Link } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    if (error) setError("");
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError("Por favor, ingresa usuario y contraseña");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Credenciales incorrectas");
      }

      console.log("📌 Token recibido:", data.token);
      localStorage.setItem("token", data.token);

      navigate("/emotion-register");
    } catch (error) {
      console.error(error);
      setError(error.message || "Error al iniciar sesión");
    }
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
          <>
            {error && (
              <div className="text-center text-sm text-red-500 font-averia mb-2">
                {error}
              </div>
            )}
            <Link
              to="/forgot-password"
              className="text-center text-sm text-[#5E4F3E] font-averia mb-4 mt-1 block hover:underline"
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </>
        }
      />
    </div>
  );
};
