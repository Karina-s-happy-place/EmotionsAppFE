import React, { createContext, useContext, useState } from "react";

const NotesContext = createContext();

export const useNotes = () => useContext(NotesContext);

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes((prev) => [...prev, { id: Date.now(), ...note }]);
  };

  const updateNote = (id, updatedData) => {
    setNotes((prev) =>
      prev.map((note) => (note.id === id ? { ...note, ...updatedData } : note))
    );
  };

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, updateNote, deleteNote }}>
      {children}
    </NotesContext.Provider>
  );
};
