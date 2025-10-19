import { Mail, User, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function RSVP() {
  // Generar estrellas aleatorias
  const stars = [...Array(80)].map((_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 3,
    duration: Math.random() * 2 + 2
  }));

  const [formData, setFormData] = useState({
    name: '',
    attendance: 'yes',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://asyucsieemrzkprrjmwx.supabase.co/rest/v1/confirmations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzeXVjc2llZW1yemtwcnJqbXd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA2NDU1MjksImV4cCI6MjA3NjIyMTUyOX0.ql_7GYNA2cZShuBM-2iXnUKaL3pt6v_LI33MpHAlHJc',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzeXVjc2llZW1yemtwcnJqbXd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA2NDU1MjksImV4cCI6MjA3NjIyMTUyOX0.ql_7GYNA2cZShuBM-2iXnUKaL3pt6v_LI33MpHAlHJc',
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify({
          name: formData.name,
          guests: 1,
          attendance: formData.attendance,
          message: formData.message || null
        })
      });

      if (!response.ok) throw new Error('Error al enviar');

      alert('¡Gracias por confirmar tu asistencia! Tu confirmación ha sido registrada correctamente.');
      
      // Resetear formulario
      setFormData({
        name: '',
        attendance: 'yes',
        message: ''
      });
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error al enviar tu confirmación. Por favor intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

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

      <div className="relative z-10 max-w-2xl mx-auto w-full">
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Mail className="w-10 h-10 mx-auto mb-4 text-purple-300" />
          </motion.div>
          <motion.h2 
            className="text-3xl md:text-4xl font-serif text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Confirma tu Asistencia
          </motion.h2>
          <motion.p 
            className="text-gray-200 text-base"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Por favor confirma antes del 1 de Noviembre
          </motion.p>
        </div>

        <motion.form 
          onSubmit={handleSubmit} 
          className="bg-purple-950/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border-2 border-purple-500/30"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-4">
            <label className="flex items-center gap-2 text-gray-200 font-medium mb-2">
              <User className="w-5 h-5 text-purple-300" />
              Nombre completo
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-3 bg-purple-950/80 border-2 border-purple-500/30 text-white rounded-lg focus:border-purple-400 focus:outline-none transition-colors placeholder-gray-400"
              placeholder="Tu nombre"
            />
          </div>

          <div className="mb-4">
            <label className="text-gray-200 font-medium mb-3 block">
              ¿Confirmas tu asistencia?
            </label>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setFormData({...formData, attendance: 'yes'})}
                className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all text-sm md:text-base ${
                  formData.attendance === 'yes'
                    ? 'bg-gradient-to-r from-purple-400 to-purple-500 text-white shadow-lg'
                    : 'bg-purple-950/80 text-gray-300 hover:bg-purple-950 border-2 border-purple-500/30'
                }`}
              >
                Sí, asistiré
              </button>
              <button
                type="button"
                onClick={() => setFormData({...formData, attendance: 'no'})}
                className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all text-sm md:text-base ${
                  formData.attendance === 'no'
                    ? 'bg-gray-600 text-white shadow-lg'
                    : 'bg-purple-950/80 text-gray-300 hover:bg-purple-950 border-2 border-purple-500/30'
                }`}
              >
                No podré asistir
              </button>
            </div>
          </div>

          <div className="mb-4">
            <label className="flex items-center gap-2 text-gray-200 font-medium mb-2">
              <MessageSquare className="w-5 h-5 text-purple-300" />
              Mensaje (opcional)
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows="3"
              className="w-full px-4 py-3 bg-purple-950/80 border-2 border-purple-500/30 text-white rounded-lg focus:border-purple-400 focus:outline-none transition-colors resize-none placeholder-gray-400"
              placeholder="Déjame un mensaje especial..."
            />
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-purple-400 to-purple-500 hover:from-purple-500 hover:to-purple-600 text-white py-3 md:py-4 px-8 rounded-full font-medium text-base md:text-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar confirmación'}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
