import React from "react";

export const ContentCard = ({ title, items = [], className = "" }) => {
  return (
    <div
      className={`
        w-[253px] h-[257px] p-[13px] bg-[#CCC6C0]/90 overflow-hidden 
        rounded-[20px] outline outline-black outline-offset-[-1px] 
        inline-flex flex-col justify-start items-center gap-[5px] ${className}
      `}
    >
      <div className="self-stretch text-center text-[#5E4F3E] text-[25px] font-averia font-bold break-words">
        {title}
      </div>
      <div className="w-[184px] h-[135px] text-[#392F24] text-[12px] font-averia font-light leading-[21px] tracking-[0.24px] break-words">
        {items.map((item, index) => (
          <p key={index} className="break-words">
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
    </div>
  );
};
