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
    
    let velocidad = borrando ? 40 : 75;

    if (!borrando && palabraRenderizada === palabraCompleta) {
      velocidad = 2000;
    }

    const temporizador = setTimeout(() => {
      if (!borrando) {
        setPalabraRenderizada(palabraCompleta.substring(0, palabraRenderizada.length + 1));
        
        if (palabraRenderizada === palabraCompleta) {
          setBorrando(true);
        }
      } else {
        setPalabraRenderizada(palabraCompleta.substring(0, palabraRenderizada.length - 1));
        
        if (palabraRenderizada === '') {
          setBorrando(false);
          setIndicePalabra((prev) => (prev + 1) % lista.length);
        }
      }
    }, velocidad);

    return () => clearTimeout(temporizador);
  }, [palabraRenderizada, borrando, indicePalabra, idioma]);

  // Función para hacer el scroll suave hacia la sección "Sobre mí"
  const scrollASobreMi = () => {
    const seccion = document.getElementById('sobre-mi');
    if (seccion) {
      seccion.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="inicio" 
      className="w-full h-screen max-h-screen relative overflow-hidden flex items-center justify-center bg-[#050b14]"
    >
      
      {/* CONTENEDOR DEL FONDO ABSOLUTO */}
      <div 
        className="absolute inset-0 bg-cover bg-center pointer-events-none z-0 opacity-40 select-none"
        style={{ backgroundImage: "url('https://4kwallpapers.com/images/walls/thumbs_2t/21270.jpg')" }}
      />
      
      {/* Capa de difuminado radial optimizada */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_10%,_#050b14_80%)] pointer-events-none z-0" />

      {/* CONTENEDOR INTERNO */}
      <div className="w-full max-w-5xl mx-auto px-6 sm:px-16 z-10 flex flex-col items-center justify-center text-center h-full pt-16 pb-4">
        
        <div className="flex flex-col space-y-5 items-center w-full">
          
          {/* Títulos principales */}
          <div className="space-y-2 w-full">
            <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-[#e2e8f0] leading-[1.1] drop-shadow-md">
              {idioma === 'es' ? 'Un Desarrollador' : 'A Full-Stack'} <br />
              <span className="text-[#dcdbe8] font-bold">
                {idioma === 'es' ? 'Backend Creando' : 'Developer Creating'}
              </span>
            </h1>

            {/* Máquina de escribir con resplandor */}
            <div className="block pt-1 pb-1 overflow-hidden">
              <span className="inline-block text-5xl sm:text-7xl font-black bg-gradient-to-r from-blue-500 via-indigo-400 to-sky-400 bg-clip-text text-transparent tracking-tight pr-2 border-r-4 border-blue-500 min-h-[55px] sm:min-h-[85px] whitespace-nowrap animate-cursor-blink drop-shadow-[0_0_25px_rgba(59,130,246,0.4)]">
                {palabraRenderizada}
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-slate-400 tracking-tight">
              {idioma === 'es' ? 'Aplicaciones Web' : 'Web Applications'}
            </h2>
          </div>

          {/* Párrafo */}
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed tracking-wide mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            {idioma === 'es' 
              ? 'Me apasiona diseñar arquitecturas robustas y optimizar bases de datos para construir soluciones lógicas que soporten entornos exigentes y escalables.' 
              : 'I am passionate about designing robust architectures and optimizing databases to build logical solutions capable of handling demanding and scalable environments.'}
          </p>

          {/* Iconos Sociales */}
          <div className="flex items-center justify-center gap-8 pt-2">
            {/* GitHub */}
            <a 
              href="https://github.com/tu-usuario" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-all duration-300 transform hover:scale-115 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10 sm:w-11 sm:h-11">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://linkedin.com/in/tu-perfil" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-115 hover:drop-shadow-[0_0_15px_rgba(96,165,250,0.4)]"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10 sm:w-11 sm:h-11">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            {/* WhatsApp */}
            <a 
              href="https://wa.me/573XXXXXXXXX?text=Hola,%20vi%20tu%20portafolio%20y%20me%20gustaría%20conecer%20más%20de%20tu%20trabajo!" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-green-500 transition-all duration-300 transform hover:scale-115 hover:drop-shadow-[0_0_15px_rgba(74,222,128,0.4)]"
              aria-label="WhatsApp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10 sm:w-11 sm:h-11">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.453L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.634-1.013-5.112-2.86-6.961S14.12 1.027 11.487 1.025c-5.438 0-9.863 4.42-9.866 9.861-.001 1.702.451 3.361 1.307 4.8l-.399 1.464 1.502-.394 1.427.848zm12.335-6.732c-.316-.159-1.872-.924-2.156-1.028-.284-.103-.491-.154-.697.159-.206.313-.797 1.028-.977 1.235-.181.205-.361.23-.677.072-3.167-1.587-4.167-2.775-4.704-3.702-.181-.313-.018-.482.14-.64.142-.142.316-.368.474-.553.158-.185.21-.316.316-.527.106-.212.053-.396-.026-.553-.079-.158-.697-1.68-.956-2.302-.252-.607-.51-.525-.697-.535-.18-.01-.387-.011-.594-.011-.206 0-.543.078-.827.388-.283.311-1.082 1.058-1.082 2.58 0 1.522 1.108 2.99 1.263 3.197.155.206 2.181 3.329 5.284 4.669.738.318 1.314.509 1.763.651.742.236 1.418.203 1.952.123.595-.088 1.873-.767 2.131-1.47.259-.702.259-1.304.182-1.43-.078-.127-.284-.206-.6-.365z"/>
              </svg>
            </a>
          </div>

        </div>

      </div>

      {/* ICONO DE SCROLL INFERIOR DERECHO */}
      <button
        onClick={scrollASobreMi}
        className="absolute bottom-8 right-8 z-20 p-2 text-slate-400 hover:text-indigo-400 transition-all duration-300 transform hover:scale-125 hover:drop-shadow-[0_0_12px_rgba(129,140,248,0.6)] animate-bounce cursor-pointer group"
        aria-label="Desplazarse a sobre mí"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth="2.5" 
          stroke="currentColor" 
          className="w-8 h-8"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

    </section>
  );
}

export default Hero;