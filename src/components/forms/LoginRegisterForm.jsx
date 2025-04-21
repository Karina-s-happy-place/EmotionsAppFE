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
    <div className="h-screen flex justify-center items-center">
      <div className="relative w-[384px] bg-[#F1E5DA]/90 rounded-[32px] overflow-hidden p-4 sm:p-8">
        <div className="text-center text-[#5E4F3E] text-[36px] font-averia font-bold leading-[46.8px] mb-6">
          {title}
        </div>

        {inputs.map((input) => (
          <div key={input.name} className="mb-4 w-full max-w-sm">
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
          <div className="text-center text-[#392F24] text-[14px] font-averia">
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
