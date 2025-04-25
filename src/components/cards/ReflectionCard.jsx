import React from "react";

export const ReflectionCard = ({ onEdit, onDelete }) => {
  return (
    <div className="w-[284px] h-[180px] relative bg-white overflow-hidden rounded-[8px]">
      <div className="absolute left-[8px] top-[21px] w-[268px] h-[127px] flex flex-col justify-center items-center text-center">
        <span className="text-[#392F24] text-[14px] font-averia font-bold leading-[22.4px] break-words">
          Hoy me di cuenta de algo importante:
          <br />
        </span>
        <span className="text-[#392F24] text-[14px] font-averia font-normal leading-[22.4px] break-words">
          No hay emociones buenas o malas, solo señales que me hablan de lo que
          necesito. A veces me cuesta escucharlas, pero cada emoción me enseña
          algo valioso.
          <br />
        </span>
      </div>

      <button
        onClick={onEdit}
        className="absolute left-[74px] top-[130px] w-[45px] h-[36px] overflow-hidden focus:outline-none"
      >
        <span className="absolute left-[5px] top-[4px] w-[36px] h-[28px] items-center justify-center text-center text-[#392F24] text-[20px] font-averia font-normal leading-[32px] cursor-pointer">
          ✏️
        </span>
      </button>

      <button
        onClick={onDelete}
        className="absolute left-[119px] top-[132px] w-[45px] h-[36px] overflow-hidden focus:outline-none"
      >
        <span className="absolute left-[5px] top-[4px] w-[36px] h-[28px]  items-center justify-center text-center text-[#392F24] text-[20px] font-averia font-normal leading-[32px] cursor-pointer">
          ❌
        </span>
      </button>
    </div>
  );
};
