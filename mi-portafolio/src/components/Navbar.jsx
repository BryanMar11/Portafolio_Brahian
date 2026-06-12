function Navbar({ idioma, setIdioma }) {
  const enlaces = {
    es: [
      { nombre: 'Inicio', url: '#inicio' },
      { nombre: 'Sobre mí', url: '#sobre-mi' },
      { nombre: 'Proyectos', url: '#proyectos' },
      { nombre: 'Contacto', url: '#contacto' }
    ],
    en: [
      { nombre: 'Home', url: '#inicio' },
      { nombre: 'About me', url: '#sobre-mi' },
      { nombre: 'Projects', url: '#proyectos' },
      { nombre: 'Contact', url: '#contacto' }
    ]
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl h-16 bg-black/60 backdrop-blur-md border border-blue-500/10 rounded-full z-50 flex items-center justify-between px-6 sm:px-10 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
      
      <div className="flex items-center space-x-2 cursor-pointer group">
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 flex items-center justify-center text-xs font-bold text-black font-mono shadow-[0_0_15px_rgba(59,130,246,0.4)]">
          B
        </div>
        <span className="font-bold tracking-tight text-[#dcdbe8] group-hover:text-blue-400 transition-colors">
          BryanMar<span className="text-blue-500">.dev</span>
        </span>
      </div>

      <div className="hidden md:flex items-center space-x-2">
        {enlaces[idioma].map((enlace, index) => (
          <a
            key={index}
            href={enlace.url}
            className="text-sm font-medium text-slate-300 px-4 py-2 rounded-full transition-all duration-300 ease-in-out hover:bg-blue-500/10 hover:text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.1)]"
          >
            {enlace.nombre}
          </a>
        ))}
      </div>

      <div className="flex items-center space-x-1 bg-black/40 p-1 rounded-full border border-blue-500/10 text-[11px] font-semibold">
        <button
          onClick={() => setIdioma('es')}
          className={`px-3 py-1 rounded-full transition-all duration-300 ${
            idioma === 'es' 
              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20' 
              : 'text-slate-400 hover:text-white'
          }`}
        >
          ES
        </button>
        <button
          onClick={() => setIdioma('en')}
          className={`px-3 py-1 rounded-full transition-all duration-300 ${
            idioma === 'en' 
              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20' 
              : 'text-slate-400 hover:text-white'
          }`}
        >
          EN
        </button>
      </div>

    </nav>
  );
}

export default Navbar;