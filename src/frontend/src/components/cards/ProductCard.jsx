import AgregarCarritoButton from "../buttons/AnadirCarritoButton";

export default function ProductCard({ name, price, image, oldPrice  }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-xs transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
      <img
        src={image}
        alt={name}
        className="w-full aspect-[4/3] object-cover"
      />
      <div className="p-3 flex flex-col items-center">
        <h3 className="text-xl font-semibold text-gray-800 text-center">
          {name}
        </h3>
        <div className="mt-2 flex items-center gap-2">
          {oldPrice && (
            <span className="text-gray-400 line-through text-sm">
              {oldPrice}
            </span>
          )}
          <span className="text-primary font-bold">{price}</span>
        </div>
        <AgregarCarritoButton></AgregarCarritoButton>
      </div>
    </div>
  );
}
