export default function Blogs() {
  const posts = [
    {
      title: "Beneficios del juego en la infancia",
      image: "https://alpina.com/media/mageplaza/blog/post/n/i/ni_a-jugando-sola.jpg",
      excerpt: "Jugar es una parte esencial del desarrollo infantil, fomentando la creatividad, la imaginación y las habilidades sociales.",
      date: "8 Noviembre 2025",
    },
    {
      title: "Cómo elegir el juguete ideal según la edad",
      image: "https://images.ecestaticos.com/MVkVig2wSW8ae-oQd7cIgGSqKiA=/0x0:640x361/1440x810/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F8d9%2F831%2F7de%2F8d98317de37d017d629cfb7228f85708.jpg",
      excerpt: "Cada etapa del crecimiento necesita diferentes estímulos. Aquí te contamos cómo escoger el mejor juguete según la edad.",
      date: "5 Noviembre 2025",
    },
    {
      title: "Juguetes sostenibles: una elección responsable",
      image: "https://fotografias.larazon.es/clipping/cmsimages02/2019/08/08/595D6166-9858-408A-BECC-1A8D230218A1/98.jpg?crop=500,281,x0,y109&width=1900&height=1069&optimize=low&format=webply",
      excerpt: "Descubre cómo los juguetes ecológicos ayudan al medio ambiente y fomentan la conciencia ambiental en los niños.",
      date: "2 Noviembre 2025",
    },
  ];

  return (
    <section className="bg-[#F9FAFB] py-16 px-10">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-[#007C4E] mb-2">📰 Nuestro Blog</h2>
        <p className="text-lg text-gray-700">
          Artículos, consejos y novedades para acompañarte en el crecimiento de los más pequeños.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-all"
          >
            <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#007C4E] mb-2">
                {post.title}
              </h3>
              <p className="text-sm text-gray-500 mb-2">{post.date}</p>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <button className="text-blue-600 font-medium hover:underline">
                Leer más →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
