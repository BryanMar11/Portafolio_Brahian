const Skills = ({ idioma }) => {
  return (
    <div className="w-full min-h-[450px] flex flex-col items-center justify-center p-8 rounded-2xl border border-slate-800/40 bg-[#070a13]/10 backdrop-blur-xs animate-[fadeIn_0.4s_ease-out]">
      
      {/* ESPACIO DE TRABAJO EN BLANCO — LISTO PARA DISEÑAR */}
      <div className="text-center space-y-3 font-mono">
        <p className="text-[#1793d1] text-xs uppercase tracking-[0.2em] animate-pulse">
          {idioma === 'es' ? '• Módulo de Habilidades Inicializado •' : '• Skills Module Initialized •'}
        </p>
        <p className="text-slate-500 text-[11px] uppercase tracking-widest">
          {idioma === 'es' ? 'Dime cómo estructuramos las columnas o categorías' : 'Tell me how to structure the columns or categories'}
        </p>
      </div>

    </div>
  );
};

export default Skills;