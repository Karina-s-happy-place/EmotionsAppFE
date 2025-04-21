import React, { useState } from "react";
import { LoginRegisterForm } from "../components/forms/LoginRegisterForm";

export const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <LoginRegisterForm
        email={form.email}
        onEmailChange={handleChange}
        password={form.password}
        onPasswordChange={handleChange}
        onSubmit={() => console.log("Iniciar sesión")}
      />
    </div>
  );
};
