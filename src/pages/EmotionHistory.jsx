import React from "react";
import { useNotes } from "../components/NotesContext.jsx"; 
import { ReflectionCard } from "../components/cards/ReflectionCard";
import { AddMoreExploreButton } from "../components/buttons/AddMoreExploreButton";
import { useNavigate } from "react-router-dom";

export const EmotionHistory = () => {
  const { notes, deleteNote, updateNote } = useNotes();
  const navigate = useNavigate();

  const handleUpdate = (id, updatedData) => {
    updateNote(id, updatedData);
  };

  const handleDelete = (id) => {
    if (window.confirm("¿Estás seguro de eliminar esta nota?")) {
      deleteNote(id);
    }
  };

  const handleAddMore = () => {
    navigate("/emotion-register");
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center overflow-y-auto"
      style={{ backgroundImage: "url('/vases.jpg')" }}
    >
      <main className="pt-[125px] pb-[125px] px-4">
        <div className="max-w-4xl mx-auto text-center px-4">
          <p className="text-2xl md:text-4xl text-[#F1E5DA] font-averia font-light">
            Todos tenemos días tristes y malos momentos, pero nunca serán más
            importantes que las cosas buenas de la vida. Explora aquí tus notas
            positivas y pensamientos que has escrito:
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {notes.length === 0 ? (
            <p className="text-[#F1E5DA] font-averia">
              No hay notas registradas.
            </p>
          ) : (
            notes.map((note) => (
              <ReflectionCard
                key={note.id}
                note={note}
                onUpdate={handleUpdate}  
                onDelete={handleDelete}
              />
            ))
          )}
        </div>

        <div className="mt-8 flex justify-center">
          <AddMoreExploreButton text="Registrar" onClick={handleAddMore} />
        </div>
      </main>
    </div>
  );
};
