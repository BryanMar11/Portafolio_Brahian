import { useState, useEffect } from 'react';

const palabras = {
  es: ['Seguras', 'Modernas', 'Eficientes', 'Robustas'],
  en: ['Secure', 'Modern', 'Efficient', 'Robust']
};

function Hero({ idioma }) {
  const [palabraRenderizada, setPalabraRenderizada] = useState('');
  const [indicePalabra, setIndicePalabra] = useState(0);
  const [borrando, setBorrando] = useState(false);

  useEffect(() => {
    const lista = palabras[idioma] || palabras['es'];
    const palabraCompleta = lista[indicePalabra];
    
    // Tiempos de la máquina de escribir:
    // Tipeo rápido (75ms), borrado veloz (40ms), pausa al terminar de escribir (2000ms)
    let velocidad = borrando ? 40 : 75;

    if (!borrando && palabraRenderizada === palabraCompleta) {
      velocidad = 2000; // Se queda estática un momento para que se lea bien
    }

    const temporizador = setTimeout(() => {
      if (!borrando) {
        // Añadir letra por letra
        setPalabraRenderizada(palabraCompleta.substring(0, palabraRenderizada.length + 1));
        
        if (palabraRenderizada === palabraCompleta) {
          setBorrando(true);
        }
      } else {
        // Quitar letra por letra
        setPalabraRenderizada(palabraCompleta.substring(0, palabraRenderizada.length - 1));
        
        if (palabraRenderizada === '') {
          setBorrando(false);
          setIndicePalabra((prev) => (prev + 1) % lista.length);
        }
      }
    }, velocidad);

    return () => clearTimeout(temporizador);
  }, [palabraRenderizada, borrando, indicePalabra, idioma]);

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-between px-6 sm:px-16 max-w-6xl mx-auto pt-20 relative overflow-hidden">
      
      {/* Bloque Izquierdo: Textos y Acciones */}
      <div className="z-10 flex flex-col max-w-2xl space-y-6 text-left">
        
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#e2e8f0] leading-none">
            {idioma === 'es' ? 'Un Desarrollador' : 'A Full-Stack'} <br />
            <span className="text-[#dcdbe8]">
              {idioma === 'es' ? 'Full-Stack Creando' : 'Developer Creating'}
            </span>
          </h1>

          {/* Contenedor inline-block: mantiene el cursor pegado al texto y pb-2 salva la 'g' */}
          <div className="block pt-2 pb-2 overflow-hidden">
            <span className="inline-block text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-blue-500 via-indigo-400 to-sky-400 bg-clip-text text-transparent tracking-tight pr-1 border-r-4 border-blue-500 min-h-[40px] sm:min-h-[65px] whitespace-nowrap animate-cursor-blink">
              {palabraRenderizada}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-slate-400 tracking-tight">
            {idioma === 'es' ? 'Aplicaciones Web' : 'Web Applications'}
          </h2>
        </div>

        <p className="text-slate-400 text-sm sm:text-base max-w-lg leading-relaxed">
          {idioma === 'es' 
            ? 'Me apasiona diseñar arquitecturas robustas y optimizar bases de datos para construir soluciones lógicas que soporten entornos exigentes y escalables.' 
            : 'I am passionate about designing robust architectures and optimizing databases to build logical solutions capable of handling demanding and scalable environments.'}
        </p>

        {/* Botones de acción */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <a 
            href="#contacto" 
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-medium text-sm shadow-lg shadow-blue-500/20 hover:scale-105 transition-transform"
          >
            {idioma === 'es' ? 'Contactame' : 'Contact Me'}
          </a>
          <a 
            href="#proyectos" 
            className="px-6 py-3 border border-blue-500/20 bg-blue-500/5 hover:bg-blue-500/10 text-blue-400 rounded-full font-medium text-sm transition-colors"
          >
            {idioma === 'es' ? 'Ver Proyectos' : 'View Projects'}
          </a>
        </div>

      </div>

      {/* Bloque Derecho */}
      <div className="hidden lg:flex w-[40%] h-[400px] items-center justify-center relative">
        <div className="absolute w-72 h-72 bg-blue-500/5 rounded-full blur-[80px]" />
      </div>

    </section>
  );
}

export default Hero;