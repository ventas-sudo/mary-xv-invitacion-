import { Camera } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PhotoGallery() {
  // Generar estrellas aleatorias
  const stars = [...Array(80)].map((_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 3,
    duration: Math.random() * 2 + 2
  }));

  const photos = [
    { id: 1, url: 'https://sensible-spoonbill-485.convex.cloud/api/storage/e30bc29a-c6b6-4248-b5b1-7d975709a125' },
    { id: 2, url: 'https://sensible-spoonbill-485.convex.cloud/api/storage/09bc29e8-c8de-4774-925d-27dfb128a63e' },
    { id: 3, url: 'https://sensible-spoonbill-485.convex.cloud/api/storage/9adfd909-a653-464d-a874-fdbfdb1e354e' },
    { id: 4, url: 'https://sensible-spoonbill-485.convex.cloud/api/storage/33aef852-b631-40f3-bc60-d78e824c78ba' },
    { id: 5, url: 'https://sensible-spoonbill-485.convex.cloud/api/storage/a2512be2-4b2a-41eb-9d31-61f1ade42a4c' },
    { id: 6, url: 'https://sensible-spoonbill-485.convex.cloud/api/storage/dc0fc70f-de33-4ea2-bd11-f0c0cdba365e' }
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
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0, rotate: -90 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Camera className="w-10 h-10 mx-auto mb-4 text-purple-300" />
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-serif text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Recuerdos
          </motion.h2>
          <motion.p 
            className="text-gray-200 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Momentos especiales que han marcado mi vida
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              className="aspect-[3/4] rounded-2xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer overflow-hidden border-2 border-purple-500/50"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <img 
                src={photo.url} 
                alt={`Foto ${photo.id}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-200 mb-4">
            📸 No olvides compartir tus fotos usando
          </p>
          <motion.div 
            className="inline-block bg-gradient-to-r from-purple-400 to-purple-500 px-8 py-4 rounded-full shadow-lg"
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-2xl font-medium text-white">#MaryXV</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
