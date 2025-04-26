import React from "react";

export const ContentCard = ({ title, items, className = "" }) => {
  return (
    <div
      className={`w-[375px] h-[234px] relative bg-[rgba(204,198,192,0.80)] overflow-hidden rounded-[20px] ${className}`}
    >
      <p className="absolute left-[152px] top-0 text-[#392F24] text-[25px] font-averia break-words">
        <a href="#" target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </p>

      {items &&
        items.map((item, index) => (
          <p
            key={index}
            className="absolute left-[32px] text-[#392F24] text-[16px] font-averia font-bold underline break-words"
            style={{
              top: `${36 + index * 30}px`,
              width: "370px",
              height: "26px",
            }}
          >
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              {item.label}
            </a>
          </p>
        ))}
    </div>
  );
};
