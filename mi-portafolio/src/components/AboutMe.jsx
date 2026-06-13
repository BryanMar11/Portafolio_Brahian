import { useState } from 'react';
import Skills from './Skills'; // Importamos tu nuevo lienzo independiente

const AboutMe = ({ idioma }) => {
  // Estado para controlar qué pantalla completa está activa
  const [tabActiva, setTabActiva] = useState('about');

  // Frase repetida para el efecto infinito de la marquesina
  const textoMarquee = (
    <div className="flex items-center space-x-12 pr-12">
      <span style={{ color: '#1793d1' }}>BRAHIAN</span> 
      <span 
        className="text-transparent"
        style={{ WebkitTextStroke: '2px #1793d1' }}
      >
        {idioma === 'es' ? 'PORTAFOLIO' : 'PORTFOLIO'}
      </span>
    </div>
  );

  return (
    <section 
      id="about" 
      className="relative w-full min-h-screen flex flex-col items-center justify-start pt-24 pb-40 md:pb-56 px-6 sm:px-10 lg:px-16 bg-transparent overflow-hidden"
    >
      
      {/* ─── SELECTOR GLOBAL ESTILO NAVBAR ─── */}
      <div className="z-20 mb-12 flex space-x-1 p-1 rounded-full border border-slate-800/50 bg-[#070a13]/40 backdrop-blur-md w-full max-w-[240px] font-mono text-[11px] uppercase tracking-wider shadow-inner">
        <button
          onClick={() => setTabActiva('about')}
          className={`flex-1 py-1.5 rounded-full text-center transition-all duration-300 ${
            tabActiva === 'about'
              ? 'bg-gradient-to-r from-[#1793d1]/10 to-[#1793d1]/20 text-white border border-[#1793d1]/30 font-bold shadow-[0_0_15px_rgba(23,147,209,0.2)]'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          {idioma === 'es' ? 'Sobre mí' : 'About'}
        </button>
        <button
          onClick={() => setTabActiva('skills')}
          className={`flex-1 py-1.5 rounded-full text-center transition-all duration-300 ${
            tabActiva === 'skills'
              ? 'bg-gradient-to-r from-[#1793d1]/10 to-[#1793d1]/20 text-white border border-[#1793d1]/30 font-bold shadow-[0_0_15px_rgba(23,147,209,0.2)]'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          {idioma === 'es' ? 'Skills' : 'Skills'}
        </button>
      </div>

      {/* ─── CONTENEDOR DINÁMICO DE PANTALLA COMPLETA ─── */}
      <div className="w-full max-w-7xl flex-1 flex items-start justify-center z-10">
        
        {tabActiva === 'about' ? (
          
          /* ════════════════ PANTALLA 1: SOBRE MÍ ════════════════ */
          <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-start animate-[fadeIn_0.4s_ease-out]">
            
            {/* COLUMNA IZQUIERDA: Prompt de Arch Linux & Nombre */}
            <div className="md:col-span-3 flex flex-col space-y-4 select-none md:pt-12">
              <div className="flex items-center space-x-2 font-mono text-xs tracking-normal text-[#b2ccd6] py-1">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#1793d1] fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .133a.27.27 0 0 0-.214.108C9.56 3.12 3.864 11.238 0 21.68c0 0 4.316-3.414 7.632-4.04 1.765-.333 3.398-.106 4.368.533.97-.64 2.603-.866 4.368-.533 3.316.626 7.632 4.04 7.632 4.04C20.136 11.238 14.44 3.12 12.214.24a.27.27 0 0 0-.214-.108zm0 8.046c.725 1.157 1.83 3.23 2.684 5.485-1.503-.646-3.15-.556-4.368.188-1.218-.744-2.865-.834-4.368-.188.855-2.254 1.96-4.328 2.684-5.485a.82.82 0 0 1 .684-.366.82.82 0 0 1 .684.366z"/>
                </svg>
                <span className="text-[#eceff1] font-medium">BryanMar11</span>
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#80cbd7] fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </svg>
                <span className="text-[#b2ccd6]">~</span>
                <span className="text-[#607d8b] font-bold tracking-tighter">&gt;&gt;</span>
                <span className="w-1.5 h-3.5 bg-[#eceff1] inline-block animate-[pulse_1s_infinite]"></span>
              </div>

              <div className="space-y-1">
                <div className="flex items-center space-x-2 text-[10px] font-mono tracking-widest text-[#1793d1] uppercase opacity-80">
                  <span>{idioma === 'es' ? 'Sobre mí' : 'About'}</span>
                  <span className="h-[1px] w-12 bg-gradient-to-r from-[#1793d1]/40 to-transparent"></span>
                </div>
                <h3 className="text-4xl font-black tracking-tight text-white uppercase leading-none">
                  BRAHIAN <br />
                  <span className="text-2xl font-light tracking-wide text-slate-400 block mt-1">
                    MARTINEZ
                  </span>
                </h3>
              </div>
            </div>

            {/* COLUMNA CENTRAL: Contenedor de la Imagen */}
            <div className="md:col-span-4 flex justify-center items-start">
              <div className="relative w-full max-w-[240px] aspect-[4/5] rounded-xl border border-slate-800 bg-[#070a13]/60 backdrop-blur-sm p-3 group overflow-hidden shadow-2xl transition-all duration-500 hover:border-[#1793d1]/40">
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#1793d1]/30 rounded-tl-lg group-hover:border-[#1793d1]"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#1793d1]/30 rounded-br-lg group-hover:border-[#1793d1]"></div>
                
                <div className="w-full h-full rounded-lg bg-[#0c101f] flex flex-col items-center justify-center border border-slate-900/50 text-slate-600 transition-colors duration-500 group-hover:text-[#1793d1]/60">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-14 h-14 mb-2 transform transition-transform duration-700 group-hover:scale-110">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                  <span className="font-mono text-[9px] tracking-widest uppercase opacity-40">
                    [ user_avatar ]
                  </span>
                </div>
              </div>
            </div>

            {/* COLUMNA DERECHA: Textos descriptivos + Botón de CV */}
            <div className="md:col-span-5 flex flex-col space-y-6 text-slate-300 md:pt-12">
              <div className="space-y-6 text-justify">
                <p className="text-base sm:text-lg leading-relaxed font-sans">
                  {idioma === 'es' 
                    ? 'Soy un desarrollador apasionado por crear soluciones eficientes, robustas y escalables. Me especializo en el diseño de arquitecturas de bases de datos sólidas y en la lógica del backend, optimizando procesos para ofrecer la mejor experiencia de usuario posible.' 
                    : 'I am a passionate developer focused on creating efficient, robust, and scalable solutions. I specialize in solid database architecture design and backend logic, optimizing processes to deliver the best possible user experience.'}
                </p>
                <p className="text-base sm:text-lg leading-relaxed font-sans">
                  {idioma === 'es'
                    ? 'Mi enfoque está en escribir código limpio, documentado y fácil de mantener, siempre buscando dominar nuevas tecnologías y entornos de desarrollo que desafíen mis habilidades lógicas.'
                    : 'My focus is on writing clean, documented, and maintainable code, always looking to master new technologies and development environments that challenge my logical skills.'}
                </p>
              </div>

              <div className="pt-2 self-start">
                <a 
                  href="/tu-cv.pdf" 
                  download="CV_Brahian_Martinez.pdf"
                  className="relative inline-flex items-center space-x-4 px-6 py-3 rounded-lg border border-slate-800/80 bg-gradient-to-r from-[#070a13]/80 to-[#0d1325]/80 backdrop-blur-md font-mono text-xs uppercase tracking-wider text-slate-300 transition-all duration-300 shadow-xl overflow-hidden group hover:border-[#1793d1]/80 hover:text-white hover:shadow-[0_0_20px_rgba(23,147,209,0.25)]"
                >
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#1793d1]/5 to-transparent -translate-x-full transition-transform duration-1000 group-hover:translate-x-full" />
                  <div className="relative flex items-center justify-center w-7 h-7 rounded-md bg-[#0c101f] border border-slate-800 group-hover:border-[#1793d1]/50 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-[#1793d1] transform transition-transform duration-300 group-hover:animate-bounce">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-start leading-tight">
                    <span className="font-bold tracking-widest">{idioma === 'es' ? 'Descargar CV' : 'Download CV'}</span>
                    <span className="text-[9px] text-[#1793d1] font-medium tracking-normal normal-case opacity-80 mt-0.5">[ PDF ]</span>
                  </div>
                </a>
              </div>
            </div>

          </div>
        ) : (
          
          /* ════════════════ PANTALLA 2: SKILLS (NUEVO COMPONENTE) ════════════════ */
          <Skills idioma={idioma} />
          
        )}

      </div>

      {/* ─── MARQUESINA INFINITA DEL FONDO: SOLO VISIBLE EN "ABOUT" ─── */}
      {tabActiva === 'about' && (
        <div className="absolute bottom-4 left-0 w-full overflow-hidden pointer-events-none z-0 select-none">
          <div 
            className="flex whitespace-nowrap w-max text-[12vw] font-black tracking-tighter uppercase leading-none"
            style={{ animation: 'marquee 25s linear infinite' }}
          >
            <div className="flex whitespace-nowrap">
              {textoMarquee} {textoMarquee} {textoMarquee}
            </div>
            <div className="flex whitespace-nowrap">
              {textoMarquee} {textoMarquee} {textoMarquee}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutMe;