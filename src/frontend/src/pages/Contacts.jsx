import BreadcrumbNav from "../components/BreadcrumbNav";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

function Contacts() {
  return (
    <section className="bg-[#F1F5FC] py-5 px-10">
      <div className="mb-6">
        <BreadcrumbNav paths={[{ label: "Contactos" }]} />
      </div>
      {/* Encabezado */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#007C4E] mb-2">
          📞 ¡Contáctanos!
        </h2>
        <p className="text-lg text-gray-700">
          ¿Tienes dudas, sugerencias o comentarios? Nos encantaría escucharte.
        </p>
      </div>

      {/* Contenedor principal */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto items-start">
        {/* Formulario */}
        <form className="bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Envíanos un mensaje
          </h3>

          <label className="block mb-2 text-lg font-medium">Nombre</label>
          <input
            type="text"
            className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
            placeholder="Tu nombre completo"
          />

          <label className="block mb-2 text-lg font-medium">
            Correo electrónico
          </label>
          <input
            type="email"
            className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
            placeholder="ejemplo@email.com"
          />

          <label className="block mb-2 text-lg font-medium">Mensaje</label>
          <textarea
            className="w-full mb-4 p-3 border border-gray-300 rounded-lg h-32 focus:ring-2 focus:ring-green-400 focus:outline-none"
            placeholder="Escribe tu mensaje aquí..."
          ></textarea>

          <button
            type="submit"
            className="w-full bg-[#007C4E] text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-all"
          >
            Enviar mensaje
          </button>
        </form>

        {/* Información de contacto */}
        <div className="flex flex-col gap-6 bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Información de contacto
          </h3>

          <div className="flex items-center gap-4 text-gray-700">
            <a href="#" className="flex items-center gap-2 hover:underline">
              <FaEnvelope className="text-green-600 text-xl" />
              <p>info@toyshouse.pe</p>
            </a>
          </div>
          <div className="flex items-center gap-4 text-gray-700">
            <a href="#" className="flex items-center gap-2 hover:underline">
              <FaPhoneAlt className="text-green-600 text-xl" />
              <p>+51 936 585 634</p>
            </a>
          </div>

          <div className="flex items-center gap-4 text-gray-700">
            <FaMapMarkerAlt className="text-green-600 text-xl" />
            <p>Saenz Peña 127, Pucallpa, Perú</p>
          </div>

          <div className="flex items-center gap-4 text-gray-700">
            <FaClock className="text-green-600 text-xl" />
            <div>
              <p>Lunes a Viernes: 9:00 a.m. - 6:00 p.m.</p>
              <p>Sábado: 10:00 a.m. - 6:00 p.m.</p>
            </div>
          </div>

          {/* Mapa */}
          <div className="mt-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3638449.500243103!2d-78.42939338942283!3d-10.230552661162683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a3bdd6fbb7e2d1%3A0xd52239930f80cc82!2sLa%20Casa%20del%20Ni%C3%B1o%20Pucallpa!5e1!3m2!1ses-419!2spe!4v1762636448872!5m2!1ses-419!2spe"
              width="100%"
              height="250"
              className="rounded-lg border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
