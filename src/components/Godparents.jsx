import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Godparents() {
  // Generar estrellas aleatorias
  const stars = [...Array(80)].map((_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 3,
    duration: Math.random() * 2 + 2
  }));

  const godparents = [
    {
      image: "https://sensible-spoonbill-485.convex.cloud/api/storage/e5d0f159-c676-40d0-a59a-a418102fe81a",
      names: ["Andrés Guerrero", "Michel Salas"]
    },
    {
      image: "https://sensible-spoonbill-485.convex.cloud/api/storage/2d32ced2-f07c-4ab5-841b-13781769e81f",
      names: ["Braham Quezada", "Judit Guerrero"]
    }
  ];

  return (
    <section className="w-full min-h-screen relative flex items-center justify-center py-20 px-4 bg-gradient-to-b from-purple-900 via-purple-800 to-purple-900 overflow-hidden">
      {/* Estrellas animadas */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute bg-purple-200 rounded-full"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.3, 1]
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay
            }}
          />
        ))}
      </div>

      {/* Efectos de brillo */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-purple-400 rounded-full blur-3xl opacity-20"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0, rotate: 180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Heart className="w-10 h-10 mx-auto mb-4 text-purple-300" />
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-serif text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Mis Padrinos
          </motion.h2>
          <motion.p 
            className="text-gray-200 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Personas especiales que me acompañan en este día
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {godparents.map((godparent, index) => (
            <motion.div
              key={index}
              className="bg-purple-950/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-purple-500/30"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="mb-6 overflow-hidden rounded-xl">
                <img 
                  src={godparent.image} 
                  alt={`Padrinos ${godparent.names.join(' y ')}`}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="space-y-2">
                {godparent.names.map((name, idx) => (
                  <p key={idx} className="text-white text-center text-lg font-medium">
                    {name}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-200 text-lg">
            Gracias por ser parte de este momento tan especial 💜
          </p>
        </motion.div>
      </div>
    </section>
  );
}
