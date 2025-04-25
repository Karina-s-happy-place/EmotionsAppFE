import React from "react";

export const Footer = ({ text, icons = [] }) => {
  return (
    <footer className="w-full bg-[#8A734F] py-6 flex flex-col items-center">
      <div className="flex flex-wrap justify-center gap-4">
        {icons.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={item.icon}
              alt={`icono ${index + 1}`}
              className="w-6 h-6 md:w-8 md:h-8"
            />
          </a>
        ))}
      </div>
      <p className="text-[#392F24] text-sm md:text-lg font-averia text-center mt-2">
        {text}
      </p>
    </footer>
  );
};
