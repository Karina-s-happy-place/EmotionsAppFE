import React from "react";
import { ContentCard } from "../components/cards/ContentCard";

export const SadnessView = () => {
  const cineItems = [
    { label: "En busca de la felicidad (2006)", href: "https://example.com" },
    { label: "La vida es bella (1997)", href: "https://example.com" },
    { label: "Luca (2021)", href: "https://example.com" },
    { label: "Bajo la misma estrella (2014)", href: "https://example.com" },
    { label: "Un monstruo viene a verme (2016)", href: "https://example.com" },
  ];

  const musicaItems = [
    { label: "Vivir mi vida - Marc Anthony", href: "https://example.com" },
    { label: "Happy – Pharrell Williams", href: "https://example.com" },
    { label: "Cuando me siento bien - Efecto pasillo", href: "https://example.com" },
    { label: "What a wonderful word - Louis Armstrong", href: "https://example.com" },
    { label: "Don't Worry Be Happy - Bobby McFerrin", href: "https://example.com" },
  ];

  const lecturaItems = [
    { label: "Cómo salir de un bajón emocional en 5 pasos", href: "https://example.com" },
    { label: "El arte de no amargarse la vida - Rafael S.", href: "https://example.com" },
    { label: "Come, reza, ama - Elizabeth Gilbert", href: "https://example.com" },
    { label: "Sé amable contigo mismo – Kristin Neff", href: "https://example.com" },
    { label: "Estoy triste, ¿Qué hago?", href: "https://example.com" },
  ];

  return (
    <div
      className="flex flex-col items-center px-4 py-10 min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/vases.jpg')" }}
    >
      
      <div className="w-full max-w-5xl">
       
        <div className="mt-8 text-center text-[#F1E5DA] font-averia">
       
          <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold">
            La tristeza y sus efectos, <br />
            ¿cómo enfrentarte a esto?
          </h1>
      
          <div className="mt-8 flex flex-col md:flex-row items-center gap-8">
            <img
              src="/hug.jpg"
              alt="Ilustración"
              className="hidden md:block w-full max-w-md rounded-2xl"
            />
            <p className="text-sm sm:text-base md:text-lg xl:text-xl text-justify md:text-left">
              Sentirse triste está bien. Estás en un espacio seguro. Aquí encontrarás
              recursos que te ayudarán a entender que la tristeza no es tu enemiga, sino
              una emoción que también te enseña. Valora lo que tienes, abrázate con amor
              y llénate de pequeñas cosas positivas.
            </p>
          </div>
        </div>

     
        <div className="mt-10 flex flex-col md:flex-row justify-center gap-8">
          <ContentCard
            title="Cine"
            items={cineItems}
            className="w-full max-w-sm"
          />
          <ContentCard
            title="Música"
            items={musicaItems}
            className="w-full max-w-sm"
          />
          <ContentCard
            title="Lectura"
            items={lecturaItems}
            className="w-full max-w-sm"
          />
        </div>
      </div>
    </div>
  );
};
