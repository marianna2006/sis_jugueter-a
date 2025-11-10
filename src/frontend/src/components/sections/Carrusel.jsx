import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper/modules";

export default function Carrusel() {
  const slides = [
    {
      image: "../assets/carrusel1.svg",
      title: "Descubre la magia del juego",
      subtitle: "Encuentra los mejores juguetes para cada edad",
      button: "Explorar ahora",
    },
    {
      image: "../assets/carrusel2.svg",
      title: "Aprender nunca fue tan divertido",
      subtitle: "Juguetes educativos que inspiran creatividad",
      button: "Ver educativos",
    },
    {
      image: "../assets/carrusel3.svg",
      title: "Diversión para todos",
      subtitle: "Desde muñecas hasta vehículos, ¡tenemos de todo!",
      button: "Ver categorías",
    },
    {
      image: "../assets/carrusel4.svg",
      title: "Ofertas increíbles",
      subtitle: "Aprovecha descuentos por tiempo limitado",
      button: "Ver ofertas",
    },
  ];

  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={{ clickable: true }}
      mousewheel={true}
      keyboard={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
      className="w-full h-[550px]"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-full">
            {/* Imagen */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            {/* Texto centrado */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40 text-center px-6">
              <h2 className="text-4xl font-bold mb-2 drop-shadow-lg">
                {slide.title}
              </h2>
              <p className="text-lg mb-6 drop-shadow-md">{slide.subtitle}</p>
              <button className="bg-[#007C4E] hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full transition-transform transform hover:scale-105">
                {slide.button}
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
