import { Heart, Calendar, Code, Server, Cloud, Brain, Smartphone } from 'lucide-react';
import type { Meta } from '../App';

interface MetaCardProps {
  meta: Meta;
  onInspiracion: (id: string) => void;
}

const categoriasConfig = {
  Frontend: {
    color: 'from-blue-400 to-blue-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-300',
    icon: Code,
    iconColor: 'text-blue-600'
  },
  Backend: {
    color: 'from-purple-400 to-purple-500',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-300',
    icon: Server,
    iconColor: 'text-purple-600'
  },
  DevOps: {
    color: 'from-orange-400 to-orange-500',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-300',
    icon: Cloud,
    iconColor: 'text-orange-600'
  },
  IA: {
    color: 'from-pink-400 to-pink-500',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-300',
    icon: Brain,
    iconColor: 'text-pink-600'
  },
  Movil: {
    color: 'from-emerald-400 to-emerald-500',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-300',
    icon: Smartphone,
    iconColor: 'text-emerald-600'
  }
};

export function MetaCard({ meta, onInspiracion }: MetaCardProps) {
  const config = categoriasConfig[meta.categoria];
  const IconComponent = config.icon;

  const formatFecha = (fecha: string) => {
    const date = new Date(fecha);
    return date.toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  return (
    <div className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${config.borderColor} overflow-hidden group hover:-translate-y-1`}>
      {/* Header con categoría */}
      <div className={`bg-gradient-to-r ${config.color} px-4 py-3 flex items-center gap-2`}>
        <IconComponent className="w-5 h-5 text-white" />
        <span className="text-white font-bold text-sm">{meta.categoria}</span>
      </div>

      {/* Contenido */}
      <div className="p-5">
        <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-2 min-h-[3.5rem]">
          {meta.meta}
        </h3>
        
        <p className="text-sm text-gray-600 mb-4">
          por <span className="font-semibold text-gray-800">{meta.nombre}</span>
        </p>

        <div className={`${config.bgColor} rounded-lg p-3 mb-4 flex items-center gap-2`}>
          <Calendar className={`w-4 h-4 ${config.iconColor}`} />
          <span className={`text-sm font-medium ${config.iconColor}`}>
            Meta para: {formatFecha(meta.fecha)}
          </span>
        </div>

        {/* Botón de inspiración */}
        <button
          onClick={() => onInspiracion(meta.id)}
          className={`w-full bg-gradient-to-r ${config.color} text-white font-semibold py-3 px-4 rounded-lg shadow hover:shadow-md transition-all flex items-center justify-center gap-2 group/btn`}
        >
          <Heart className="w-5 h-5 group-hover/btn:fill-white transition-all" />
          Me inspira ({meta.inspiraciones})
        </button>
      </div>
    </div>
  );
}
