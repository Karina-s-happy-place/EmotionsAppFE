export const AddMoreExploreButton = ({ text, type = "button", ...props }) => (
  <button type={type} {...props} className="flex justify-center items-center px-4 sm:px-6 md:px-[58px] py-2 sm:py-[14px] md:py-[18px] bg-gradient-to-r from-[#DABA95] to-[#74634F] text-white rounded-lg sm:rounded-xl md:rounded-[20px] text-base sm:text-lg md:text-[18px] font-bold font-averia shadow-[3px_3px_12px_black] transition-transform duration-200 hover:scale-105 cursor-pointer">
    {text}
  </button>
);
