import React, { useState } from "react";
import { FormInput } from "../forms/FormInput";
import { LoginRegisterButton } from "../buttons/LoginRegisterButton";
import { Link } from "react-router-dom";

export const LoginRegisterForm = ({
  title = "Iniciar sesión",
  buttonText = "Entrar",
  inputs = [],
  onSubmit,
  bottomText,
  bottomLinkText,
  bottomLinkHref,
  extra,
}) => {
  const [errors, setErrors] = useState({});

  const validateInput = (name, value) => {
    let error = "";

    if (name === "email") {
    
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) {
        error = "Introduce un correo válido.";
      }
    }

    if (name === "password") {
      const passwordPattern = /^(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
      if (!passwordPattern.test(value)) {
        error = "La contraseña debe tener mínimo 8 caracteres y al menos 1 carácter especial.";
      }
    }

    if (name === "name" || name === "surname") {
      if (value.length < 7) {
        error = "Debe contener al menos 7 caracteres.";
      }
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmitInternal = (e) => {
    e.preventDefault();

    const hasErrors = Object.values(errors).some((error) => error !== "");
    if (hasErrors) {
      alert("Existen errores en el formulario. Corrige los campos antes de enviar.");
      return;
    }

    const missingValues = inputs.some((input) => !input.value);
    if (missingValues) {
      alert("Por favor, rellena todos los campos.");
      return;
    }

    if (onSubmit) {
      onSubmit(e);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center px-4">
      <div className="relative w-full max-w-[384px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[600px] bg-[#F1E5DA]/90 rounded-[32px] overflow-hidden p-4 sm:p-6 md:p-8">
        <div className="text-center text-[#5E4F3E] text-lg sm:text-xl md:text-2xl lg:text-3xl font-averia font-bold leading-tight mb-6">
          {title}
        </div>
        <form onSubmit={handleSubmitInternal}>
          {inputs.map((input) => (
            <div key={input.name} className="mb-4 w-full max-w-xs sm:max-w-sm">
              <FormInput
                label={input.label}
                type={input.type}
                name={input.name}
                value={input.value}
                onChange={(e) => {
                  input.onChange(e);
                  validateInput(e.target.name, e.target.value);
                }}
                placeholder={input.placeholder}
              />
              {errors[input.name] && (
                <p className="text-red-500 text-sm mt-1">{errors[input.name]}</p>
              )}
            </div>
          ))}
          {extra && <div className="mb-4">{extra}</div>}
          <div className="mb-4 flex justify-center">
            <LoginRegisterButton text={buttonText} type="submit" />
          </div>
        </form>
        {bottomText && (
          <div className="text-center text-[#392F24] text-sm sm:text-base font-averia">
            {bottomText}{" "}
            <Link to={bottomLinkHref} className="cursor-pointer hover:underline">
              {bottomLinkText}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
