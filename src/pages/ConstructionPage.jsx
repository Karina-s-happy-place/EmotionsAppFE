import React from "react";

export const ConstructionPage = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/soft.jpg')" }}
    >
      <div className="flex flex-col items-center justify-start w-full h-full px-4 py-16">
        <h1 className="mt-30 text-4xl md:text-6xl text-[#F1E5DA] font-averia font-bold text-center mb-12">
          PÁGINA EN CONSTRUCCIÓN
        </h1>
        <img
          src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnd2Y200N2Z4Z3piNjdxemJhMDM3OGNxYjczcDRkajJ1OXpseG56byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tAeB6dptxnoli/giphy.gif"
          alt="Página en construcción"
          className="w-full max-w-md mb-12"
        />
        <div className="flex flex-col lg:flex-row items-center gap-8 max-w-5xl w-full">
        </div>
      </div>
    </div>
  );
};
