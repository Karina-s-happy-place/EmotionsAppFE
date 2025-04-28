import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useNotes } from "../NotesContext.jsx"; 
import { LoginRegisterButton } from "../buttons/LoginRegisterButton";

export const EmotionRegisterForm = () => {
  const navigate = useNavigate();
  const { addNote } = useNotes();
  const [emotion, setEmotion] = useState("");
  const [notesText, setNotesText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newNote = {
      emotion,
      text: notesText,
    };

    addNote(newNote);

    navigate("/emotion-history");
  };

  return (
    <div className="w-full px-4 py-6 mx-auto bg-[rgba(241,229,218,0.90)] rounded-3xl relative sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px]">
      <div className="text-center mb-4">
        <h2 className="text-xl md:text-2xl font-averia font-bold text-[#5E4F3E]">
          Registro emocional
        </h2>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label className="mb-1 text-[#392F24] text-sm font-averia font-bold">
            Emoción
          </label>
          <select
            value={emotion}
            onChange={(e) => setEmotion(e.target.value)}
            className="w-full p-2 border border-gray-400 font-averia rounded-md focus:outline-none text-sm"
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
          <label className="mb-1 text-[#392F24] text-sm font-averia font-bold">
            Notas positivas
          </label>
          <textarea
            value={notesText}
            onChange={(e) => setNotesText(e.target.value)}
            placeholder="Escribe aquí cómo te sientes..."
            className="w-full p-2 border border-gray-400 font-averia rounded-md resize-none focus:outline-none text-sm"
            rows={3}
            required
          />
        </div>
        <div className="flex justify-center mt-2">
          <LoginRegisterButton text="Registrar" type="submit" />
        </div>
      </form>
    </div>
  );
};