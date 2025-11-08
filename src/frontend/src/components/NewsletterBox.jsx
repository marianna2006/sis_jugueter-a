export default function NewsletterBox() {
  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-8 max-w-xl mx-auto text-center">
      <h2 className="text-2xl font-bold text-green-700 mb-4">
        Suscríbete a nuestro boletín
      </h2>
      <p className="text-gray-600 mb-6">
        Recibe novedades, ofertas y lanzamientos exclusivos directamente en tu correo.
      </p>

      <div className="flex w-full max-w-md">
        <input
          type="email"
          placeholder="Ingresa tu correo"
          className="flex-grow px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <button className="px-6 py-2 bg-green-600 text-white font-medium rounded-r-full hover:bg-green-700 transition-colors">
          Suscribirme
        </button>
      </div>
    </div>
  );
}
