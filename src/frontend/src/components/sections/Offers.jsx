import VerMasButton from "../buttons/VerMasButton";
import ProductCard from "../cards/ProductCard";

const products = [
  {
    name: "Mochila Seoul - Girly",
    price: "S/420.00",
    image:
      "https://jugueteriazigzag.com/cdn/shop/files/ki4851_ki5eh_1_1024x1024@2x.jpg?v=1701564858",
    oldPrice: "S/350.00",
  },
  {
    name: "Rompecabezas Magnético Mundo ",
    price: "S/325.90",
    image:
      "https://jugueteriazigzag.com/cdn/shop/files/puzzle-monde-magnetique-92-pieces_1024x1024@2x.jpg?v=1682973510",
    oldPrice: "S/215.00",
  },
  {
    name: "Sparkling Lip Treats",
    price: "S/115.00",
    image:
      "https://jugueteriazigzag.com/cdn/shop/files/image-13dd4854a9f340908ccff8ffd6c73078_1024x1024@2x.jpg?v=1700862485",
    oldPrice: "S/80.00",
  },
  {
    name: "Mi Casita Feliz",
    price: "S/760.00",
    image:
      "https://jugueteriazigzag.com/cdn/shop/files/S543F_1024x1024@2x.jpg?v=1683051505",
    oldPrice: "S/540.00",
  },
  {
    name: "Kit para nieve",
    price: "S/135.95",
    image:
      "https://jugueteriazigzag.com/cdn/shop/files/Untitled-1_5deb829e-c19d-42c9-a999-5f4276825938_1024x1024@2x.png?v=1686443486",
    oldPrice: "S/35.00",
  },
  {
    name: "Maletín de Maquillaje para Viajar",
    price: "S/99.00",
    image:
      "http://jugueteriazigzag.com/cdn/shop/products/1_7b7c1515-c94e-407b-a6a8-c38534a1fb19_1024x1024@2x.png?v=1676470843",
    oldPrice: "S/74.00",
  },
  {
    name: "Airbrush Peluche de Dino ",
    price: "S/206.00",
    image:
      "https://jugueteriazigzag.com/cdn/shop/products/2242928_101_3x_f71773ce-25b9-4db4-aaa5-fdba696d6814_1024x1024@2x.jpg?v=1681235184",
    oldPrice: "S/154.00",
  },
];

export default function Offers() {
  return (
    <div className="my-6">
      <h2 className="text-4xl font-bold text-center mb-2 text-primary">
        ¡¡Productos en oferta!!
      </h2>
      <p className="text-center text-2xl text-testSecondary mb-4">
        Ahorra a lo grande en tus productos favoritos
      </p>
      <div className="mt-4">
        <VerMasButton />
      </div>
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
