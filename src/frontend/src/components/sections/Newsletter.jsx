export default function Newsletter() {
  return (
    <section className="bg-[#F1F5FC] py-16 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">
          ¡Suscríbete a nuestro boletín! 📬
        </h2>
        <p className="text-gray-600 mb-8">
          Recibe las últimas ofertas, nuevos productos y noticias directamente en tu correo.
        </p>

        <form className="flex flex-col sm:flex-row justify-center gap-3">
          <input
            type="email"
            placeholder="Ingresa tu correo electrónico"
            className="w-full sm:w-96 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-300"
            required
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
          >
            Suscribirme
          </button>
        </form>
      </div>
    </section>
  );
}
