export const AddMoreExploreButton = ({ text, type = "button", ...props }) => (
    <button
      type={type}
      {...props}
      className="flex justify-center items-center px-[58px] py-[18px] bg-gradient-to-r from-[#DABA95] to-[#74634F] text-white rounded-[18px] text-[16px] font-bold font-averia shadow-[3px_3px_12px_black] transition-transform duration-200 hover:scale-105 cursor-pointer"
    >
      {text}
    </button>
  );
