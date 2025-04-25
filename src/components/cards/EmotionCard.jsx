import React from 'react';

export const EmotionCard = ({ image, title, description }) => {
  return (
    <div
      className="w-[253px] h-[317px] p-[13px] bg-[#F1E5DA]/90 overflow-hidden rounded-[20px] outline outline-black outline-offset-[-1px] inline-flex flex-col justify-start items-center gap-[5px]"
    >
      <img
        src={image}
        alt={title}
        className="self-stretch h-[121px] relative rounded-[20px] object-cover"
      />
      <div
        className="self-stretch text-center text-[#5E4F3E] text-[25px] font-averia font-bold break-words"
      >
        {title}
      </div>
      <div
        className="w-[184px] h-[135px] text-[#392F24] text-[12px] font-averia font-light leading-[21px] tracking-[0.24px] break-words"
      >
        {description}
      </div>
    </div>
  );
};
