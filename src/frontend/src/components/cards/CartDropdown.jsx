import { useCart } from "./CartContext";
import { HiShoppingCart, HiX } from "react-icons/hi";

export default function CartDropdown() {
  const { cartItems, removeFromCart, toggleCart, isOpen } = useCart();

  // Calcular total
  const total = cartItems.reduce(
    (sum, item) => sum + parseFloat(item.price) * item.quantity,
    0
  );

  return (
    <div className="relative">
      {/* Botón del carrito */}
      <button
        onClick={toggleCart}
        className="relative p-2 border rounded hover:border-green-400 transition"
      >
        <HiShoppingCart className="w-6 h-6 text-green-600" />
        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {cartItems.length}
          </span>
        )}
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white shadow-xl rounded-lg p-4 z-50">
          <h3 className="font-bold text-lg text-gray-800 mb-4">Carrito</h3>

          {cartItems.length === 0 ? (
            <p className="text-gray-500 text-center">Tu carrito está vacío</p>
          ) : (
            <div className="flex flex-col gap-3 max-h-96 overflow-y-auto">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 border-b pb-2"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 text-sm">
                      {item.name}
                    </h4>
                    <p className="text-gray-600 text-xs">
                      S/{parseFloat(item.price).toFixed(2)} x {item.quantity}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <HiX className="w-5 h-5" />
                  </button>
                </div>
              ))}

              <div className="mt-3 border-t pt-3">
                <p className="font-bold text-gray-800 flex justify-between">
                  Total:
                  <span>S/{total.toFixed(2)}</span>
                </p>
                <button className="w-full mt-2 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition">
                  Pagar
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
