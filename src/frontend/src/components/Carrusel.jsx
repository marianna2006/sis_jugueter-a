import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper/modules";

export default function Carrusel() {
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
      <SwiperSlide>
        <img src="../assets/carrusel1.svg" alt="Slide 1" className="w-full h-full object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../assets/carrusel2.svg" alt="Slide 2" className="w-full h-full object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../assets/carrusel3.svg" alt="Slide 3" className="w-full h-full object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../assets/carrusel4.svg" alt="Slide 3" className="w-full h-full object-cover"/>
      </SwiperSlide>
    </Swiper>
  );
}
