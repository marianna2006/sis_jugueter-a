import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "../cards/ProductCard";

export default function PopularSection() {
  const scrollContainerRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/products/filter/new");
        if (!res.ok) throw new Error("Error al obtener productos nuevos");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
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

  if (loading) return <p className="text-center mt-6 text-gray-500">Cargando productos...</p>;
  if (error) return <p className="text-center mt-6 text-red-500">{error}</p>;
  if (products.length === 0) return <p className="text-center mt-6 text-gray-500">No hay productos disponibles.</p>;

  return (
    <div className="my-12 px-4">
      <h2 className="text-4xl font-bold text-center mb-2 text-primary">¡Novedades!</h2>
      <p className="text-center text-2xl text-testSecondary mb-8">Descubre lo más nuevo en nuestra tienda</p>

      <div className="relative group">
        {showLeftArrow && (
          <button onClick={() => handleScroll(-300)} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-primary hover:text-white text-primary rounded-full p-3 shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:-translate-x-2">
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        <div ref={scrollContainerRef} className="overflow-x-auto scrollbar-hide cursor-grab select-none" onMouseDown={handleMouseDown} onMouseLeave={handleMouseLeave} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove} onScroll={checkScrollPosition}>
          <div className="flex gap-6 p-4">
            {products.map((p) => (
              <div key={p.id} className="flex-shrink-0 w-72 transition-transform duration-300 hover:scale-[1.02]">
                <ProductCard {...p} price={`S/${p.price.toFixed(2)}`} oldPrice={p.previousPrice ? `S/${p.previousPrice.toFixed(2)}` : null} />
              </div>
            ))}
          </div>
        </div>

        {showRightArrow && (
          <button onClick={() => handleScroll(300)} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-primary hover:text-white text-primary rounded-full p-3 shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-2">
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {showLeftArrow && <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />}
        {showRightArrow && <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />}
      </div>
    </div>
  );
}
