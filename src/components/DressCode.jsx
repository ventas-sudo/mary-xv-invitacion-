import { Shirt } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DressCode() {
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
            <Shirt className="w-10 h-10 mx-auto mb-4 text-purple-300" />
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-serif text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Código de Vestimenta
          </motion.h2>
        </div>

        <motion.div 
          className="bg-purple-950/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border-2 border-purple-500/30"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-2xl md:text-3xl font-serif text-center text-white mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Formal / Etiqueta
          </motion.p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {[
              { emoji: "👗", text: "Vestido largo o cocktail" },
              { emoji: "🤵", text: "Traje formal" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-purple-400/30 rounded-full flex items-center justify-center">
                  <span className="text-3xl">{item.emoji}</span>
                </div>
                <p className="text-gray-200 font-medium">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="bg-purple-950/80 rounded-xl p-6 text-center border-2 border-purple-400/20 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-200 mb-3 font-medium">Colores reservados</p>
            <div className="flex items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-purple-300 rounded-full border-2 border-gray-300"></div>
                <span className="text-gray-200">Lila</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-yellow-400 rounded-full border-2 border-gray-300"></div>
                <span className="text-gray-200">Dorado</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-red-900/30 rounded-xl p-6 text-center border-2 border-red-400/30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-red-200 font-bold mb-2 text-lg">🚫 NO NIÑOS</p>
            <p className="text-gray-200">
              Queremos que disfrutes y bailes sin parar, por ello la invitación es solo para adultos
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
