import React from "react";
import { EmotionCard } from "../components/cards/EmotionCard";
import { AddMoreExploreButton } from "../components/buttons/AddMoreExploreButton";
import { useNavigate } from "react-router-dom";


export const HomeDashboard = () => {
  const navigate = useNavigate();

  const emotions = [
    {
      image: "/sad.jpg",
      title: "Triste",
      description:
        "Sentirse triste no es siempre una mala señal; muchas veces es justo lo que necesitas para poner atención a ciertas cosas que debes cambiar o mejorar en tu entorno.",
    },
    {
      image: "/hapiness.jpg",
      title: "Feliz",
      description:
        "Esa sensación de valorar lo que tienes y disfrutar del presente. No, no es ausencia de problemas, sino aprender a enfrentarlos con optimismo y la mejor actitud.",
    },
    {
      image: "/angry.jpg",
      title: "Enfadado",
      description:
        "Es ese reflejo de que algo no está como debería. Canalizarlo de manera constructiva es fundamental para controlarlo sin dejar que te controle.",
    },
    {
      image: "/frustration.jpg",
      title: "Ansioso",
      description:
        "Una reacción natural ante lo desconocido. Aprender a gestionarla te permite convertirla en un impulso para el crecimiento en lugar de una barrera.",
    },
  ];

  return (
    <div
      className="flex flex-col items-center px-4 py-10 min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/vases.jpg')" }}
    >
      <h1 className="text-[#F1E5DA] text-[32px] sm:text-[42px] md:text-[56px] font-averia font-bold text-center mb-4">
        Hablemos de emociones
      </h1>

      <h2 className="text-[#F1E5DA] text-[22px] sm:text-[30px] md:text-[36px] font-averia font-bold text-center mb-10">
        ¿Cómo te sientes hoy?
      </h2>

      <div className="w-full max-w-[1300px]">
        <div className="hidden lg:grid grid-cols-4 gap-6">
          {emotions.map((emo, index) => (
            <EmotionCard
              key={index}
              image={emo.image}
              title={emo.title}
              description={emo.description}
            />
          ))}
        </div>

        <div className="lg:hidden overflow-x-auto scroll-smooth snap-x snap-mandatory">
          <div className="flex gap-6 w-max px-1">
            {emotions.map((emo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[280px] sm:w-[300px] md:w-[340px] snap-center"
              >
                <EmotionCard
                  image={emo.image}
                  title={emo.title}
                  description={emo.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12">
        <AddMoreExploreButton
          text="Explorar más"
          onClick={() => navigate("/login")}
        />
      </div>

    
    </div>
  );
};
