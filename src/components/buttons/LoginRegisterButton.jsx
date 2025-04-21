export const LoginRegisterButton= ({ text, type = "button", ...props }) => (
  <button
    type={type}
    {...props}
    className="flex justify-center items-center w-[150px] h-full px-[18px] py-[4px] bg-[#C3BEBA] text-[#767371] rounded-[12px] text-[14px] font-bold font-averia transition-colors duration-200 hover:bg-[#767371] hover:text-[#C3BEBA] cursor-pointer"
  >
    {text}
  </button>
);
