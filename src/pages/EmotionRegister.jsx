import React from "react";
import { AddMoreExploreButton } from "../components/buttons/AddMoreExploreButton";
import {EmotionRegisterForm} from "../components/forms/EmotionRegisterForm";
import { useNavigate } from "react-router-dom";

export const EmotionRegister = () => {
const navigate = useNavigate();

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/vases.jpg')" }}
    >
     
      <main className="py-8 px-4">
    
        <div className="text-center mt-12">
          <p className="text-2xl md:text-4xl italic font-averia text-[#F1E5DA]">
            “Eres quien eliges ser, no quien estás tentado a ser”
          </p>
        </div>

        <div className="text-center mt-8">
          <p className="text-[#F1E5DA] text-[30px] font-averia font-bold break-words">
            ¿Cómo te sientes hoy?
          </p>
        </div>

        <div className="mt-8 flex flex-nowrap justify-center gap-4">
          <AddMoreExploreButton text="Triste" onClick={() => navigate("/sadness")}/>
          <AddMoreExploreButton text="Feliz" onClick={() => navigate("/construction")}/>
          <AddMoreExploreButton text="Enfadado" onClick={() => navigate("/construction")}/>
          <AddMoreExploreButton text="Ansioso" onClick={() => navigate("/construction")}/>
        </div>

        <div className="mt-12">
          <EmotionRegisterForm />
        </div>
      </main>
   
    </div>
  );
};
