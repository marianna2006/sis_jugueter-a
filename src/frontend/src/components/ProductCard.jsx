export default function ProductCard({ name, price, image }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition-transform duration-200">
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover"
      />
      <div className="p-4 flex flex-col items-center">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-green-600 text-xl font-bold mt-2">{price}</p>
        <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}
