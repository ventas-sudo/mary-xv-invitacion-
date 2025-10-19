import { Crown, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function InvitationPopup({ onAccept }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="relative max-w-md w-full bg-gradient-to-b from-purple-900 via-purple-800 to-purple-900 rounded-3xl p-8 border-4 border-yellow-400 shadow-2xl"
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          {/* Decoración de esquinas */}
          <div className="absolute top-0 left-0 w-16 h-16">
            <div className="absolute top-2 left-2 w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="absolute top-2 left-6 w-2 h-2 bg-yellow-300 rounded-full"></div>
            <div className="absolute top-6 left-2 w-2 h-2 bg-yellow-300 rounded-full"></div>
          </div>
          <div className="absolute top-0 right-0 w-16 h-16">
            <div className="absolute top-2 right-2 w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="absolute top-2 right-6 w-2 h-2 bg-yellow-300 rounded-full"></div>
            <div className="absolute top-6 right-2 w-2 h-2 bg-yellow-300 rounded-full"></div>
          </div>
          <div className="absolute bottom-0 left-0 w-16 h-16">
            <div className="absolute bottom-2 left-2 w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="absolute bottom-2 left-6 w-2 h-2 bg-yellow-300 rounded-full"></div>
            <div className="absolute bottom-6 left-2 w-2 h-2 bg-yellow-300 rounded-full"></div>
          </div>
          <div className="absolute bottom-0 right-0 w-16 h-16">
            <div className="absolute bottom-2 right-2 w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="absolute bottom-2 right-6 w-2 h-2 bg-yellow-300 rounded-full"></div>
            <div className="absolute bottom-6 right-2 w-2 h-2 bg-yellow-300 rounded-full"></div>
          </div>

          {/* Logo de Mary */}
          <motion.div
            className="flex justify-center mb-4"
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-32 h-32">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full blur-xl opacity-40 animate-pulse"></div>
              <img 
                src="https://sensible-spoonbill-485.convex.cloud/api/storage/653f5d3e-4769-4b49-829d-206bdcc3c644" 
                alt="Logo Mary XV" 
                className="relative w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Corona animada */}
          <motion.div
            className="flex justify-center mb-6"
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Crown className="w-16 h-16 text-yellow-400" />
          </motion.div>

          {/* Estrellas decorativas */}
          <div className="absolute top-28 left-8">
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Sparkles className="w-6 h-6 text-yellow-300" />
            </motion.div>
          </div>
          <div className="absolute top-28 right-8">
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, -180, -360]
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
            >
              <Sparkles className="w-6 h-6 text-yellow-300" />
            </motion.div>
          </div>

          {/* Contenido */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl font-serif text-yellow-400 mb-4">
              ¡Estás invitado a mis XV!
            </h1>
            <p className="text-xl text-white mb-8 font-medium">
              ¿Me acompañas?
            </p>

            <motion.button
              onClick={onAccept}
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-purple-900 font-bold text-lg py-4 px-12 rounded-full shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Aceptar
            </motion.button>
          </motion.div>

          {/* Brillo de fondo */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent rounded-3xl"
            animate={{
              x: [-200, 400],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
