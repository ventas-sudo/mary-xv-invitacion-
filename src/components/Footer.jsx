import { Heart, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
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
    <footer className="w-full min-h-screen relative flex items-center justify-center bg-gradient-to-b from-purple-900 via-purple-800 to-purple-900 text-white py-12 px-4 overflow-hidden">
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

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0, rotate: 180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Heart className="w-8 h-8 mx-auto mb-4 text-purple-300" />
        </motion.div>
        <motion.p 
          className="text-2xl md:text-3xl font-serif mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          ¡Espero verte ahí!
        </motion.p>
        <motion.p 
          className="text-lg mb-6 text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Será un honor compartir este día tan especial contigo
        </motion.p>
        <motion.div 
          className="flex items-center justify-center gap-3 mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="h-px w-16 bg-purple-400/50"></div>
          <span className="text-xl">Mary</span>
          <div className="h-px w-16 bg-purple-400/50"></div>
        </motion.div>
        <motion.p 
          className="text-sm text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          22 de Noviembre, 2025
        </motion.p>
        
        {/* Botón de administración */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <a
            href="/admin"
            className="inline-flex items-center gap-2 bg-purple-950/50 hover:bg-purple-950/80 text-gray-300 hover:text-white px-4 py-2 rounded-full transition-all border border-purple-500/30"
          >
            <Lock className="w-4 h-4" />
            <span className="text-sm">Administración</span>
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
