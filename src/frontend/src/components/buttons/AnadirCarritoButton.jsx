import { Button } from "flowbite-react";
import { HiShoppingCart } from "react-icons/hi";

export default function AgregarCarritoButton({ onClick }) {
  return (
    <Button
      className="mt-3 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full text-xs flex items-center justify-center font-semibold tracking-wide shadow-md transform transition duration-200 hover:scale-105 hover:shadow-lg"
      onClick={onClick}
    >
      <HiShoppingCart className="mr-2 h-5 w-5 transform transition-transform duration-200 group-hover:translate-x-1" />
      Agregar al carrito
    </Button>
  );
}
