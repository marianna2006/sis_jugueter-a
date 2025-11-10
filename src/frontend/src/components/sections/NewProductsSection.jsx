import VerMasButton from "../buttons/VerMasButton";
import ProductCard from "../cards/ProductCard";

const products = [
  {
    name: "Juego de cartas Distraction",
    price: "S/69.00",
    image:
      "https://caramba.pe/cdn/shop/files/TF76323_Juego_de_cartas_Distraction_1_75b96109-c221-496a-b9b5-5f06b699b2ec.png?v=1761760824&width=1346",
  },
  {
    name: "Juego memoria oso teddy 24 piezas",
    price: "S/75.00",
    image:
      "https://caramba.pe/cdn/shop/files/RV-22376_Juego_memoria_oso_teddy_24_piezas_1_63fd6eb1-d9e9-4802-8237-c2a31f12c71e.png?v=1761760457&width=1346",
  },
  {
    name: "Gravitrax Go mini circuito modelo Flexible 37 piezas",
    price: "S/99.00",
    image:
      "https://caramba.pe/cdn/shop/files/RV-23705_Gravitrax_Go_mini_circuito_modelo_Flexible_37_piezas_1_16ecc8c3-9e0b-4607-ab7c-510f779130be.png?v=1761760822&width=1346",
  },
  {
    name: "Juego de cartas Pictoo dinosaurios",
    price: "S/55.00",
    image:
      "https://caramba.pe/cdn/shop/files/RV-23479_Juego_de_cartas_Pictoo_dinosaurios_1_b996c326-dc5b-4600-aef1-dd50c99d0ffe.png?v=1761760438",
  },
  {
    name: "Juego de mesa Laberinto Pokémon connect travel size",
    price: "S/55.00",
    image:
      "https://caramba.pe/cdn/shop/files/RV-22579_Juego_de_mesa_Laberinto_Pokemon_connect_travel_size_1_bce6e158-8a20-4b0b-ad09-7051cbcc9d2d.png?v=1761760444&width=1346",
  },
  {
    name: "Juego memoria feliz cumpleaños 48 piezas",
    price: "S/45.00",
    image:
      "https://caramba.pe/cdn/shop/files/RV-22399_Juego_memoria_feliz_cumpleanos_48_piezas_1_a2fc16cf-9746-4e40-a768-71feaf603a4a.png?v=1761760455&width=1346",
  },
  {
    name: "Rompecabezas 1000 piezas modelo batalla Pokémon",
    price: "S/79.00",
    image:
      "https://caramba.pe/cdn/shop/files/RV-12000628_Rompecabezas_1000_piezas_modelo_batalla_Pokemon_1_64a6b37e-1af7-4ead-a100-0339acf5bdfd.png?v=1761760463&width=1346",
  },
];

export default function NewProductSection() {
    return(
        <div className="my-6">
              <h2 className="text-4xl font-bold text-center mb-2 text-primary">
                ¡¡Novedades!!
              </h2>
              <p className="text-center text-2xl text-testSecondary mb-4">
                Mantente al día con nuestro últimos lanzamientos
              </p>
              <div className="overflow-x-auto">
                <div className="flex gap-4 p-4">
                  {products.map((p, index) => (
                    <div key={index} className="flex-shrink-0">
                      <ProductCard {...p} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
    );
}