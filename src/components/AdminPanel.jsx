import { useState, useEffect } from 'react';
import { LogOut, Users, Calendar, MessageSquare, CheckCircle, XCircle, Home } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmations, setConfirmations] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'mary2025xv') {
      setIsAuthenticated(true);
      loadConfirmations();
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  const loadConfirmations = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://asyucsieemrzkprrjmwx.supabase.co/rest/v1/confirmations?select=*&order=created_at.desc', {
        headers: {
          'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzeXVjc2llZW1yemtwcnJqbXd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA2NDU1MjksImV4cCI6MjA3NjIyMTUyOX0.ql_7GYNA2cZShuBM-2iXnUKaL3pt6v_LI33MpHAlHJc',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzeXVjc2llZW1yemtwcnJqbXd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA2NDU1MjksImV4cCI6MjA3NjIyMTUyOX0.ql_7GYNA2cZShuBM-2iXnUKaL3pt6v_LI33MpHAlHJc'
        }
      });
      const data = await response.json();
      setConfirmations(data);
    } catch (error) {
      console.error('Error al cargar confirmaciones:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
    setConfirmations([]);
  };

  const totalGuests = confirmations
    .filter(c => c.attendance === 'yes')
    .reduce((sum, c) => sum + c.guests, 0);

  const confirmedCount = confirmations.filter(c => c.attendance === 'yes').length;
  const declinedCount = confirmations.filter(c => c.attendance === 'no').length;

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-purple-900 flex items-center justify-center p-4">
        <motion.div
          className="bg-purple-950/50 backdrop-blur-sm rounded-2xl p-8 max-w-md w-full border-2 border-purple-500/30"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-serif text-white text-center mb-6">
            Panel de Administración
          </h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-gray-200 font-medium mb-2 block">Usuario</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 bg-purple-950/80 border-2 border-purple-500/30 text-white rounded-lg focus:border-purple-400 focus:outline-none"
                placeholder="admin"
                required
              />
            </div>
            <div>
              <label className="text-gray-200 font-medium mb-2 block">Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-purple-950/80 border-2 border-purple-500/30 text-white rounded-lg focus:border-purple-400 focus:outline-none"
                placeholder="••••••••"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-400 to-purple-500 hover:from-purple-500 hover:to-purple-600 text-white py-3 px-6 rounded-full font-medium transition-all"
            >
              Iniciar sesión
            </button>
          </form>
          <div className="mt-4 text-center">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-all"
            >
              <Home className="w-4 h-4" />
              <span className="text-sm">Volver a la invitación</span>
            </a>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-purple-900 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-3xl md:text-4xl font-serif text-white">Panel de Administración</h1>
          <div className="flex gap-3">
            <a
              href="/"
              className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-full transition-all"
            >
              <Home className="w-5 h-5" />
              Volver a invitación
            </a>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full transition-all"
            >
              <LogOut className="w-5 h-5" />
              Salir
            </button>
          </div>
        </div>

        {/* Estadísticas */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-purple-950/50 backdrop-blur-sm rounded-2xl p-6 border-2 border-purple-500/30">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle className="w-8 h-8 text-green-400" />
              <span className="text-gray-200 text-lg">Confirmados</span>
            </div>
            <p className="text-4xl font-bold text-white">{confirmedCount}</p>
          </div>
          <div className="bg-purple-950/50 backdrop-blur-sm rounded-2xl p-6 border-2 border-purple-500/30">
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-8 h-8 text-purple-400" />
              <span className="text-gray-200 text-lg">Total Invitados</span>
            </div>
            <p className="text-4xl font-bold text-white">{totalGuests}</p>
          </div>
          <div className="bg-purple-950/50 backdrop-blur-sm rounded-2xl p-6 border-2 border-purple-500/30">
            <div className="flex items-center gap-3 mb-2">
              <XCircle className="w-8 h-8 text-red-400" />
              <span className="text-gray-200 text-lg">No Asistirán</span>
            </div>
            <p className="text-4xl font-bold text-white">{declinedCount}</p>
          </div>
        </div>

        {/* Lista de confirmaciones */}
        <div className="bg-purple-950/50 backdrop-blur-sm rounded-2xl p-6 border-2 border-purple-500/30">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-serif text-white">Confirmaciones</h2>
            <button
              onClick={loadConfirmations}
              className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-full transition-all"
            >
              Actualizar
            </button>
          </div>

          {loading ? (
            <p className="text-gray-200 text-center py-8">Cargando...</p>
          ) : confirmations.length === 0 ? (
            <p className="text-gray-200 text-center py-8">No hay confirmaciones aún</p>
          ) : (
            <div className="space-y-4 max-h-[600px] overflow-y-auto">
              {confirmations.map((confirmation) => (
                <div
                  key={confirmation.id}
                  className="bg-purple-900/50 rounded-xl p-4 border-2 border-purple-500/20"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-medium text-white">{confirmation.name}</h3>
                        {confirmation.attendance === 'yes' ? (
                          <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                            Asistirá
                          </span>
                        ) : (
                          <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm">
                            No asistirá
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-gray-300 text-sm">
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {confirmation.guests} {confirmation.guests === 1 ? 'persona' : 'personas'}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(confirmation.created_at).toLocaleDateString('es-MX', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </span>
                      </div>
                      {confirmation.message && (
                        <div className="mt-3 flex items-start gap-2 text-gray-200">
                          <MessageSquare className="w-4 h-4 mt-1 flex-shrink-0" />
                          <p className="text-sm italic">"{confirmation.message}"</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
