import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Generar estrellas aleatorias
  const stars = [...Array(100)].map((_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 3,
    duration: Math.random() * 2 + 2
  }));

  return (
    <section ref={ref} className="w-full h-screen relative flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img 
          src="https://sensible-spoonbill-485.convex.cloud/api/storage/e30bc29a-c6b6-4248-b5b1-7d975709a125"
          alt="Mary XV"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/80 via-purple-800/70 to-purple-900/80"></div>
      </div>

      {/* Estrellas animadas */}
      <motion.div className="absolute inset-0" style={{ y }}>
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
      </motion.div>

      {/* Decorative glow effects */}
      <motion.div className="absolute inset-0" style={{ y }}>
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
      </motion.div>

      <motion.div 
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Logo principal con efecto de brillo */}
          <motion.div 
            className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto mb-8"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full blur-2xl opacity-40 animate-pulse"></div>
            <img 
              src="https://sensible-spoonbill-485.convex.cloud/api/storage/653f5d3e-4769-4b49-829d-206bdcc3c644" 
              alt="Logo Mary XV" 
              className="relative w-full h-full object-contain drop-shadow-2xl"
            />
          </motion.div>

          {/* Texto animado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <p className="text-purple-300 font-semibold mb-3 text-lg md:text-xl tracking-wider uppercase">
              Mis XV Años
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <motion.div 
              className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-purple-400 to-purple-400"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ delay: 1, duration: 0.8 }}
            />
            <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-white">
              22 de Noviembre, 2025
            </p>
            <motion.div 
              className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent via-purple-400 to-purple-400"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ delay: 1, duration: 0.8 }}
            />
          </motion.div>

          <motion.p 
            className="text-gray-200 text-base md:text-lg lg:text-xl max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            Tengo el honor de invitarte a celebrar conmigo este día tan especial
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}
