import { useState } from 'react';
import { MetaCard } from './components/MetaCard';
import { MetaForm } from './components/MetaForm';
import { Sparkles } from 'lucide-react';

export interface Meta {
  id: string;
  nombre: string;
  meta: string;
  categoria: 'Frontend' | 'Backend' | 'DevOps' | 'IA' | 'Movil';
  fecha: string;
  inspiraciones: number;
}

const metasEjemplo: Meta[] = [
  {
    id: '1',
    nombre: 'Ana García',
    meta: 'Dominar TypeScript y sus tipos avanzados',
    categoria: 'Frontend',
    fecha: '2025-03-15',
    inspiraciones: 12
  },
  {
    id: '2',
    nombre: 'Carlos Ruiz',
    meta: 'Crear APIs RESTful con Node.js y Express',
    categoria: 'Backend',
    fecha: '2025-04-20',
    inspiraciones: 8
  },
  {
    id: '3',
    nombre: 'María López',
    meta: 'Implementar CI/CD con GitHub Actions',
    categoria: 'DevOps',
    fecha: '2025-02-28',
    inspiraciones: 15
  },
  {
    id: '4',
    nombre: 'Juan Pérez',
    meta: 'Construir mi primera app con React Native',
    categoria: 'Movil',
    fecha: '2025-05-10',
    inspiraciones: 20
  },
  {
    id: '5',
    nombre: 'Laura Martín',
    meta: 'Entrenar modelos con TensorFlow',
    categoria: 'IA',
    fecha: '2025-06-30',
    inspiraciones: 18
  },
  {
    id: '6',
    nombre: 'Diego Torres',
    meta: 'Aprender Next.js 14 y Server Components',
    categoria: 'Frontend',
    fecha: '2025-03-01',
    inspiraciones: 25
  },
  {
    id: '7',
    nombre: 'Sofia Chen',
    meta: 'Dominar Docker y Kubernetes',
    categoria: 'DevOps',
    fecha: '2025-04-15',
    inspiraciones: 14
  },
  {
    id: '8',
    nombre: 'Pablo Sánchez',
    meta: 'Desarrollar con Python y FastAPI',
    categoria: 'Backend',
    fecha: '2025-05-20',
    inspiraciones: 10
  },
  {
    id: '9',
    nombre: 'Carmen Vega',
    meta: 'Implementar chatbots con LangChain',
    categoria: 'IA',
    fecha: '2025-07-15',
    inspiraciones: 22
  }
];

export default function App() {
  const [metas, setMetas] = useState<Meta[]>(metasEjemplo);

  const handleNuevaMeta = (meta: Omit<Meta, 'id' | 'inspiraciones'>) => {
    const nuevaMeta: Meta = {
      ...meta,
      id: Date.now().toString(),
      inspiraciones: 0
    };
    setMetas([nuevaMeta, ...metas]);
  };

  const handleInspiracion = (id: string) => {
    setMetas(metas.map(meta => 
      meta.id === id 
        ? { ...meta, inspiraciones: meta.inspiraciones + 1 }
        : meta
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-yellow-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-4 border-emerald-400">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Sparkles className="w-10 h-10 text-yellow-400 fill-yellow-400" />
              <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">
                Mis Metas Tech 2025
              </h1>
              <Sparkles className="w-10 h-10 text-yellow-400 fill-yellow-400" />
            </div>
            <p className="text-2xl text-gray-700 font-medium">
              Este año aprendo... ✨
            </p>
            <p className="mt-2 text-gray-600">
              Comparte tus objetivos y encuentra inspiración en la comunidad
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Formulario */}
        <MetaForm onSubmit={handleNuevaMeta} />

        {/* Grid de Metas */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            🎯 Metas de la Comunidad
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metas.map(meta => (
              <MetaCard 
                key={meta.id} 
                meta={meta}
                onInspiracion={handleInspiracion}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 py-8 bg-white border-t-2 border-emerald-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600">
            💚 Hecho con pasión por el aprendizaje continuo
          </p>
        </div>
      </footer>
    </div>
  );
}
