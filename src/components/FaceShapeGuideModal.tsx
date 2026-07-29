import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight } from 'lucide-react';
import { FaceShape } from '../types';

interface FaceShapeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectShapeFilter?: (shape: FaceShape) => void;
}

export const FaceShapeGuideModal: React.FC<FaceShapeGuideModalProps> = ({
  isOpen,
  onClose,
  onSelectShapeFilter,
}) => {
  const [activeTab, setActiveTab] = useState<FaceShape>('ovalado');

  if (!isOpen) return null;

  const faceGuideData: Record<
    FaceShape,
    {
      title: string;
      description: string;
      characteristics: string[];
      recommendedCut: string;
      avoidCut: string;
      recommendedServiceIds: string[];
    }
  > = {
    ovalado: {
      title: 'Rostro Ovalado',
      description: 'Considerada la forma ideal por su simetría natural. Admite prácticamente cualquier estilo de corte.',
      characteristics: ['Ancho equilibrado', 'Mentón suavemente redondeado', 'Facciones proporcionadas'],
      recommendedCut: 'Skin Fade con volumen superior, Pompadour, Executive Class.',
      avoidCut: 'Flequillos demasiado largos que oculten la frente.',
      recommendedServiceIds: ['corte-skin-fade', 'corte-clasico-caballero'],
    },
    cuadrado: {
      title: 'Rostro Cuadrado',
      description: 'Líneas mandibulares muy marcadas y masculinas. Busca suavizar las esquinas o resaltar la estructura.',
      characteristics: ['Mandíbula angulosa y ancha', 'Frente ancha', 'Líneas rectas laterales'],
      recommendedCut: 'Textured Crop, Buzz Cut con line-up marcado, Fades cortos a los lados.',
      avoidCut: 'Cortes rectos muy planos o parted al medio muy marcado.',
      recommendedServiceIds: ['corte-buzz-lineup', 'mullet-moderno-crop'],
    },
    redondo: {
      title: 'Rostro Redondo',
      description: 'Pómulos prominentes con ancho y largo similares. El objetivo es alargar ópticamente la cara con volumen arriba.',
      characteristics: ['Pómulos anchos', 'Sin ángulos marcados en la mandíbula', 'Barba estilizada recomendada'],
      recommendedCut: 'High Skin Fade con tupé alto, Quiff, Pompadour con lados muy rapados.',
      avoidCut: 'Cortes redondos o flequillos rectos pegados a la frente.',
      recommendedServiceIds: ['corte-skin-fade', 'arreglo-barba-ritual'],
    },
    diamante: {
      title: 'Rostro Diamante',
      description: 'Pómulos más anchos que la frente y el mentón. Necesita equilibrio en sienes y barbilla.',
      characteristics: ['Pómulos muy definidos', 'Mentón afilado', 'Frente estrecha'],
      recommendedCut: 'Modern Mullet, Textured Crop largo, barbas pobladas en la barbilla.',
      avoidCut: 'Laterales extremadamente rapados sin textura arriba.',
      recommendedServiceIds: ['mullet-moderno-crop', 'pack-corte-y-barba-apex'],
    },
    alargado: {
      title: 'Rostro Alargado / Rectangular',
      description: 'Cara más larga que ancha. Requiere cortes que agreguen densidad lateral sin añadir demasiado tupé en la coronilla.',
      characteristics: ['Frente y mandíbula del mismo ancho', 'Mayor longitud vertical', 'Facciones rectilíneas'],
      recommendedCut: 'Corte Clásico Ejecutivo, Peinado de lado tradicional, barbas redondeadas.',
      avoidCut: 'Tupés gigantes o tupés extremadamente elevados.',
      recommendedServiceIds: ['corte-clasico-caballero', 'arreglo-barba-ritual'],
    },
  };

  const current = faceGuideData[activeTab];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-stone-900 border border-stone-800 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-stone-800 flex items-center justify-between sticky top-0 bg-stone-900/95 z-10 backdrop-blur-md">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-lg">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span>Guía de Visajismo & Estructura Facial</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-stone-800 text-stone-400 hover:text-stone-100 hover:bg-stone-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6">
          <p className="text-stone-300 text-sm">
            Selecciona la forma de tu rostro para descubrir los estilos de corte que mejor potencian tus facciones naturales:
          </p>

          {/* Shape Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {(Object.keys(faceGuideData) as FaceShape[]).map((shape) => (
              <button
                key={shape}
                onClick={() => setActiveTab(shape)}
                className={`p-2.5 rounded-xl text-xs font-bold capitalize transition-all border ${
                  activeTab === shape
                    ? 'bg-amber-500 text-stone-950 border-amber-500 shadow-lg shadow-amber-500/20'
                    : 'bg-stone-950 text-stone-300 border-stone-800 hover:bg-stone-800'
                }`}
              >
                {shape}
              </button>
            ))}
          </div>

          {/* Active Shape Detail Card */}
          <div className="bg-stone-950 p-6 rounded-2xl border border-stone-800 space-y-4">
            <div>
              <h3 className="font-serif text-2xl font-bold text-amber-400">{current.title}</h3>
              <p className="text-stone-300 text-sm mt-1">{current.description}</p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-400">
                Características clave:
              </span>
              <ul className="space-y-1">
                {current.characteristics.map((c, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-stone-300">
                    <Check className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="bg-stone-900/80 p-3 rounded-xl border border-emerald-900/40">
                <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                  👍 Te favorece:
                </span>
                <p className="text-xs text-stone-200">{current.recommendedCut}</p>
              </div>

              <div className="bg-stone-900/80 p-3 rounded-xl border border-rose-900/40">
                <span className="text-[11px] font-bold text-rose-400 uppercase tracking-wider block mb-1">
                  ⚠️ Evitar:
                </span>
                <p className="text-xs text-stone-200">{current.avoidCut}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-stone-800 bg-stone-950/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-stone-400">
            Nuestros barberos siempre realizan una asesoría antes de empezar a cortar.
          </span>
          <button
            onClick={() => {
              if (onSelectShapeFilter) onSelectShapeFilter(activeTab);
              onClose();
            }}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg"
          >
            <span>Ver cortes para rostro {activeTab}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
