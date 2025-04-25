import React, { useState } from "react";
import { LoginRegisterButton } from "../buttons/LoginRegisterButton";

export const EmotionRegisterForm = () => {
  const [emotion, setEmotion] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Datos del registro emocional:", { emotion, notes });
  };

  return (
    <div className="mx-auto bg-[rgba(241,229,218,0.90)] rounded-3xl p-6 max-w-3xl relative">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-averia font-bold text-[#5E4F3E]">
          Registro emocional
        </h2>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col">
          <label className="mb-2 text-[#392F24] text-lg font-averia font-bold">
            Emoción
          </label>
          <select
            value={emotion}
            onChange={(e) => setEmotion(e.target.value)}
            className="p-2 border border-gray-400 font-averia rounded-md focus:outline-none"
            required
          >
            <option value="" disabled>
              Selecciona una emoción
            </option>
            <option value="Tristeza">Tristeza</option>
            <option value="Felicidad">Felicidad</option>
            <option value="Enfado">Enfado</option>
            <option value="Ansiedad">Ansiedad</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="mb-2 text-[#392F24] text-lg font-averia font-bold">
            Notas positivas
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Escribe aquí cómo te sientes..."
            className="p-2 border border-gray-400 font-averia rounded-md resize-none focus:outline-none"
            rows={4}
            required
          />
        </div>

        <div className="flex justify-center mt-4">
          <LoginRegisterButton text="Registrar" type="submit" />
        </div>
      </form>
    </div>
  );
};
