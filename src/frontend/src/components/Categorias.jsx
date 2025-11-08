const categorias = [
  { nombre: "Educativos", imagen: "../assets/categoria-educativos.svg" },
  { nombre: "Muñecas", imagen: "../assets/categoria-munecas.svg" },
  { nombre: "Vehículos", imagen: "../assets/categoria-vehiculos.svg" },
  { nombre: "Construcción", imagen: "../assets/categoria-construccion.svg" },
];

export default function Categorias() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {categorias.map((cat, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center cursor-pointer bg-white shadow-md rounded-lg p-4 hover:shadow-lg hover:-translate-y-1 transition-transform duration-200"
        >
          <img src={cat.imagen} alt={cat.nombre} className="w-32 h-32 object-contain mb-4" />
          <p className="text-lg font-semibold text-gray-700 hover:text-green-600 transition-colors">
            {cat.nombre}
          </p>
        </div>
      ))}
    </div>
  );
}
