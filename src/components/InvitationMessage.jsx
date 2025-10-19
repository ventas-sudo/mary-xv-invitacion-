import { Heart } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function InvitationMessage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

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
    <section ref={ref} className="w-full min-h-screen relative flex items-center justify-center px-4 py-20 bg-gradient-to-b from-purple-900 via-purple-800 to-purple-900 overflow-hidden">
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

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Heart className="w-10 h-10 mx-auto mb-6 text-purple-300" />
          </motion.div>
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Una celebración especial
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Columna de texto */}
          <div className="space-y-6">
            <motion.p 
              className="text-gray-200 text-base md:text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Después de 15 años de sueños, risas y momentos inolvidables, ha llegado el momento de celebrar 
              esta etapa tan especial en mi vida.
            </motion.p>
            <motion.p 
              className="text-gray-200 text-base md:text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Quiero compartir contigo este día mágico lleno de amor, alegría y felicidad. 
              Tu presencia hará que esta noche sea aún más memorable.
            </motion.p>
            <motion.div 
              className="inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 text-purple-300 font-medium text-lg md:text-xl">
                <div className="h-px w-12 bg-purple-400"></div>
                <span>Con cariño, Mary</span>
                <div className="h-px w-12 bg-purple-400"></div>
              </div>
            </motion.div>
          </div>

          {/* Columna de imagen */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl blur-xl opacity-30"></div>
              <img 
                src="https://sensible-spoonbill-485.convex.cloud/api/storage/96098f9a-3858-45bd-8a2a-231da2efba08"
                alt="Mary"
                className="relative w-full h-auto rounded-2xl shadow-2xl border-2 border-purple-400/30"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
