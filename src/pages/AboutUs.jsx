import React from "react";

export const AboutUs = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/plants.jpg')" }}
    >
      <div className="flex flex-col items-center justify-center w-full h-full px-4 py-16">
        <h1 className="text-4xl md:text-6xl text-[#18120C] font-averia font-bold text-center mb-12">
          Nuestro objetivo
        </h1>

        <div className="flex flex-col lg:flex-row items-center gap-8 max-w-5xl w-full">
          <div className="flex-1 bg-[#8A734F]/70 rounded-[32px] p-8">
            <p className="text-2xl md:text-4xl text-[#F1E5DA] font-averia font-bold leading-relaxed text-center">
              Queremos ofrecer un espacio digital y accesible donde los usuarios puedan
              explorar recursos sobre sus estados de ánimo y salud emocional.
            </p>
          </div>

          <img
            src="/no-bads-days.jpg"
            alt="Ilustración"
            className="flex-1 w-full max-w-md rounded-[32px]"
          />
        </div>
      </div>
    </div>
  );
};
