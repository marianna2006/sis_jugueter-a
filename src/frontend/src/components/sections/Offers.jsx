import VerMasButton from "../buttons/VerMasButton";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "../cards/ProductCard";

const products = [
  {
    name: "Mochila Seoul - Girly",
    price: "S/420.00",
    image:
      "https://jugueteriazigzag.com/cdn/shop/files/ki4851_ki5eh_1_1024x1024@2x.jpg?v=1701564858",
    oldPrice: "S/350.00",
  },
  {
    name: "Rompecabezas Magnético Mundo ",
    price: "S/325.90",
    image:
      "https://jugueteriazigzag.com/cdn/shop/files/puzzle-monde-magnetique-92-pieces_1024x1024@2x.jpg?v=1682973510",
    oldPrice: "S/215.00",
  },
  {
    name: "Sparkling Lip Treats",
    price: "S/115.00",
    image:
      "https://jugueteriazigzag.com/cdn/shop/files/image-13dd4854a9f340908ccff8ffd6c73078_1024x1024@2x.jpg?v=1700862485",
    oldPrice: "S/80.00",
  },
  {
    name: "Mi Casita Feliz",
    price: "S/760.00",
    image:
      "https://jugueteriazigzag.com/cdn/shop/files/S543F_1024x1024@2x.jpg?v=1683051505",
    oldPrice: "S/540.00",
  },
  {
    name: "Kit para nieve",
    price: "S/135.95",
    image:
      "https://jugueteriazigzag.com/cdn/shop/files/Untitled-1_5deb829e-c19d-42c9-a999-5f4276825938_1024x1024@2x.png?v=1686443486",
    oldPrice: "S/35.00",
  },
  {
    name: "Maletín de Maquillaje para Viajar",
    price: "S/99.00",
    image:
      "http://jugueteriazigzag.com/cdn/shop/products/1_7b7c1515-c94e-407b-a6a8-c38534a1fb19_1024x1024@2x.png?v=1676470843",
    oldPrice: "S/74.00",
  },
  {
    name: "Airbrush Peluche de Dino ",
    price: "S/206.00",
    image:
      "https://jugueteriazigzag.com/cdn/shop/products/2242928_101_3x_f71773ce-25b9-4db4-aaa5-fdba696d6814_1024x1024@2x.jpg?v=1681235184",
    oldPrice: "S/154.00",
  },
];

export default function Offers() {
  const scrollContainerRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const handleMouseDown = (e) => {
    if (!scrollContainerRef.current) return;
    setIsDown(true);
    scrollContainerRef.current.style.cursor = "grabbing";
    scrollContainerRef.current.style.userSelect = "none";
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    if (!scrollContainerRef.current) return;
    setIsDown(false);
    scrollContainerRef.current.style.cursor = "grab";
    scrollContainerRef.current.style.userSelect = "auto";
  };

  const handleMouseUp = () => {
    if (!scrollContainerRef.current) return;
    setIsDown(false);
    scrollContainerRef.current.style.cursor = "grab";
    scrollContainerRef.current.style.userSelect = "auto";
  };

  const handleMouseMove = (e) => {
    if (!isDown || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleScroll = (scrollOffset) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="my-6">
      <h2 className="text-4xl font-bold text-center mb-2 text-primary">
        ¡¡Productos en oferta!!
      </h2>
      <p className="text-center text-2xl text-testSecondary mb-4">
        Ahorra a lo grande en tus productos favoritos
      </p>

      <div className="relative group">
        {showLeftArrow && (
          <button
            onClick={() => handleScroll(-300)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-primary hover:text-white text-primary rounded-full p-3 shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:-translate-x-2"
            aria-label="Scroll izquierda"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Contenedor de Scroll */}
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto scrollbar-hide cursor-grab select-none"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onScroll={checkScrollPosition}
        >
          <div className="flex gap-6 p-4">
            {products.map((p, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-72 transition-transform duration-300 hover:scale-[1.02]"
              >
                <ProductCard {...p} />
              </div>
            ))}
          </div>
        </div>

        {showRightArrow && (
          <button
            onClick={() => handleScroll(300)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-primary hover:text-white text-primary rounded-full p-3 shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-2"
            aria-label="Scroll derecha"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {showLeftArrow && (
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
        )}
        {showRightArrow && (
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />
        )}
      </div>
    </div>
  );
}
