import React from "react";
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
  return (
    <div className="h-screen flex items-center justify-center px-4">
      <div className="relative w-full max-w-[384px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[600px] bg-[#F1E5DA]/90 rounded-[32px] overflow-hidden p-4 sm:p-6 md:p-8">
        <div className="text-center text-[#5E4F3E] text-lg sm:text-xl md:text-2xl lg:text-3xl font-averia font-bold leading-tight mb-6">
          {title}
        </div>

        {inputs.map((input) => (
          <div key={input.name} className="mb-4 w-full max-w-xs sm:max-w-sm">
            <FormInput
              label={input.label}
              type={input.type}
              name={input.name}
              value={input.value}
              onChange={input.onChange}
              placeholder={input.placeholder}
            />
          </div>
        ))}

        {extra && <div className="mb-4">{extra}</div>}

        <div className="mb-4 flex justify-center">
          <LoginRegisterButton
            text={buttonText}
            type="submit"
            onClick={onSubmit}
          />
        </div>

        {bottomText && (
          <div className="text-center text-[#392F24] text-sm sm:text-base font-averia">
            {bottomText}{" "}
            <Link
              to={bottomLinkHref}
              className="cursor-pointer hover:underline"
            >
              {bottomLinkText}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
