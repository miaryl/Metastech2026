import { useState } from 'react';
import { Send } from 'lucide-react';
import type { Meta } from '../App';

interface MetaFormProps {
  onSubmit: (meta: Omit<Meta, 'id' | 'inspiraciones'>) => void;
}

export function MetaForm({ onSubmit }: MetaFormProps) {
  const [nombre, setNombre] = useState('');
  const [meta, setMeta] = useState('');
  const [categoria, setCategoria] = useState<Meta['categoria']>('Frontend');
  const [fecha, setFecha] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!nombre || !meta || !fecha) {
      alert('Por favor completa todos los campos');
      return;
    }

    onSubmit({
      nombre,
      meta,
      categoria,
      fecha
    });

    // Limpiar formulario
    setNombre('');
    setMeta('');
    setCategoria('Frontend');
    setFecha('');
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-emerald-400">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        📝 Publica tu Meta
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="nombre" className="block text-sm font-semibold text-gray-700 mb-2">
            Tu nombre
          </label>
          <input
            id="nombre"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ej: María González"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition"
          />
        </div>

        <div>
          <label htmlFor="meta" className="block text-sm font-semibold text-gray-700 mb-2">
            Meta tech
          </label>
          <input
            id="meta"
            type="text"
            value={meta}
            onChange={(e) => setMeta(e.target.value)}
            placeholder="Ej: Dominar TypeScript"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="categoria" className="block text-sm font-semibold text-gray-700 mb-2">
              Categoría
            </label>
            <select
              id="categoria"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value as Meta['categoria'])}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition bg-white"
            >
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="DevOps">DevOps</option>
              <option value="IA">IA</option>
              <option value="Movil">Móvil</option>
            </select>
          </div>

          <div>
            <label htmlFor="fecha" className="block text-sm font-semibold text-gray-700 mb-2">
              Fecha objetivo
            </label>
            <input
              id="fecha"
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-emerald-500 to-emerald-400 text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl hover:from-emerald-600 hover:to-emerald-500 transition-all flex items-center justify-center gap-2 group"
        >
          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          Publicar Meta
        </button>
      </form>
    </div>
  );
}
