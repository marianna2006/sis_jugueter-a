export default function Categorias() {
  const categories = [
    { nombre: "Educativos", imagen: "../assets/categoria-educativos.svg" },
    { nombre: "Muñecas", imagen: "../assets/categoria-munecas.svg" },
    { nombre: "Vehículos", imagen: "../assets/categoria-vehiculos.svg" },
    { nombre: "Construcción", imagen: "../assets/categoria-construccion.svg" },
    {
      nombre: "Deportes",
      imagen: "../assets/categoria-deportes.svg",
      grande: true,
    },
  ];

  const posiciones = [
    "col-start-1 row-start-1",
    "col-start-2 row-start-1",
    "col-start-1 row-start-2",
    "col-start-2 row-start-2",
  ];

  return (
    <div className="my-6">
      <h2 className="text-4xl font-bold text-center mb-2 text-primary">
        ¡¡Explora nuestras categorías!!
      </h2>
      <p className="text-center text-2xl text-testSecondary mb-4">
        Los juguetes más populares y más valorados
      </p>
      <div className="grid grid-cols-3 grid-rows-2 gap-4 h-[500px]">
        {categories.map((cat, index) => {
          const isGrande = cat.grande;
          const clases = isGrande
            ? "col-start-3 row-span-2"
            : posiciones[index];

          return (
            <div
              key={index}
              className={`${clases} relative w-full h-full rounded overflow-hidden group cursor-pointer`}
            >
              <img
                src={cat.imagen}
                alt={cat.nombre}
                className="w-full h-full object-cover rounded transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-">
                <span className="text-white text-lg font-bold bg-black bg-opacity-50 px-3 py-1 rounded transform transition-all duration-300 ease-in-out group-hover:-translate-y-2">
                  {cat.nombre}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
