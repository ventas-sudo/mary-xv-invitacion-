import { Gift } from 'lucide-react';
import { motion } from 'framer-motion';

export default function GiftRegistry() {
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
            <Gift className="w-10 h-10 mx-auto mb-4 text-purple-300" />
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-serif text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Mesa de Regalos
          </motion.h2>
          <motion.p 
            className="text-gray-200 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Tu presencia es mi mejor regalo, pero si deseas obsequiarme algo...
          </motion.p>
        </div>

        <div className="max-w-md mx-auto mb-8">
          <motion.div
            className="bg-purple-950/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-purple-500/30"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            <h3 className="text-2xl font-bold text-white mb-3">Liverpool</h3>
            <p className="text-gray-200 mb-4">Evento: 51743215</p>
            <a 
              href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51743215"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-600 text-white py-3 px-6 rounded-full font-medium hover:shadow-lg transition-all text-center"
            >
              Ver mesa de regalos
            </a>
          </motion.div>
        </div>

        <motion.div 
          className="bg-purple-950/50 backdrop-blur-sm rounded-2xl p-8 text-center border-2 border-purple-500/30"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-200 text-lg mb-4">
            💝 También puedes hacer un regalo en efectivo
          </p>
          <p className="text-gray-300">
            Habrá un buzón especial en la recepción
          </p>
        </motion.div>
      </div>
    </section>
  );
}
