export default function AgeRanges() {
  const edades = [
    { rango: "0 - 2 años", color: "#FDE68A", forma: "circle" },
    { rango: "3 - 5 años", color: "#A7F3D0", forma: "square" },
    { rango: "6 - 8 años", color: "#BFDBFE", forma: "triangle" },
    { rango: "9 - 12 años", color: "#FCA5A5", forma: "circle" },
    { rango: "13 - 15 años", color: "#C4B5FD", forma: "square" },
    { rango: "16+ años", color: "#FDBA74", forma: "triangle" },
  ];

  return (
    <div className="my-6">
      <h2 className="text-4xl font-bold text-center mt-12 mb-2 text-primary">
        ¡¡Clasificados por edad!!
      </h2>
      <p className="text-center text-2xl text-testSecondary mb-4">
        Diseñado para cada etapa de tu vida
      </p>

      <section className="flex justify-center items-center gap-12 py-16 bg-[#F1F5FC] flex-wrap">
        {edades.map((edad, i) => (
          <div
            key={i}
            className={`relative flex items-center justify-center text-lg font-semibold text-gray-700 
          w-36 h-36 transition-transform duration-300 hover:scale-110 cursor-pointer
          ${edad.forma === "circle" ? "rounded-full" : ""} 
          ${edad.forma === "square" ? "rounded-2xl" : ""}
          ${edad.forma === "triangle" ? "clip-triangle text-white" : ""}`}
            style={{ backgroundColor: edad.color }}
          >
            {edad.rango}
          </div>
        ))}
      </section>
    </div>
  );
}
