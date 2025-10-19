import { Calendar, Clock, MapPin, Church } from 'lucide-react';
import { motion } from 'framer-motion';

export default function EventDetails() {
  // Generar estrellas aleatorias
  const stars = [...Array(80)].map((_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 3,
    duration: Math.random() * 2 + 2
  }));

  const events = [
    {
      icon: Church,
      title: "Ceremonia Religiosa",
      time: "4:00 PM",
      location: "Parroquia Maria Reina Del Rosario",
      address: "Dirección: Santos Degollado No. 1400, Col. El Rosario, C.P. 44898, Guadalajara, Jalisco, México",
      mapLink: "https://share.google/QUYHsgb8C0lAGda2p"
    },
    {
      icon: MapPin,
      title: "Recepción",
      time: "7:00 PM - 1:00 AM",
      mapLink: "https://maps.app.goo.gl/jRYHNKNook9BXsjW9",
      schedule: [
        "7:00 PM - 8:00 PM: Coctel de bienvenida",
        "8:00 PM - 9:00 PM: Bailes",
        "9:00 PM - 10:00 PM: Cena",
        "10:00 PM: ¡Se abre la pista!",
        "1:00 AM (día 23): Cena de desvelados"
      ]
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
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Calendar className="w-10 h-10 mx-auto mb-4 text-purple-300" />
          </motion.div>
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Información del Evento
          </motion.h2>
          <motion.p 
            className="text-gray-200 text-base md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Sábado 22 de Noviembre, 2025
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="bg-purple-950/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow border-2 border-purple-500/30"
              initial={{ opacity: 0, x: index === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <event.icon className="w-10 h-10 md:w-12 md:h-12 text-purple-300 mb-4" />
              <h3 className="text-xl md:text-2xl font-serif text-white mb-3">{event.title}</h3>
              <div className="flex items-center gap-2 mb-4 text-gray-200">
                <Clock className="w-5 h-5 text-purple-300" />
                <span className="text-base md:text-lg font-medium">{event.time}</span>
              </div>
              {event.location && (
                <p className="text-white font-medium mb-1">{event.location}</p>
              )}
              {event.address && (
                <p className="text-gray-300 text-sm md:text-base mb-4">{event.address}</p>
              )}
              
              {event.schedule && (
                <div className="mt-4 pt-4 border-t border-purple-500/30">
                  <p className="text-purple-300 font-medium mb-2 text-sm">Itinerario:</p>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    {event.schedule.map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              <a
                href={event.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block w-full bg-gradient-to-r from-purple-400 to-purple-500 hover:from-purple-500 hover:to-purple-600 text-white py-3 px-6 rounded-full transition-colors font-medium shadow-md text-center"
              >
                Ver en mapa
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
