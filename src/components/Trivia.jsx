import { Brain, Check, X } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Trivia() {
  // Generar estrellas aleatorias
  const stars = [...Array(80)].map((_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 3,
    duration: Math.random() * 2 + 2
  }));

  const questions = [
    {
      question: "¿Cuál es el color favorito de Mary?",
      options: ["Rojo", "Rosa", "Negro"],
      correct: 1
    },
    {
      question: "¿Cuál es la serie favorita de Mary?",
      options: ["Stranger Things", "Atrapada en el medio", "Alexa y Katie"],
      correct: 0
    },
    {
      question: "¿Qué disciplina practica Mary desde los 4 años?",
      options: ["Gimnasia", "Jazz", "Ballet"],
      correct: 2
    },
    {
      question: "¿Cuál es el grupo favorito de Mary?",
      options: ["Queen", "Banda el Recodo", "Latin Mafia"],
      correct: 2
    },
    {
      question: "¿Cuál es la comida favorita de Mary?",
      options: ["Pizza", "Sushi", "Niguirumis"],
      correct: 2
    }
  ];

  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionIndex, answerIndex) => {
    if (!showResults) {
      setAnswers({ ...answers, [questionIndex]: answerIndex });
    }
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.correct) {
        correct++;
      }
    });
    return correct;
  };

  const handleShowResults = () => {
    if (Object.keys(answers).length === questions.length) {
      setShowResults(true);
    } else {
      alert('Por favor responde todas las preguntas');
    }
  };

  const score = showResults ? calculateScore() : 0;

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
            <Brain className="w-10 h-10 mx-auto mb-4 text-purple-300" />
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-serif text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Trivia
          </motion.h2>
          <motion.p 
            className="text-gray-200 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            ¿Qué tanto conoces a Mary?
          </motion.p>
        </div>

        <div className="space-y-6 mb-8">
          {questions.map((q, qIndex) => (
            <motion.div
              key={qIndex}
              className="bg-purple-950/50 backdrop-blur-sm rounded-2xl p-6 border-2 border-purple-500/30"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: qIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white text-lg md:text-xl font-medium mb-4">
                {qIndex + 1}. {q.question}
              </h3>
              <div className="space-y-3">
                {q.options.map((option, oIndex) => {
                  const isSelected = answers[qIndex] === oIndex;
                  const isCorrect = q.correct === oIndex;
                  const showCorrectness = showResults && isSelected;
                  
                  return (
                    <button
                      key={oIndex}
                      onClick={() => handleAnswer(qIndex, oIndex)}
                      disabled={showResults}
                      className={`w-full text-left p-4 rounded-lg transition-all flex items-center justify-between ${
                        showResults && isCorrect
                          ? 'bg-green-500/30 border-2 border-green-400'
                          : showCorrectness && !isCorrect
                          ? 'bg-red-500/30 border-2 border-red-400'
                          : isSelected
                          ? 'bg-purple-400/30 border-2 border-purple-400'
                          : 'bg-purple-950/50 border-2 border-purple-500/20 hover:border-purple-400/50'
                      }`}
                    >
                      <span className="text-gray-200">
                        {String.fromCharCode(97 + oIndex)}) {option}
                      </span>
                      {showResults && isCorrect && (
                        <Check className="w-5 h-5 text-green-400" />
                      )}
                      {showCorrectness && !isCorrect && (
                        <X className="w-5 h-5 text-red-400" />
                      )}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {!showResults ? (
          <motion.button
            onClick={handleShowResults}
            className="w-full bg-gradient-to-r from-purple-400 to-purple-500 hover:from-purple-500 hover:to-purple-600 text-white py-4 px-8 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver resultados
          </motion.button>
        ) : (
          <motion.div
            className="bg-purple-950/50 backdrop-blur-sm rounded-2xl p-8 text-center border-2 border-purple-500/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-serif text-white mb-4">
              ¡Obtuviste {score} de {questions.length} correctas!
            </h3>
            <p className="text-gray-200 text-lg mb-4">
              📸 Toma captura y muéstrale a Mary lo mucho que la conoces
            </p>
            <button
              onClick={() => {
                setAnswers({});
                setShowResults(false);
              }}
              className="bg-gradient-to-r from-purple-400 to-purple-500 hover:from-purple-500 hover:to-purple-600 text-white py-3 px-8 rounded-full font-medium transition-all"
            >
              Volver a intentar
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
