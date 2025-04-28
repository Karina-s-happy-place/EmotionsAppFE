import React, { useState, useEffect } from "react";

export const ReflectionCard = ({ note, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(note.text);

 
  useEffect(() => {
    setEditedText(note.text);
  }, [note.text]);

  const handleSave = () => {
    if (editedText.trim() === "") {
     
      return;
    }
    console.log("Saving note", note.id, editedText);
    onUpdate(note.id, { text: editedText });
    setIsEditing(false);
  };

  const handleCancel = () => {
    console.log("Cancelling edit for note", note.id);
    setEditedText(note.text);
    setIsEditing(false);
  };

  return (
    <div className="w-[284px] h-[180px] relative bg-white overflow-hidden rounded-[8px] shadow">
      <div className="absolute left-[8px] top-[21px] w-[268px] h-[127px] flex flex-col justify-center items-center text-center">
        <span className="text-[#392F24] text-[14px] font-averia font-bold leading-[22.4px] break-words">
          {note.emotion}
          <br />
        </span>
        {isEditing ? (
          <textarea
            className="w-full h-full p-2 border border-gray-300 outline-none resize-none"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
        ) : (
          <span className="text-[#392F24] text-[14px] font-averia font-normal leading-[22.4px] break-words">
            {note.text}
            <br />
          </span>
        )}
      </div>

      <div className="absolute bottom-2 left-1/2 z-10 transform -translate-x-1/2 flex gap-2">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="w-9 h-9 flex items-center justify-center text-xl font-averia text-[#392F24] bg-green-200 rounded focus:outline-none"
              title="Guardar"
            >
              💾
            </button>
            <button
              onClick={handleCancel}
              className="w-9 h-9 flex items-center justify-center text-xl font-averia text-[#392F24] bg-red-200 rounded focus:outline-none"
              title="Cancelar"
            >
              ❌
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => {
                console.log("Editar clicked");
                setIsEditing(true);
              }}
              className="w-9 h-9 flex items-center justify-center text-xl font-averia text-[#392F24] focus:outline-none"
              title="Editar"
            >
              ✏️
            </button>
            <button
              onClick={() => {
                console.log("Eliminar clicked");
                onDelete(note.id);
              }}
              className="w-9 h-9 flex items-center justify-center text-xl font-averia text-[#392F24] focus:outline-none"
              title="Eliminar"
            >
              ❌
            </button>
          </>
        )}
      </div>
    </div>
  );
};
