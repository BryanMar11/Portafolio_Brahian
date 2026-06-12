import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeAway, setFadeAway] = useState(false);
  const [idioma, setIdioma] = useState('es'); // Declarado correctamente para evitar el undefined

  useEffect(() => {
    // Control de tiempos para la pantalla de carga (Loader)
    const animationTimeout = setTimeout(() => {
      setFadeAway(true);
    }, 3800);

    const removeTimeout = setTimeout(() => {
      setLoading(false);
    }, 4300);

    return () => {
      clearTimeout(animationTimeout);
      clearTimeout(removeTimeout);
    };
  }, []);

  // 1. Render de la Pantalla de Carga (Loader)
  if (loading) {
    return (
      <div 
        className={`flex min-h-screen flex-col items-center justify-center bg-[#050b14] text-white px-4 relative overflow-hidden transition-all duration-500 ease-in-out ${
          fadeAway ? 'opacity-0 scale-98 pointer-events-none' : 'opacity-100 scale-100'
        }`}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-950/20 rounded-full blur-[120px] pointer-events-none" />

        <div 
          className={`z-10 flex flex-col items-center text-center max-w-3xl space-y-8 transition-all duration-700 ease-in-out ${
            fadeAway ? 'opacity-0 blur-sm translate-y-[-10px]' : 'opacity-100 blur-0 translate-y-0'
          }`}
        >
          
          <div className="flex items-center justify-center space-x-6">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#0a1424] border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.15)] text-blue-400 animate-bounce [animation-delay:-0.3s]">
              <span className="text-xl font-mono">&lt;/&gt;</span>
            </div>

            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#0a1424] border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.15)] text-blue-400 animate-bounce [animation-delay:-0.15s]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </div>

            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#0a1424] border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.15)] text-blue-400 animate-bounce">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
          </div>

          <div className="space-y-2 overflow-hidden">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#e2e8f0] opacity-0 animate-sweep-left">
              Bienvenido a mi
            </h1>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-500 via-indigo-400 to-sky-400 bg-clip-text text-transparent pb-2 opacity-0 animate-sweep-up [animation-delay:0.3s]">
              portafolio digital
            </h2>
          </div>

        </div>
      </div>
    );
  }

  // 2. Render de la Aplicación Principal (Navbar + Hero Limpio)
  return (
    <div className="min-h-screen bg-[#050b14] text-white relative select-none">
      {/* Fondo estelar difuminado global */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/20 via-[#050b14] to-[#050b14] pointer-events-none" />
      
      {/* Pasamos los estados correctos a los componentes */}
      <Navbar idioma={idioma} setIdioma={setIdioma} />
      
      <main>
        <Hero idioma={idioma} />
      </main>
    </div>
  );
}

export default App;