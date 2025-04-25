export const FormInput = ({ label = "Introduce tu correo electrónico", type = "text", name, value, onChange, placeholder = "", ...props }) => (
  <div className="w-full h-full flex flex-col gap-1">
    <label className="text-[#5E4F3E] text-[16px] font-averia">{label}</label>
    <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} {...props} className="w-full h-[40px] text-[12px] p-4 bg-white rounded-[8px] text-[#333] font-averia placeholder-[#B3B3B3] outline-none"/>
  </div>
);
