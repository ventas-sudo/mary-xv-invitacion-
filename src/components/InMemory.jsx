import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function InMemory() {
  // Generar estrellas aleatorias
  const stars = [...Array(80)].map((_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 3,
    duration: Math.random() * 2 + 2
  }));

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

      <div className="relative z-10 max-w-4xl mx-auto w-full">
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
            En Memoria
          </motion.h2>
        </div>

        <motion.div
          className="bg-purple-950/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border-2 border-purple-500/30 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-8 overflow-hidden rounded-xl">
            <motion.img 
              src="https://sensible-spoonbill-485.convex.cloud/api/storage/72192cd9-794c-44fd-9328-afee71ce1d9e" 
              alt="Mi tito Chemo"
              className="w-full h-auto object-contain"
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />
          </div>

          <motion.p 
            className="text-gray-200 text-center text-lg md:text-xl leading-relaxed italic"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            En Memoria de Mi tito Chemo que yo sé que desde el cielo nos va a acompañar
          </motion.p>

          <motion.div
            className="mt-8 flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 text-purple-300">
              <div className="h-px w-12 bg-purple-400"></div>
              <Heart className="w-6 h-6" />
              <div className="h-px w-12 bg-purple-400"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
