import { Star } from "lucide-react"; // iconos de estrellas

export default function Reviews() {
  const reseñas = [
    {
      nombre: "María López",
      producto:
        "https://caramba.pe/cdn/shop/files/BABI7218.jpg?v=1760481039&width=1346",
      texto:
        "Mi hija está encantada con esta muñeca, tiene buena calidad y detalles muy bonitos.",
      estrellas: 5,
    },
    {
      nombre: "Carlos Pérez",
      producto: "https://caramba.pe/cdn/shop/files/Y34G2_Yvolution_triciclo_y_bicicleta_de_balance_Velo_Trike_2_en_1_color_verde_2_a_5_anos_1_a69a4d1d-4842-4e09-913f-3c29ecb3bb1c.png?v=1758129588&width=1346",
      texto:
        "El triciclo es resistente y fácil de armar. A mi hijo le encanta pasear con él.",
      estrellas: 4,
    },
    {
      nombre: "Lucía Torres",
      producto: "https://caramba.pe/cdn/shop/files/G931692_0fb9c283-2f6b-49a2-9520-083f8ef26b08.png?v=1759188355&width=1346",
      texto:
        "Excelente set de construcción, ideal para fomentar la creatividad.",
      estrellas: 5,
    },
  ];

  return (
    <section className="py-16 px-8 bg-gradient-to-b from-[#F1F5FC] to-white">
      <h2 className="text-4xl font-bold text-primary mb-10 text-center">
        Lo que dicen nuestros clientes 🧸
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {reseñas.map((r, i) => (
          <div
            key={i}
            className="relative bg-white rounded-2xl shadow-lg w-80 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Imagen del producto */}
            <div className="flex justify-center mb-4">
              <img
                src={r.producto}
                alt={r.nombre}
                className="w-28 h-28 object-cover rounded-xl shadow-md"
              />
            </div>

            {/* Estrellas */}
            <div className="flex justify-center mb-3">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  size={20}
                  className={`${
                    index < r.estrellas
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>

            {/* Texto */}
            <p className="text-gray-600 italic text-sm mb-4 leading-relaxed">
              "{r.texto}"
            </p>

            {/* Línea separadora */}
            <div className="w-12 h-[2px] bg-pink-300 mx-auto mb-3"></div>

            {/* Nombre */}
            <h4 className="text-base font-semibold text-gray-800">
              {r.nombre}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}
