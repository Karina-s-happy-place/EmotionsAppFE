import React from "react";
import { FormInput } from "../forms/FormInput";
import { LoginRegisterButton } from "../buttons/LoginRegisterButton";

export const LoginRegisterForm = ({
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  ...props
}) => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div
        className="relative w-[384px] h-[410px] bg-[#F1E5DA] rounded-[32px] overflow-hidden p-4 sm:p-8"
        {...props}
      >
        <div className="text-center text-[#5E4F3E] text-[36px] font-averia font-bold leading-[46.8px] mb-6">
          Iniciar sesión
        </div>
        <div className="mb-4 w-full max-w-sm">
          <FormInput
            label="Correo electrónico:"
            type="email"
            name="email"
            value={email}
            onChange={onEmailChange}
            placeholder="Introduce tu correo electrónico"
          />
        </div>

        <div className="mb-4 w-full max-w-sm">
          <FormInput
            label="Contraseña:"
            type="password"
            name="password"
            value={password}
            onChange={onPasswordChange}
            placeholder="Introduce tu contraseña"
          />

          <div className="text-center text-sm text-[#5E4F3E] font-averia mb-4 mt-1 cursor-pointer hover:underline">
            ¿Olvidaste tu contraseña?
          </div>
        </div>

        <div className="mb-4 flex justify-center">
          <LoginRegisterButton text="Entrar" type="submit" onClick={onSubmit} />
        </div>
        <div className="text-center text-[#392F24] text-[14px] font-averia">
          ¿No tienes cuenta?{" "}
          <span className="cursor-pointer hover:underline">Crea una cuenta</span>
        </div>
      </div>
    </div>
  );
};
