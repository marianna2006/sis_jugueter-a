import { Button } from "flowbite-react";
import { HiShoppingCart } from "react-icons/hi";
import { useCart } from "../cards/CartContext";

export default function AgregarCarritoButton({ product }) {
  const { addToCart } = useCart();

  const handleClick = (e) => {
    e.stopPropagation(); // Evita que el click del botón abra el ProductCard
    addToCart(product);
  };

  return (
    <Button
      onClick={handleClick}
      className="mt-3 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full text-xs flex items-center justify-center font-semibold shadow-md"
    >
      <HiShoppingCart className="mr-2 h-5 w-5" />
      Agregar al carrito
    </Button>
  );
}
