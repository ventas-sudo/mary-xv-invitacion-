import { motion } from 'framer-motion';

export default function Divider() {
  return (
    <div className="w-full py-8 bg-gradient-to-b from-purple-900 via-purple-800 to-purple-900 relative overflow-hidden">
      {/* Línea lila central */}
      <div className="relative max-w-4xl mx-auto px-4">
        <motion.div 
          className="h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: true }}
        />
        
        {/* Ornamento central */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-900 px-6">
          <motion.div
            initial={{ scale: 0, rotate: 180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-purple-400 text-2xl"
          >
            ✦
          </motion.div>
        </div>
      </div>
    </div>
  );
}
