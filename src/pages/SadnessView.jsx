import React from "react";
import { ContentCard } from "../components/cards/ContentCard";

export const SadnessView = () => {
  const cineItems = [
    {
      label: "En busca de la felicidad (2006)",
      href: "https://www.filmaffinity.com/es/film294674.html",
    },
    {
      label: "La vida es bella (1997)",
      href: "https://www.filmaffinity.com/es/film594480.html",
    },
    {
      label: "Luca (2021)",
      href: "https://www.filmaffinity.com/es/film775531.html",
    },
    {
      label: "Bajo la misma estrella (2014)",
      href: "https://www.filmaffinity.com/es/film550582.html",
    },
    {
      label: "Un monstruo viene a verme (2016)",
      href: "https://www.filmaffinity.com/es/film269350.html",
    },

    {
      label: "Antes de ti (2016)",
      href: "https://www.filmaffinity.com/es/film498304.html",
    },

    {
      label: "Wonder 2017",
      href: "https://www.filmaffinity.com/es/film199669.html",
    },
  ];

  const musicaItems = [
    {
      label: "Vivir mi vida - Marc Anthony",
      href: "https://open.spotify.com/intl-es/track/3QHMxEOAGD51PDlbFPHLyJ",
    },
    {
      label: "Happy - Pharrell Williams",
      href: "https://open.spotify.com/intl-es/track/60nZcImufyMA1MKQY3dcCH?si=02139c034bcd45fc&nd=1&dlsi=00242c33086e4e1d",
    },
    {
      label: "Cuando me siento bien - Efecto pasillo",
      href: "https://open.spotify.com/intl-es/track/2xUl8Bp6eLddk5mdv8I2Wo?si=671694ba58a84ef7&nd=1&dlsi=b6e3b1e4649a49f5",
    },
    {
      label: "What a wonderful word - Louis Armstrong",
      href: "https://open.spotify.com/intl-es/track/29U7stRjqHU6rMiS8BfaI9?si=72636f384fd94577&nd=1&dlsi=8a0889830f7c4489m",
    },
    {
      label: "Don't Worry Be Happy - Bobby McFerrin",
      href: "https://open.spotify.com/intl-es/track/5YbgcwHjQhdT1BYQ4rxWlD?si=8ff43e734bff4b17&nd=1&dlsi=568201b371484f92",
    },

    {
      label: "Qué bonito es querer - Manuel Carrasco",
      href: "https://open.spotify.com/intl-es/track/6uzGmmQ4CuG9HvZktEy0LF?si=e793764196d34a27&nd=1&dlsi=44be00812f874cee",
    },
  ];

  const lecturaItems = [
    {
      label: "Cómo salir de un bajón emocional en 5 pasos",
      href: "https://www.tuterapia.com.uy/blog/bajon-emocional-5-consejos-para-salir-de-esta-situacion/",
    },
    {
      label: "El arte de no amargarse la vida - Rafael S.",
      href: "https://www.amazon.es/arte-amargarse-vida-psicol%C3%B3gico-transformaci%C3%B3n/dp/849754546X",
    },
    {
      label: "Come, reza, ama - Elizabeth Gilbert",
      href: "https://www.amazon.es/Come-reza-ama-BEST-SELLER/dp/8466330348",
    },
    {
      label: "Sé amable contigo mismo – Kristin Neff",
      href: "https://www.amazon.es/amable-contigo-mismo-compasi%C3%B3n-Divulgaci%C3%B3n-Autoayuda/dp/8449331986",
    },
    {
      label: "Estoy triste, ¿Qué hago?",
      href: "https://somosestupendas.com/estoy-triste-que-hago/",
    },

    {
      label: "Amar lo que es - Byron Katie",
      href: "https://www.amazon.es/Amar-que-Books4pocket-crec-salud/dp/8492516909",
    },
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
              className="hidden md:block w-full max-w-md rounded-[32px]"
            />
            <p className="text-[28px] sm:text-base md:text-lg xl:text-xl text-justify md:text-left">
              Sentirse triste está bien. Estás en un espacio seguro. Aquí
              encontrarás recursos que te ayudarán a entender que la tristeza no
              es tu enemiga, sino una emoción que también te enseña. Valora lo
              que tienes, abrázate con amor y llénate de pequeñas cosas
              positivas.
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
