import { Button } from "flowbite-react";
import { HiArrowRight } from "react-icons/hi";

export default function VerMasButton({ onClick }) {
  return (
    <Button
      className="flex items-center text-primary font-semibold text-xl hover:text-green-600 p-0 bg-transparent shadow-none"
      onClick={onClick}
    >
      <HiArrowRight className="mr-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
      Ver más
    </Button>
  );
}
